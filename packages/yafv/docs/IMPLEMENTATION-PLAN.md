# YAFV P0 Gaps - Implementation Plan

> Plan de implementación para los 4 gaps críticos.
> Orden basado en dependencias y complejidad incremental.

## Orden de Implementación

```
GAP-002 (JSON type check)     ← Sin dependencias, cambio más simple
    ↓
GAP-001 (Shadow elements)     ← Sin dependencias, requiere nuevo archivo
    ↓
GAP-003 (FHIRPath resolve())  ← Requiere contexto de Bundle/Contained
    ↓
GAP-004 (FHIRPath memberOf()) ← Requiere terminology integration
```

---

## GAP-002: JSON Type Checking for Primitives

**Esfuerzo estimado**: Bajo
**Archivos a modificar**: `src/validators/primitive-types.ts`
**Tests**: `test/r4/primitive-types.test.ts`

### Cambios

#### 1. Agregar mapa de tipos JSON esperados

```typescript
// src/validators/primitive-types.ts

const EXPECTED_JSON_TYPES: Record<string, string> = {
  boolean: 'boolean',
  integer: 'number',
  positiveInt: 'number',
  unsignedInt: 'number',
  decimal: 'number',
  // Todos los demás → 'string'
};

function getExpectedJsonType(typeCode: string): string {
  return EXPECTED_JSON_TYPES[typeCode] || 'string';
}
```

#### 2. Modificar `validatePrimitiveType()` (línea ~61)

Agregar check de tipo JSON ANTES de la validación de regex/formato:

```typescript
export function validatePrimitiveType(value: any, typeCode: string): PrimitiveValidationResult {
  // NEW: JSON type checking
  const expectedJsonType = getExpectedJsonType(typeCode);
  const actualJsonType = typeof value;

  if (actualJsonType !== expectedJsonType) {
    return {
      valid: false,
      message: `Invalid JSON type: expected ${expectedJsonType} for FHIR type '${typeCode}', but got ${actualJsonType}`
    };
  }

  // NEW: Integer check for integer types
  if ((typeCode === 'integer' || typeCode === 'positiveInt' || typeCode === 'unsignedInt')
      && !Number.isInteger(value)) {
    return {
      valid: false,
      message: `Value must be an integer for FHIR type '${typeCode}', got decimal number`
    };
  }

  // ... existing validation continues ...
}
```

#### 3. Tests a agregar

```typescript
// Casos de JSON type mismatch
{ value: "true",  type: "boolean",  expected: "invalid" }   // string instead of boolean
{ value: 1,       type: "boolean",  expected: "invalid" }   // number instead of boolean
{ value: "123",   type: "integer",  expected: "invalid" }   // string instead of number
{ value: true,    type: "string",   expected: "invalid" }   // boolean instead of string
{ value: 1.5,     type: "integer",  expected: "invalid" }   // decimal for integer
{ value: 123,     type: "string",   expected: "invalid" }   // number instead of string
{ value: "2024",  type: "date",     expected: "valid"   }   // correct: string
{ value: true,    type: "boolean",  expected: "valid"   }   // correct: boolean
{ value: 42,      type: "integer",  expected: "valid"   }   // correct: number
```

### Impacto en código existente

- Solo modifica `primitive-types.ts` (el punto de entrada único para validación de primitivos)
- No cambia signatures ni interfaces
- Tests existentes pueden necesitar ajuste si pasan valores con tipo JSON incorrecto

---

## GAP-001: Shadow Element Validation

**Esfuerzo estimado**: Medio
**Archivos a crear**: `src/validators/shadow-element-validator.ts`
**Archivos a modificar**: `src/core/validator.ts` (integración en `checkUnknownElements`)
**Tests a crear**: `test/r4/shadow-elements.test.ts`

### Diseño

#### 1. Nuevo archivo: `src/validators/shadow-element-validator.ts`

```typescript
// Exporta:
export function validateShadowElements(
  data: Record<string, any>,
  elements: ElementDefinition[],
  basePath: string
): OperationOutcomeIssue[]
```

**Lógica:**

```
Para cada key en data que empiece con "_":
  1. Extraer el nombre sin "_" → primitiveKey
  2. Verificar que primitiveKey existe en data
     → Si no: error "Shadow element '_{name}' has no matching primitive element"
  3. Verificar que primitiveKey es un tipo primitivo en el SD
     → Si no: error "Shadow element '_{name}' can only be used with primitive types"
  4. Validar estructura del shadow element:
     a. Si es objeto: solo permite keys "id" y "extension"
        → Cualquier otra key: error "Invalid property '{key}' in shadow element"
     b. Si es array: cada item solo permite "id" y "extension" (o null)
        → Verificar alineación de índices con el array primitivo
  5. Validar extensions dentro del shadow usando extension-validator existente
```

#### 2. Integración en `validator.ts`

En `checkUnknownElements()` (~línea 460):

```typescript
// ANTES de reportar unknown elements, filtrar shadow elements
// Los shadow elements NO son "unknown" - tienen su propia validación

// Después de checkUnknownElements:
issues.push(...validateShadowElements(data, elements, context.path));
```

En `validateStructure()` (~línea 406):
- Excluir keys con prefijo `_` del check de unknown elements
- Delegar validación a `validateShadowElements()`

#### 3. Tests

```typescript
describe('Shadow Element Validation', () => {
  // Valid cases
  test('valid _birthDate with extension');
  test('valid _birthDate with id only');
  test('valid _given array alignment');
  test('shadow element with both id and extension');

  // Invalid cases
  test('orphan _foo without matching primitive');
  test('shadow element with invalid keys');
  test('shadow array misaligned with primitive array');
  test('shadow element on complex type (not primitive)');
  test('shadow element with nested invalid structure');
});
```

### Datos de ejemplo

```json
// Valid
{
  "birthDate": "1970-01-01",
  "_birthDate": {
    "extension": [{ "url": "http://example.org/ext", "valueString": "info" }]
  }
}

// Valid - array alignment
{
  "given": ["John", "James"],
  "_given": [
    null,
    { "extension": [{ "url": "http://example.org/ext", "valueString": "info" }] }
  ]
}

// Invalid - orphan shadow
{
  "_birthDate": { "extension": [{ "url": "http://example.org/ext", "valueString": "info" }] }
}

// Invalid - bad key in shadow
{
  "birthDate": "1970-01-01",
  "_birthDate": {
    "extension": [],
    "value": "invalid key"
  }
}
```

---

## GAP-003: FHIRPath `resolve()` Function

**Esfuerzo estimado**: Medio-Alto
**Archivos a modificar**: `src/validators/fhirpath-evaluator.ts`, `src/core/validator.ts`
**Archivos a crear**: `src/validators/fhirpath-resolver.ts`
**Tests a crear**: `test/r4/fhirpath-resolve.test.ts`

### Diseño

#### 1. Nuevo: `src/validators/fhirpath-resolver.ts`

```typescript
export interface ResourceIndex {
  /** Bundle entries indexed by fullUrl */
  bundleEntries: Map<string, any>;
  /** Contained resources indexed by #id */
  containedResources: Map<string, any>;
}

export function buildResourceIndex(resource: any): ResourceIndex {
  const index: ResourceIndex = {
    bundleEntries: new Map(),
    containedResources: new Map(),
  };

  // Index contained resources
  if (Array.isArray(resource.contained)) {
    for (const contained of resource.contained) {
      if (contained.id) {
        index.containedResources.set(contained.id, contained);
      }
    }
  }

  // Index bundle entries
  if (resource.resourceType === 'Bundle' && Array.isArray(resource.entry)) {
    for (const entry of resource.entry) {
      if (entry.fullUrl && entry.resource) {
        index.bundleEntries.set(entry.fullUrl, entry.resource);
      }
      // Also index by ResourceType/id
      if (entry.resource?.resourceType && entry.resource?.id) {
        const key = `${entry.resource.resourceType}/${entry.resource.id}`;
        index.bundleEntries.set(key, entry.resource);
      }
    }
  }

  return index;
}

export function resolveReference(
  reference: string,
  index: ResourceIndex
): any | undefined {
  if (!reference) return undefined;

  // #id → contained
  if (reference.startsWith('#')) {
    return index.containedResources.get(reference.slice(1));
  }

  // urn:uuid: or urn:oid: → bundle by fullUrl
  if (reference.startsWith('urn:')) {
    return index.bundleEntries.get(reference);
  }

  // Relative (Type/id) or absolute URL → bundle
  return index.bundleEntries.get(reference);
}
```

#### 2. Modificar `fhirpath-evaluator.ts`

Cambiar la interfaz `FHIRPathContext` para aceptar el índice:

```typescript
export interface FHIRPathContext {
  resource: any;
  rootResource?: any;
  context?: Record<string, any>;
  resourceIndex?: ResourceIndex;  // NEW
}
```

En `evaluate()`, registrar la función `resolve` de fhirpath.js:

```typescript
// fhirpath.js soporta userInvocationTable para funciones custom
// O usar el environment con una función resolve

const environment = {
  resource: context?.resource,
  rootResource: context?.rootResource,
  ...context?.context,
};

// Wire resolve() via fhirpath.js external functions
const options = {
  resolveInternalTypes: true,
  userInvocationTable: context?.resourceIndex ? {
    resolve: {
      fn: (inputs: any[]) => {
        return inputs.flatMap((input: any) => {
          const ref = typeof input === 'string' ? input : input?.reference;
          if (!ref) return [];
          const resolved = resolveReference(ref, context.resourceIndex!);
          return resolved ? [resolved] : [];
        });
      },
      arity: { 0: ['Any'] },
    }
  } : undefined,
};
```

> **Nota**: Verificar la API exacta de fhirpath.js para registrar funciones custom. Puede ser vía `userInvocationTable` o model options.

#### 3. Modificar `validator.ts`

En `validate()` (~línea 123), construir el índice al inicio:

```typescript
// After getting the resource:
const resourceIndex = buildResourceIndex(resource);

// Pass to context:
const fhirpathContext = {
  resource: resource,
  rootResource: resource,
  resourceIndex: resourceIndex,
};
```

Propagar `resourceIndex` a `validateConstraints()`.

#### 4. Tests

```typescript
describe('FHIRPath resolve()', () => {
  test('resolve contained reference #id');
  test('resolve bundle entry by fullUrl');
  test('resolve bundle entry by urn:uuid:');
  test('resolve relative reference Type/id in bundle');
  test('resolve returns empty for unknown reference');
  test('constraint using resolve() passes when reference resolves');
  test('constraint using resolve() fails when reference missing');
});
```

---

## GAP-004: FHIRPath `memberOf()` Function

**Esfuerzo estimado**: Medio
**Archivos a modificar**: `src/validators/fhirpath-evaluator.ts`
**Depende de**: SpecRegistry (ya existente), terminology-validator (ya existente)
**Tests a crear**: `test/r4/fhirpath-memberof.test.ts`

### Diseño

#### 1. Modificar `FHIRPathContext`

```typescript
export interface FHIRPathContext {
  resource: any;
  rootResource?: any;
  context?: Record<string, any>;
  resourceIndex?: ResourceIndex;
  registry?: SpecRegistry;              // NEW
  terminologyService?: TerminologyService; // NEW
}
```

#### 2. Registrar `memberOf` en fhirpath.js

```typescript
// En evaluate(), agregar al userInvocationTable:
memberOf: {
  fn: (inputs: any[], valueSetUrl: string) => {
    if (!context?.registry) return [];
    return inputs.map((input: any) => {
      return memberOfSync(input, valueSetUrl, context.registry!, context.terminologyService);
    });
  },
  arity: { 1: ['String'] },
}
```

#### 3. Función `memberOfSync`

```typescript
function memberOfSync(
  input: any,
  valueSetUrl: string,
  registry: SpecRegistry,
  terminologyService?: TerminologyService
): boolean {
  const valueSet = registry.getValueSet(valueSetUrl);
  if (!valueSet) return true; // Can't validate → assume valid

  // Case 1: input is a string (code)
  if (typeof input === 'string') {
    return isCodeInValueSet(input, undefined, valueSet, registry);
  }

  // Case 2: input is a Coding { system, code }
  if (input?.system && input?.code) {
    return isCodeInValueSet(input.code, input.system, valueSet, registry);
  }

  // Case 3: input is a CodeableConcept { coding: [...] }
  if (Array.isArray(input?.coding)) {
    return input.coding.some((c: any) =>
      isCodeInValueSet(c.code, c.system, valueSet, registry)
    );
  }

  return true; // Unknown type → assume valid
}
```

> **Nota**: `memberOf()` en FHIRPath es síncrono pero terminology-validator puede ser async. Explorar opciones:
> 1. Pre-expandir ValueSets usados en constraints durante `initialize()`
> 2. Usar solo validación local (sin HTTP calls al terminology server)
> 3. Evaluar si fhirpath.js soporta async user functions

#### 4. Propagación desde validator.ts

En `validateConstraints()`, pasar registry y terminology service al contexto FHIRPath:

```typescript
const fhirpathContext: FHIRPathContext = {
  resource: data,
  rootResource: context.rootResource,
  resourceIndex: context.resourceIndex,
  registry: this.registry,          // NEW
  terminologyService: this.terminologyService, // NEW
};
```

#### 5. Tests

```typescript
describe('FHIRPath memberOf()', () => {
  test('code memberOf returns true for valid code');
  test('code memberOf returns false for invalid code');
  test('Coding memberOf validates system+code');
  test('CodeableConcept memberOf checks any coding');
  test('unknown ValueSet returns true (fail-open)');
  test('constraint using memberOf passes');
  test('constraint using memberOf fails with error');
});
```

---

## Checklist de Validación Post-Implementación

Para cada GAP implementado, verificar contra el validador oficial de HAPI FHIR:

```bash
# Comparar resultados con HAPI FHIR validator
java -jar validator_cli.jar test-resource.json -version 4.0.1
```

### Tests de integración recomendados

1. **Patient con _birthDate** → Shadow element validation
2. **Patient con `"active": "true"`** → JSON type checking
3. **Bundle con constraints que usan resolve()** → FHIRPath resolve
4. **Observation con constraints que usan memberOf()** → FHIRPath memberOf
5. **Recurso de Chilean Core IG** → Validación end-to-end con todas las mejoras

---

## Archivos Afectados (Resumen)

```
NUEVOS:
  src/validators/shadow-element-validator.ts    ← GAP-001
  src/validators/fhirpath-resolver.ts           ← GAP-003
  test/r4/shadow-elements.test.ts               ← GAP-001
  test/r4/fhirpath-resolve.test.ts              ← GAP-003
  test/r4/fhirpath-memberof.test.ts             ← GAP-004
  test/r4/json-type-checking.test.ts            ← GAP-002

MODIFICADOS:
  src/validators/primitive-types.ts             ← GAP-002 (JSON type check)
  src/validators/fhirpath-evaluator.ts          ← GAP-003 + GAP-004
  src/core/validator.ts                         ← GAP-001 + GAP-003 + GAP-004
```

---

## Riesgos y Consideraciones

| Riesgo | Mitigación |
|--------|-----------|
| fhirpath.js no soporta `userInvocationTable` | Verificar API de fhirpath.js. Alternativa: monkey-patch o fork |
| `memberOf()` es sync pero terminology puede ser async | Usar solo validación local (ValueSets pre-expandidos) |
| Shadow element validation puede romper tests existentes | Ejecutar suite completa después de cada cambio |
| Performance de `buildResourceIndex()` en Bundles grandes | Index es O(n), resolución es O(1). Acceptable |
| Regresión en validación de extensiones por shadow elements | Separar claramente la lógica de shadow vs extension validation |
