/**
 * Core FHIR types for the validator
 */

// ============================================================================
// OperationOutcome Types
// ============================================================================

export type IssueSeverity = 'fatal' | 'error' | 'warning' | 'information';

export type IssueCode =
  | 'invalid'
  | 'structure'
  | 'required'
  | 'value'
  | 'invariant'
  | 'security'
  | 'login'
  | 'unknown'
  | 'expired'
  | 'forbidden'
  | 'suppressed'
  | 'processing'
  | 'not-supported'
  | 'duplicate'
  | 'multiple-matches'
  | 'not-found'
  | 'deleted'
  | 'too-long'
  | 'code-invalid'
  | 'extension'
  | 'too-costly'
  | 'business-rule'
  | 'conflict'
  | 'transient'
  | 'lock-error'
  | 'no-store'
  | 'exception'
  | 'timeout'
  | 'incomplete'
  | 'throttled'
  | 'informational';

export interface CodeableConcept {
  coding?: Coding[];
  text?: string;
}

export interface Coding {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
}

export interface OperationOutcomeIssue {
  severity: IssueSeverity;
  code: IssueCode;
  details?: CodeableConcept;
  diagnostics?: string;
  location?: string[];
  expression?: string[];
}

export interface OperationOutcome {
  resourceType: 'OperationOutcome';
  id?: string;
  issue: OperationOutcomeIssue[];
}

// ============================================================================
// StructureDefinition Types
// ============================================================================

export interface StructureDefinition {
  resourceType: 'StructureDefinition';
  id: string;
  url: string;
  version?: string;
  name: string;
  title?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  kind: 'primitive-type' | 'complex-type' | 'resource' | 'logical';
  abstract: boolean;
  type: string;
  baseDefinition?: string;
  derivation?: 'specialization' | 'constraint';
  snapshot?: StructureDefinitionSnapshot;
  differential?: StructureDefinitionDifferential;
}

export interface StructureDefinitionSnapshot {
  element: ElementDefinition[];
}

export interface StructureDefinitionDifferential {
  element: ElementDefinition[];
}

export interface ElementDefinition {
  id: string;
  path: string;
  sliceName?: string;
  slicing?: ElementDefinitionSlicing;
  short?: string;
  definition?: string;
  min: number;
  max: string;
  base?: ElementDefinitionBase;
  contentReference?: string;
  type?: ElementDefinitionType[];
  constraint?: ElementDefinitionConstraint[];
  binding?: ElementDefinitionBinding;
  mustSupport?: boolean;
  isModifier?: boolean;
  isSummary?: boolean;
  /** Fixed value - element must be exactly this value */
  fixed?: any;
  /** Pattern value - element must contain at least this (can have more) */
  pattern?: any;
  // Support for typed fixed[x] and pattern[x] variants
  [key: string]: any;
}

export interface ElementDefinitionSlicing {
  discriminator?: ElementDefinitionSlicingDiscriminator[];
  description?: string;
  ordered?: boolean;
  rules: 'closed' | 'open' | 'openAtEnd';
}

export interface ElementDefinitionSlicingDiscriminator {
  type: 'value' | 'exists' | 'pattern' | 'type' | 'profile';
  path: string;
}

export interface ElementDefinitionBase {
  path: string;
  min: number;
  max: string;
}

export interface ElementDefinitionType {
  code: string;
  profile?: string[];
  targetProfile?: string[];
  extension?: Extension[];
}

export interface ElementDefinitionConstraint {
  key: string;
  requirements?: string;
  severity: 'error' | 'warning';
  human: string;
  expression?: string;
  xpath?: string;
  source?: string;
}

export interface ElementDefinitionBinding {
  strength: 'required' | 'extensible' | 'preferred' | 'example';
  description?: string;
  valueSet?: string;
}

export interface Extension {
  url: string;
  valueString?: string;
  valueCode?: string;
  valueUri?: string;
  valueUrl?: string;
  valueBoolean?: boolean;
  valueInteger?: number;
}

// ============================================================================
// ValueSet and CodeSystem Types
// ============================================================================

export interface ValueSet {
  resourceType: 'ValueSet';
  id?: string;
  url: string;
  version?: string;
  name: string;
  title?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  compose?: ValueSetCompose;
  expansion?: ValueSetExpansion;
}

export interface ValueSetCompose {
  include: ValueSetComposeInclude[];
  exclude?: ValueSetComposeInclude[];
}

export interface ValueSetComposeInclude {
  system?: string;
  version?: string;
  concept?: ValueSetComposeIncludeConcept[];
  filter?: ValueSetComposeIncludeFilter[];
  valueSet?: string[];
}

export interface ValueSetComposeIncludeConcept {
  code: string;
  display?: string;
}

export interface ValueSetComposeIncludeFilter {
  property: string;
  op: 'is-a' | 'descendent-of' | 'is-not-a' | 'regex' | 'in' | 'not-in' | 'generalizes' | 'exists' | '=';
  value: string;
}

export interface ValueSetExpansion {
  identifier?: string;
  timestamp: string;
  total?: number;
  contains?: ValueSetExpansionContains[];
}

export interface ValueSetExpansionContains {
  system?: string;
  code?: string;
  display?: string;
}

export interface CodeSystem {
  resourceType: 'CodeSystem';
  id?: string;
  url: string;
  version?: string;
  name: string;
  title?: string;
  status: 'draft' | 'active' | 'retired' | 'unknown';
  content: 'not-present' | 'example' | 'fragment' | 'complete' | 'supplement';
  concept?: CodeSystemConcept[];
}

export interface CodeSystemConcept {
  code: string;
  display?: string;
  definition?: string;
  concept?: CodeSystemConcept[];
}

// ============================================================================
// Validation Types
// ============================================================================

export interface ValidationOptions {
  /** URL of a specific profile to validate against */
  profile?: string;
  /** Validation level */
  level?: 'structural' | 'constraints' | 'terminology' | 'full';
  /** Stop on first error */
  failFast?: boolean;
  /** Include warnings in output */
  includeWarnings?: boolean;
  /**
   * Validate mustSupport elements from profiles.
   * When enabled, generates warnings for mustSupport elements that are not present.
   * This is useful for data producers who need to ensure they include all expected data.
   * @default false
   */
  validateMustSupport?: boolean;
}

export interface ValidationContext {
  /** The root resource being validated */
  rootResource: any;
  /** Current data being validated */
  data: any;
  /** Current path in the resource */
  path: string;
  /** Parent path */
  parentPath?: string;
  /** Expected types for this element (for better error messages) */
  expectedTypes?: string[];
  /** Source location (line/column) if available */
  location?: {
    line?: number;
    column?: number;
  };
}

// ============================================================================
// Generic FHIR Resource
// ============================================================================

export interface FhirResource {
  resourceType: string;
  id?: string;
  meta?: {
    versionId?: string;
    lastUpdated?: string;
    source?: string;
    profile?: string[];
    security?: Coding[];
    tag?: Coding[];
  };
  [key: string]: any;
}
