import { DomainResource } from '../base/DomainResource.js';
import type {
  IActivityDefinition,
  IActivityDefinitionDynamicValue,
  IActivityDefinitionParticipant,
  IAge,
  ICodeableConcept,
  IContactDetail,
  IDosage,
  IDuration,
  IElement,
  IIdentifier,
  IPeriod,
  IQuantity,
  IRange,
  IReference,
  IRelatedArtifact,
  ITiming,
  IUsageContext,
  PublicationStatusType,
  RequestIntentType,
  RequestPriorityType,
  RequestResourceTypeType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ActivityDefinition */
const ACTIVITY_DEFINITION_PROPERTIES = [
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
  'status',
  '_status',
  'experimental',
  '_experimental',
  'subjectCodeableConcept',
  'subjectReference',
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
  'kind',
  '_kind',
  'profile',
  '_profile',
  'code',
  'intent',
  '_intent',
  'priority',
  '_priority',
  'doNotPerform',
  '_doNotPerform',
  'timingTiming',
  'timingDateTime',
  '_timingDateTime',
  'timingAge',
  'timingPeriod',
  'timingRange',
  'timingDuration',
  'location',
  'participant',
  'productReference',
  'productCodeableConcept',
  'quantity',
  'dosage',
  'bodySite',
  'specimenRequirement',
  'observationRequirement',
  'observationResultRequirement',
  'transform',
  '_transform',
  'dynamicValue',
] as const;

/**
 * ActivityDefinition - This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 *
 * @see https://hl7.org/fhir/R4/activitydefinition.html
 *
 * @example
 * const activityDefinition = new ActivityDefinition({
 *   resourceType: 'ActivityDefinition',
 *   // ... properties
 * });
 */
export class ActivityDefinition extends DomainResource implements IActivityDefinition {
  readonly resourceType = 'ActivityDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this activity definition, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the activity definition */
  identifier?: IIdentifier[];

  /** Business version of the activity definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this activity definition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this activity definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Subordinate title of the activity definition */
  subtitle?: string;

  /** Extension for subtitle */
  _subtitle?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Type of individual the activity definition is intended for */
  subjectCodeableConcept?: ICodeableConcept;

  /** Type of individual the activity definition is intended for */
  subjectReference?: IReference;

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

  /** Natural language description of the activity definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for activity definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this activity definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Describes the clinical usage of the activity definition */
  usage?: string;

  /** Extension for usage */
  _usage?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the activity definition was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the activity definition was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the activity definition is expected to be used */
  effectivePeriod?: IPeriod;

  /** E.g. Education, Treatment, Assessment, etc. */
  topic?: ICodeableConcept[];

  /** Who authored the content */
  author?: IContactDetail[];

  /** Who edited the content */
  editor?: IContactDetail[];

  /** Who reviewed the content */
  reviewer?: IContactDetail[];

  /** Who endorsed the content */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc. */
  relatedArtifact?: IRelatedArtifact[];

  /** Logic used by the activity definition */
  library?: string[];

  /** Extension for library */
  _library?: IElement;

  /** Kind of resource */
  kind?: RequestResourceTypeType;

  /** Extension for kind */
  _kind?: IElement;

  /** What profile the resource needs to conform to */
  profile?: string;

  /** Extension for profile */
  _profile?: IElement;

  /** Detail type of activity */
  code?: ICodeableConcept;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
  intent?: RequestIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** True if the activity should not be performed */
  doNotPerform?: boolean;

  /** Extension for doNotPerform */
  _doNotPerform?: IElement;

  /** When activity is to occur */
  timingTiming?: ITiming;

  /** When activity is to occur */
  timingDateTime?: string;

  /** Extension for timingDateTime */
  _timingDateTime?: IElement;

  /** When activity is to occur */
  timingAge?: IAge;

  /** When activity is to occur */
  timingPeriod?: IPeriod;

  /** When activity is to occur */
  timingRange?: IRange;

  /** When activity is to occur */
  timingDuration?: IDuration;

  /** Where it should happen */
  location?: IReference<'Location'>;

  /** Who should participate in the action */
  participant?: IActivityDefinitionParticipant[];

  /** What's administered/supplied */
  productReference?: IReference;

  /** What's administered/supplied */
  productCodeableConcept?: ICodeableConcept;

  /** How much is administered/consumed/supplied */
  quantity?: IQuantity;

  /** Detailed dosage instructions */
  dosage?: IDosage[];

  /** What part of body to perform on */
  bodySite?: ICodeableConcept[];

  /** What specimens are required to perform this action */
  specimenRequirement?: IReference<'SpecimenDefinition'>[];

  /** What observations are required to perform this action */
  observationRequirement?: IReference<'ObservationDefinition'>[];

  /** What observations must be produced by this action */
  observationResultRequirement?: IReference<'ObservationDefinition'>[];

  /** Transform to apply the template */
  transform?: string;

  /** Extension for transform */
  _transform?: IElement;

  /** Dynamic aspects of the definition */
  dynamicValue?: IActivityDefinitionDynamicValue[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IActivityDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, ACTIVITY_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ActivityDefinition from a JSON object
   */
  static fromJSON(json: IActivityDefinition): ActivityDefinition {
    return new ActivityDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ActivityDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IActivityDefinition>): ActivityDefinition {
    return new ActivityDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ActivityDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IActivityDefinition) => Partial<IActivityDefinition>): ActivityDefinition {
    const currentData = this.toJSON();
    return new ActivityDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IActivityDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IActivityDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ACTIVITY_DEFINITION_PROPERTIES);
    return result as IActivityDefinition;
  }

  /**
   * Create a deep clone of this ActivityDefinition
   */
  clone(): ActivityDefinition {
    return new ActivityDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ActivityDefinition
   */
  toString(): string {
    const parts: string[] = ['ActivityDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
