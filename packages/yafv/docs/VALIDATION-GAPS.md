# YAFV Validation Gaps Analysis

> Comparative analysis against Go FHIR Validator (go-validator).
> Date: 2026-03-06
> Updated: 2026-03-06

## Status Summary

| Gap | Status | Notes |
|-----|--------|-------|
| GAP-001: Shadow elements | **Already implemented** | Was already in checkUnknownElements(). Minor sub-gap: array alignment. |
| GAP-002: JSON type checking | **Already implemented** | Each primitive validator already checks `typeof`. |
| GAP-003: FHIRPath resolve() | **IMPLEMENTED** | Via userInvocationTable + mutable closure pattern. |
| GAP-004: FHIRPath memberOf() | **IMPLEMENTED** | Local sync validation against SpecRegistry ValueSets. |
| GAP-005: Extension context | **IMPLEMENTED** | Validates element context type. fhirpath/extension contexts accepted. |
| GAP-006: fullUrl/id consistency | **IMPLEMENTED** | Checks non-URN fullUrls end with /resourceType/id. |
| GAP-007: Aggregation modes | **IMPLEMENTED** | Validates contained/referenced/bundled modes. |
| GAP-008: Constraint timeout | **IMPLEMENTED** | Configurable via constraintTimeoutMs (default 10s). |
| GAP-009: Dynamic regex from SD | **IMPLEMENTED** | Extracts regex from StructureDefinition, falls back to hardcoded. |
| GAP-010: Line/column location | **IMPLEMENTED** | Via `includeSourceLocation` + `sourceJson` options. |
| GAP-011: History version refs | **IMPLEMENTED** | Supports `/_history/{versionId}` in references. |
| GAP-012: External profile resolver | **IMPLEMENTED** | `externalProfileResolver` option on ValidatorOptions. |
| GAP-013: Extension context merging | **IMPLEMENTED** | Merges context arrays when same extension loaded from multiple packages. |

## Table of Contents

- [Critical Gaps (P0)](#critical-gaps-p0)
- [Important Gaps (P1)](#important-gaps-p1)
- [Minor Gaps (P2)](#minor-gaps-p2)
- [Where YAFV is Superior](#where-yafv-is-superior)
- [Go Validator Gaps](#go-validator-gaps)

---

## Critical Gaps (P0)

### GAP-001: Shadow Element Validation

**Status**: Not implemented
**Impact**: High - Fundamental to FHIR JSON representation
**Files affected**: `src/core/validator.ts`, `src/validators/` (new file needed)

#### Description

FHIR JSON uses "shadow elements" (prefixed with `_`) to carry metadata (id, extensions) for primitive types. For example:

```json
{
  "birthDate": "1970-01-01",
  "_birthDate": {
    "id": "birth-date-id",
    "extension": [{
      "url": "http://example.org/ext",
      "valueString": "some metadata"
    }]
  }
}
```

#### What Go validates

1. **Orphan shadow elements**: `_foo` without a matching `foo` primitive is flagged as unknown
2. **Shadow element keys**: Only `id` and `extension` are allowed inside `_element` objects
3. **Array alignment**: For arrays like `given`, `_given` must align index-by-index

```
// Go error: STRUCTURE_UNKNOWN_ELEMENT
// "Unknown element '_foo'" when no matching primitive exists
```

#### What YAFV does

Nothing. Shadow elements (`_birthDate`, `_given`, etc.) are completely ignored by the structural validator.

#### Implementation plan

1. During structural validation, detect keys starting with `_`
2. Verify a matching primitive element exists (without `_` prefix)
3. Validate that shadow element only contains `id` and `extension` keys
4. For array primitives, validate index alignment between `foo[]` and `_foo[]`
5. Validate extensions within shadow elements using existing extension validator

#### FHIR spec reference

- https://hl7.org/fhir/R4/json.html#primitive

---

### GAP-002: JSON Type Checking for Primitives

**Status**: Not implemented
**Impact**: High - Invalid JSON types silently accepted
**Files affected**: `src/validators/primitive-types.ts`

#### Description

FHIR requires specific JSON types for primitive values:

| FHIR Type | Required JSON Type |
|-----------|-------------------|
| `boolean` | JSON boolean (`true`/`false`) |
| `integer`, `positiveInt`, `unsignedInt` | JSON number (no decimals) |
| `decimal` | JSON number |
| All others (string, date, uri, etc.) | JSON string |

#### What Go validates

```go
func getExpectedJSONType(typeName string) string {
    switch typeName {
    case "boolean":
        return "boolean"
    case "integer", "decimal", "positiveInt", "unsignedInt":
        return "number"
    default:
        return "string"
    }
}
// Error ID: TYPE_WRONG_JSON_TYPE
// "Error parsing JSON: the primitive value must be a {expected}"
```

#### What YAFV does

Only validates format via regex after coercing to string. This means:

```json
{ "active": "true" }
```

...is silently accepted as valid even though `active` is a boolean and must be JSON `true`/`false`, not a string.

#### Implementation plan

1. Before regex validation in `validatePrimitiveType()`, check `typeof value`
2. Map FHIR type to expected JS type: `boolean` -> `"boolean"`, integer types -> `"number"`, others -> `"string"`
3. For number types, additionally check `Number.isInteger()` for integer/positiveInt/unsignedInt
4. Report error with clear message: `"Expected JSON {type} for FHIR type {fhirType}, got {actual}"`

#### FHIR spec reference

- https://hl7.org/fhir/R4/json.html#primitive

---

### GAP-003: FHIRPath `resolve()` Function

**Status**: Not implemented
**Impact**: High - Many spec constraints fail silently
**Files affected**: `src/validators/fhirpath-evaluator.ts`

#### Description

The `resolve()` function in FHIRPath is used by many FHIR constraints to follow references and validate properties of the target resource. Without it, constraints that use `resolve()` silently pass or fail to evaluate.

#### Examples of affected constraints

```
// bdl-3: Bundle entry fullUrl resolution
entry.where(fullUrl.exists()).select(fullUrl&resource.meta.versionId).isDistinct()

// obs-6: Observation reference resolution
dataAbsentReason.empty() or hasMember.resolve().code.coding.where(
  code='no-answer').exists().not()

// Many profile-specific constraints use resolve() to validate cross-resource references
```

#### What Go implements

```go
// fhirpathResolver searches:
// 1. Bundle entries by fullUrl match
// 2. Contained resources by fragment ID (#id)
type fhirpathResolver struct {
    bundleEntries    map[string]interface{}
    containedResources map[string]interface{}
}
```

#### Implementation plan

1. Create a `FHIRPathResolver` that receives bundle context and contained resources
2. Wire into fhirpath.js evaluation via the `resolve` external function
3. For `#id` references: look up in contained resources
4. For `urn:uuid:` / `urn:oid:`: look up in Bundle entries by fullUrl
5. For relative references (`Type/id`): look up in Bundle entries
6. Pass resolver context through the validation pipeline

#### FHIR spec reference

- https://hl7.org/fhir/R4/fhirpath.html#functions
- https://hl7.org/fhir/R4/fhirpath.html#resolve

---

### GAP-004: FHIRPath `memberOf()` Function

**Status**: Not implemented
**Impact**: High - Terminology constraints in FHIRPath not evaluated
**Files affected**: `src/validators/fhirpath-evaluator.ts`

#### Description

The `memberOf()` function checks if a code/Coding/CodeableConcept is a member of a ValueSet. Used by many FHIR constraints for inline terminology validation.

#### Examples of affected constraints

```
// eld-13: ElementDefinition
Types SHALL be unique by code (code.memberOf('http://hl7.org/fhir/ValueSet/defined-types'))

// Multiple constraints across resources use memberOf() for inline terminology checks
```

#### What Go implements

```go
// fhirpathTermService delegates to terminology.Registry.ValidateCode()
type fhirpathTermService struct {
    registry *terminology.Registry
}

func (s *fhirpathTermService) MemberOf(code, system, valueSetURL string) (bool, error) {
    return s.registry.ValidateCode(system, code, valueSetURL)
}
```

#### Implementation plan

1. Create a `FHIRPathTerminologyService` adapter
2. Wire into fhirpath.js via the `memberOf` external function
3. Delegate to existing `terminology-validator.ts` for code validation
4. Support `code`, `Coding`, and `CodeableConcept` inputs
5. Use the existing SpecRegistry for ValueSet/CodeSystem lookups

#### FHIR spec reference

- https://hl7.org/fhir/R4/fhirpath.html#functions
- https://hl7.org/fhir/R4/fhirpath.html#memberof

---

## Important Gaps (P1)

### GAP-005: Extension Context Validation

**Status**: Not implemented
**Impact**: Medium - Extensions used in wrong contexts not detected
**Files affected**: `src/validators/extension-validator.ts`

#### Description

FHIR extensions declare contexts where they are allowed to be used via `StructureDefinition.context`. An extension with `context = [{ type: "element", expression: "Patient" }]` should only appear on Patient resources.

#### What Go validates

```go
func (v *Validator) validateContext(extDef *specs.StructureDefinition, path string) *Issue {
    // Matches against:
    // - Direct resource type ("Patient")
    // - Path prefix ("Patient.name")
    // - Abstract types (Element, Resource, DomainResource)
    // - DataType contexts ("Coding", "HumanName.family")
    // - Primitive type contexts
    // Error ID: EXTENSION_INVALID_CONTEXT
    // "Extension '{url}' is not allowed in context '{context}'"
}
```

#### What YAFV does

Validates extension structure (url, value, nested) but does NOT check whether the extension is allowed at its current location.

#### Implementation plan

1. When validating an extension with a known StructureDefinition, read `context[]`
2. Match `contextType` against current element path
3. Support context types: `fhirpath`, `element`, `extension`
4. Handle abstract type matching (Element, Resource, DomainResource, CanonicalResource, MetadataResource)
5. Report error for modifier extensions, warning for regular extensions

---

### GAP-006: Bundle fullUrl/id Consistency

**Status**: Not implemented
**Impact**: Medium - Inconsistent fullUrl and resource.id not detected
**Files affected**: `src/validators/bundle-validator.ts`

#### Description

For non-URN fullUrls, the fullUrl must end with `/{resourceType}/{id}` matching the resource's type and id.

#### What Go validates

```go
func ValidateBundleFullUrls(bundle map[string]interface{}) []*Issue {
    // For non-URN fullUrls (not urn:uuid: or urn:oid:):
    // fullUrl must end with "/{resource.id}"
    // Error ID: BUNDLE_FULLURL_ID_MISMATCH
    // "fullUrl '{fullUrl}' is not consistent with resource id '{id}'"
}
```

#### Implementation plan

1. In `validateBundle()`, after validating each entry:
2. If `entry.fullUrl` exists and is NOT a URN (`urn:uuid:` or `urn:oid:`):
3. Check that fullUrl ends with `/{resource.id}`
4. Optionally check that the path segment before id matches resourceType

---

### GAP-007: Reference Aggregation Mode Validation

**Status**: Not implemented
**Impact**: Medium - Aggregation constraints not enforced
**Files affected**: `src/validators/reference-validator.ts`

#### Description

`ElementDefinition.type[].aggregation` restricts how references can be provided: `contained`, `referenced`, or `bundled`.

#### What Go validates

```go
func validateAggregation(ref string, allowedAggregations []string) *Issue {
    // Determines actual aggregation mode from reference format:
    // - "#..." -> "contained"
    // - "urn:..." -> "bundled"
    // - relative/absolute URL -> "referenced"
    // Error ID: REFERENCE_AGGREGATION_MODE
    // "Reference '{ref}' is not allowed by aggregation mode. Allowed: {allowed}"
}
```

#### Implementation plan

1. In `validateReference()`, extract aggregation modes from `ElementDefinition.type[].aggregation`
2. Determine actual mode from reference format
3. Check actual mode is in allowed list
4. Only enforce when aggregation is explicitly specified (empty = all allowed)

---

### GAP-008: FHIRPath Safety Limits

**Status**: Not implemented
**Impact**: Medium - Malicious/recursive expressions can hang the process
**Files affected**: `src/validators/fhirpath-evaluator.ts`

#### Description

FHIRPath expressions evaluated without timeout or depth limits could cause denial of service.

#### What Go implements

```go
// Timeout: 5 seconds per expression
// maxDepth: 100
// maxCollectionSize: 10000
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()
```

#### Implementation plan

1. Wrap fhirpath.js evaluation in a timeout mechanism (e.g., `AbortController` or `Promise.race`)
2. Configure max evaluation time (default 5s)
3. Consider using worker threads for isolation if needed
4. Add configurable limits to validator options

---

### GAP-009: Dynamic Regex from StructureDefinition

**Status**: IMPLEMENTED
**Impact**: Medium - New primitive types in future FHIR versions require code changes
**Files affected**: `src/validators/primitive-types.ts`

#### Description

Go validator extracts regex patterns dynamically from each primitive type's StructureDefinition (from the `.value` element's `http://hl7.org/fhir/StructureDefinition/regex` extension). YAFV hardcodes all regex patterns.

#### What Go does

```go
func extractRegexFromSD(sd *specs.StructureDefinition) string {
    // Find {TypeName}.value element
    // Extract regex from extension: http://hl7.org/fhir/StructureDefinition/regex
    // Compile with ^ and $ anchors
    // Cache per type name
}
```

#### Current YAFV approach

All 20 primitive type patterns are hardcoded in `primitive-types.ts`. While functionally correct for R4, this requires manual updates for each new FHIR version.

#### Implementation plan

1. On initialization, iterate primitive type StructureDefinitions
2. For each, find the `.value` element and extract regex extension
3. Compile and cache patterns
4. Fall back to hardcoded patterns if SD regex not found (backward compatibility)
5. This also future-proofs for R5+ changes

---

## Minor Gaps (P2)

### GAP-010: Line/Column Location in Errors

**Status**: IMPLEMENTED
**Impact**: Low-Medium - Developer experience for debugging
**Files affected**: `src/core/validator.ts` (new utility needed)

#### Description

Go validator enriches every validation issue with the line number and column number in the source JSON where the error occurs. YAFV only provides the FHIRPath of the element.

#### What Go implements

```go
// pkg/location/location.go
// Maps FHIRPath expressions to line/column in source JSON
// Added to all issues post-validation via location.Find()
```

#### Implementation plan

1. Parse JSON with a position-tracking parser (e.g., `jsonc-parser` or custom tokenizer)
2. Build a map of JSON paths to `{line, column}` positions
3. After validation, enrich each issue with source location
4. Make this optional (performance cost) via validator options

---

### GAP-011: History Version References

**Status**: IMPLEMENTED
**Impact**: Low
**Files affected**: `src/validators/reference-validator.ts`

#### Description

FHIR supports versioned references like `Patient/123/_history/2`. The Go validator recognizes this pattern; YAFV does not.

#### Go regex

```go
relativeRefPattern = `^[A-Za-z]+/[A-Za-z0-9\-.]+(?:/_history/[A-Za-z0-9\-.]+)?$`
absoluteRefPattern = `^https?://\S+/[A-Za-z]+/[A-Za-z0-9\-.]+(?:/_history/[A-Za-z0-9\-.]+)?$`
```

#### Implementation plan

Update reference parsing regex to accept optional `/_history/{versionId}` suffix.

---

### GAP-012: External Profile Resolver

**Status**: IMPLEMENTED
**Impact**: Low-Medium
**Files affected**: `src/core/validator.ts`, `src/core/spec-registry.ts`

#### Description

When a profile URL is not found in the local registry, the Go validator supports an external resolver callback to fetch it from a remote source. YAFV only looks in its local registry.

#### Implementation plan

1. Add `externalResolver?: (url: string) => Promise<StructureDefinition | null>` option
2. Call resolver when `getStructureDefinition()` returns null
3. Cache resolved profiles in the registry
4. Support async resolution with timeout

---

### GAP-013: Extension Context Merging Across Packages

**Status**: IMPLEMENTED
**Impact**: Low
**Files affected**: `src/core/spec-registry.ts`

#### Description

When the same extension is defined in multiple loaded IGs/packages, Go merges the context arrays. YAFV overwrites.

#### Implementation plan

When loading an extension StructureDefinition that already exists in registry, merge `context[]` arrays instead of replacing.

---

## Where YAFV is Superior

These are features YAFV has that the Go validator lacks. Document here for reference when improving go-validator.

### YAFV-ADV-001: MustSupport Validation

**File**: `src/core/validator.ts`
**Description**: YAFV can validate that mustSupport elements from profiles are present, generating warnings for missing elements. Useful for IG conformance testing.
**Go status**: Not implemented.

### YAFV-ADV-002: Preferred Binding Validation

**File**: `src/validators/terminology-validator.ts`
**Description**: YAFV validates preferred bindings as informational messages. Go skips preferred and example bindings entirely.
**Go status**: Not implemented (intentionally skipped).

### YAFV-ADV-003: Contained Resource Duplicate ID Detection

**File**: `src/validators/contained-validator.ts`
**Description**: YAFV detects duplicate `id` values within the `contained` array.
**Go status**: Not explicitly checked.

### YAFV-ADV-004: Unreferenced Contained Resource Detection

**File**: `src/validators/contained-validator.ts`
**Description**: YAFV detects contained resources that are never referenced from the parent resource.
**Go status**: Not implemented.

### YAFV-ADV-005: Fail-Fast Mode

**File**: `src/core/validator.ts`
**Description**: YAFV supports `failFast` option to stop validation on first error, useful for performance.
**Go status**: Not implemented.

### YAFV-ADV-006: Issue Deduplication

**File**: `src/core/validator.ts`
**Description**: When validating against multiple profiles, YAFV deduplicates identical issues, preferring profile-specific messages.
**Go status**: Not implemented.

### YAFV-ADV-007: Batch Validation API

**File**: `src/core/validator.ts`
**Description**: `validateAll()` method for validating arrays of resources efficiently.
**Go status**: Not implemented (CLI processes files sequentially).

---

## Go Validator Gaps

Gaps identified in go-validator that should also be addressed.

### GO-GAP-001: ValueSet compose.exclude Not Implemented

**File**: `pkg/terminology/terminology.go`
**Description**: The `compose.exclude` section is declared in the struct but not used during ValueSet expansion. Codes that should be excluded are still considered valid.
**Impact**: Medium - Incorrect terminology validation for ValueSets with exclusions.

### GO-GAP-002: Limited ValueSet Filter Operators

**File**: `pkg/terminology/terminology.go`
**Description**: Only `is-a` and `=` filter operators are implemented. Missing: `descendent-of`, `in`, `not-in`, `regex`, `exists`.
**Impact**: Low-Medium - Some ValueSets with complex filters can't be expanded locally.

### GO-GAP-003: No MustSupport Validation

**Description**: Go validator does not check mustSupport elements from profiles.
**Impact**: Low - Useful for IG conformance testing.

### GO-GAP-004: No Fail-Fast Mode

**Description**: Go validator always runs all 9 phases completely.
**Impact**: Low - Performance optimization for quick checks.

### GO-GAP-005: No Issue Deduplication

**Description**: Multi-profile validation can produce duplicate issues.
**Impact**: Low - UX issue.

### GO-GAP-006: No Duplicate Contained ID Detection

**Description**: Contained resources with duplicate IDs are not flagged.
**Impact**: Low.

### GO-GAP-007: No Unreferenced Contained Resource Detection

**Description**: Contained resources that are never referenced are not flagged.
**Impact**: Low.

### GO-GAP-008: No XHTML Structural Validation

**File**: `pkg/primitive/primitive.go`
**Description**: XHTML is only validated by regex format. No validation of allowed HTML elements/attributes per the FHIR XHTML subset.
**Impact**: Low-Medium.

### GO-GAP-009: Best Practice Constraint Handling

**File**: `pkg/constraint/constraint.go`
**Description**: `isBestPractice()` always returns `false`. Best-practice constraints are evaluated as regular constraints instead of being separately flaggable.
**Impact**: Low.

---

## FHIR Spec Compliance Features

Beyond the Go validator parity gaps above, the following FHIR spec features have also been implemented:

| Feature | Status | Description |
|---------|--------|-------------|
| maxLength validation | **IMPLEMENTED** | Validates string elements against `ElementDefinition.maxLength` constraints from profiles |
| minValue/maxValue validation | **IMPLEMENTED** | Validates ordered types (integer, decimal, date, etc.) against `minValue[x]`/`maxValue[x]` bounds |
| contentReference resolution | **IMPLEMENTED** | Resolves `contentReference` (e.g., `#Questionnaire.item`) for recursive structures and validates cardinality of children |
| XHTML subset validation | **IMPLEMENTED** | Validates FHIR narrative against allowed HTML elements/attributes (no script, style, event handlers) |

### Remaining Minor Spec Gaps

| Feature | Status | Impact |
|---------|--------|--------|
| Element ordering | Not implemented | Low - FHIR JSON does not require element ordering |
| `condition` references between constraints | Not implemented | Low - Informational cross-referencing |
| `isSummary` flag handling | Not implemented | Low - Only relevant for search/summary contexts |

## Implementation Priority

```
Phase 1 - Critical (FHIR Compliance) - ALL IMPLEMENTED
  GAP-001: Shadow element validation
  GAP-002: JSON type checking
  GAP-003: FHIRPath resolve()
  GAP-004: FHIRPath memberOf()

Phase 2 - Important (Completeness) - ALL IMPLEMENTED
  GAP-005: Extension context validation
  GAP-006: Bundle fullUrl/id consistency
  GAP-007: Reference aggregation modes
  GAP-008: FHIRPath safety limits

Phase 3 - Nice to Have (Optimization) - ALL IMPLEMENTED
  GAP-009: Dynamic regex from SD
  GAP-010: Line/column location
  GAP-011: History version references
  GAP-012: External profile resolver
  GAP-013: Extension context merging

Phase 4 - Spec Compliance (Beyond Go parity) - ALL IMPLEMENTED
  maxLength validation
  minValue[x]/maxValue[x] validation
  contentReference resolution
  XHTML subset validation
```
