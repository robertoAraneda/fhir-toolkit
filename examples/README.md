# FHIR Toolkit Examples

Esta carpeta contiene ejemplos de uso de la librería FHIR Toolkit.

## Requisitos

```bash
# Instalar dependencias desde la raíz del proyecto
pnpm install
```

## Ejemplos Disponibles

### 1. Validación (TypeScript ESM)

Demuestra cómo usar el validador yafv para validar recursos FHIR.

```bash
pnpm --filter @fhir-toolkit/examples run example:validation
```

**Características demostradas:**
- Validación de recursos válidos e inválidos
- Uso de `validate()` e `isValid()`
- Creación de instancia `FhirValidator`
- Validación batch con `validateAll()`
- Errores estructurados con detalles

### 2. Validación (CommonJS/JavaScript)

Muestra que la librería es compatible con `require()` de Node.js.

```bash
pnpm --filter @fhir-toolkit/examples run example:validation-cjs
```

### 3. Type Guards

Demuestra el uso de type guards para verificación de tipos en runtime.

```bash
pnpm --filter @fhir-toolkit/examples run example:type-guards
```

**Características demostradas:**
- Funciones `isPatient()`, `isObservation()`, etc.
- Type narrowing en TypeScript
- Filtrado de arrays por tipo
- `isFhirResource()` y `getResourceType()`
- Procesamiento de Bundles

### 4. Builders

Muestra el uso de builders fluentes para crear recursos FHIR.

```bash
pnpm --filter @fhir-toolkit/examples run example:builders
```

**Recursos demostrados:**
- Patient (simple y completo)
- Observation (signos vitales, presión arterial con componentes)
- Practitioner
- Organization
- Encounter
- Condition
- MedicationRequest
- Bundle

### Ejecutar Todos los Ejemplos

```bash
pnpm --filter @fhir-toolkit/examples run example:all
```

## Uso en Tu Proyecto

### TypeScript/ESM

```typescript
import { validate, isValid } from '@fhir-toolkit/yafv';
import { PatientBuilder, isPatient } from '@fhir-toolkit/r4-models';

// Crear un paciente
const patient = new PatientBuilder()
  .setActive(true)
  .addName({ family: 'Smith', given: ['John'] })
  .setGender('male')
  .build();

// Validar
const outcome = await validate(patient);
console.log('Valid:', await isValid(patient));

// Type guard
if (isPatient(patient)) {
  console.log('Patient name:', patient.name?.[0]?.family);
}
```

### JavaScript/CommonJS

```javascript
const { validate, isValid } = require('@fhir-toolkit/yafv');
const { PatientBuilder, isPatient } = require('@fhir-toolkit/r4-models');

async function main() {
  const patient = new PatientBuilder()
    .setActive(true)
    .addName({ family: 'Smith', given: ['John'] })
    .setGender('male')
    .build();

  const valid = await isValid(patient);
  console.log('Valid:', valid);
}

main();
```

## API de Choice Types

Los builders usan una API genérica para choice types (campos con [x]):

```typescript
// Observation.value[x]
builder.setValue('Quantity', { value: 37.2, unit: 'Cel' });
builder.setValue('String', 'Normal');
builder.setValue('Boolean', true);

// Observation.effective[x]
builder.setEffective('DateTime', '2024-01-15T10:30:00Z');
builder.setEffective('Period', { start: '2024-01-01', end: '2024-01-15' });

// Condition.onset[x]
builder.setOnset('DateTime', '2020-06-15');
builder.setOnset('Age', { value: 45, unit: 'years' });

// MedicationRequest.medication[x]
builder.setMedication('CodeableConcept', { coding: [...] });
builder.setMedication('Reference', { reference: 'Medication/123' });
```
