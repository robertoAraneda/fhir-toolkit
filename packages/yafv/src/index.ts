/**
 * yafv - Yet Another FHIR Validator
 *
 * A complete FHIR R4 validator with bundled specs and FHIRPath support.
 *
 * @example
 * ```typescript
 * import { validate, FhirValidator } from 'yafv';
 *
 * // Simple usage with default validator
 * const outcome = await validate(patient);
 *
 * // Custom validator with options
 * const validator = new FhirValidator();
 * await validator.initialize();
 * const result = await validator.validate(patient, { profile: 'http://...' });
 * ```
 */

// Core types
export type {
  // OperationOutcome types
  IssueSeverity,
  IssueCode,
  CodeableConcept,
  Coding,
  OperationOutcomeIssue,
  OperationOutcome,

  // StructureDefinition types
  StructureDefinition,
  StructureDefinitionSnapshot,
  StructureDefinitionDifferential,
  ElementDefinition,
  ElementDefinitionSlicing,
  ElementDefinitionSlicingDiscriminator,
  ElementDefinitionBase,
  ElementDefinitionType,
  ElementDefinitionConstraint,
  ElementDefinitionBinding,
  Extension,

  // ValueSet and CodeSystem types
  ValueSet,
  ValueSetCompose,
  ValueSetComposeInclude,
  ValueSetComposeIncludeConcept,
  ValueSetComposeIncludeFilter,
  ValueSetExpansion,
  ValueSetExpansionContains,
  CodeSystem,
  CodeSystemConcept,

  // Validation types
  ValidationOptions,
  ValidationContext,
  FhirResource,
} from './core/types.js';

// SpecRegistry
export {
  SpecRegistry,
  getDefaultRegistry,
  initializeDefaultRegistry,
} from './core/spec-registry.js';

export type {
  SpecType,
  LoadedSpec,
  SpecRegistryOptions,
} from './core/spec-registry.js';

// IG Loader
export {
  IGLoader,
  createIGLoader,
  loadIG,
} from './core/ig-loader.js';

export type {
  IGLoadOptions,
  IGLoadResult,
} from './core/ig-loader.js';

// Validator
export {
  FhirValidator,
  getDefaultValidator,
  validate,
  isValid,
} from './core/validator.js';

export type {
  ValidatorOptions,
} from './core/validator.js';

// Bundle validator
export {
  validateBundle,
} from './validators/bundle-validator.js';

export type {
  Bundle,
  BundleEntry,
  BundleValidationResult,
} from './validators/bundle-validator.js';

// Contained validator
export {
  validateContainedResources,
  resolveContainedReference,
} from './validators/contained-validator.js';

export type {
  ContainedValidationResult,
  ContainedValidationOptions,
} from './validators/contained-validator.js';

// Reference validator
export {
  validateReference,
  parseReference,
  referencesMatch,
} from './validators/reference-validator.js';

export type {
  Reference,
  ReferenceValidationResult,
} from './validators/reference-validator.js';
