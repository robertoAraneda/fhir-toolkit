import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IPlanDefinition,
  IPlanDefinitionAction,
  IPlanDefinitionGoal,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PlanDefinition */
const PLAN_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'subtitle',
  '_subtitle',
  'type',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'subjectCodeableConcept',
  'subjectReference',
  'subjectCanonical',
  '_subjectCanonical',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'usage',
  '_usage',
  'copyright',
  '_copyright',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'topic',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'relatedArtifact',
  'library',
  '_library',
  'goal',
  'action',
] as const;

/**
 * PlanDefinition - This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications.
 *
 * @see https://hl7.org/fhir/R4/plandefinition.html
 *
 * @example
 * const planDefinition = new PlanDefinition({
 *   // ... properties
 * });
 */
export class PlanDefinition extends DomainResource implements IPlanDefinition {
  readonly resourceType = 'PlanDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the plan definition */
  identifier?: IIdentifier[];

  /** Business version of the plan definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this plan definition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this plan definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Subordinate title of the plan definition */
  subtitle?: string;

  /** Extension for subtitle */
  _subtitle?: IElement;

  /** order-set | clinical-protocol | eca-rule | workflow-definition */
  type?: ICodeableConcept;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Type of individual the plan definition is focused on */
  subjectCodeableConcept?: ICodeableConcept;

  /** Type of individual the plan definition is focused on */
  subjectReference?: IReference;

  /** Type of individual the plan definition is focused on */
  subjectCanonical?: string;

  /** Extension for subjectCanonical */
  _subjectCanonical?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the plan definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for plan definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this plan definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Describes the clinical usage of the plan */
  usage?: string;

  /** Extension for usage */
  _usage?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the plan definition was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the plan definition was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the plan definition is expected to be used */
  effectivePeriod?: IPeriod;

  /** E.g. Education, Treatment, Assessment */
  topic?: ICodeableConcept[];

  /** Who authored the content */
  author?: IContactDetail[];

  /** Who edited the content */
  editor?: IContactDetail[];

  /** Who reviewed the content */
  reviewer?: IContactDetail[];

  /** Who endorsed the content */
  endorser?: IContactDetail[];

  /** Additional documentation, citations */
  relatedArtifact?: IRelatedArtifact[];

  /** Logic used by the plan definition */
  library?: string[];

  /** Extension for library */
  _library?: IElement;

  /** What the plan is trying to accomplish */
  goal?: IPlanDefinitionGoal[];

  /** Action defined by the plan */
  action?: IPlanDefinitionAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IPlanDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PLAN_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PlanDefinition from a JSON object
   */
  static fromJSON(json: IPlanDefinition): PlanDefinition {
    return new PlanDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PlanDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPlanDefinition>): PlanDefinition {
    return new PlanDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PlanDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPlanDefinition) => Partial<IPlanDefinition>): PlanDefinition {
    const currentData = this.toJSON();
    return new PlanDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPlanDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPlanDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PLAN_DEFINITION_PROPERTIES);
    return result as IPlanDefinition;
  }

  /**
   * Create a deep clone of this PlanDefinition
   */
  clone(): PlanDefinition {
    return new PlanDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PlanDefinition
   */
  toString(): string {
    const parts: string[] = ['PlanDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
