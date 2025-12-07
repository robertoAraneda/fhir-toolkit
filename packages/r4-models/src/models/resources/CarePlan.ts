import { DomainResource } from '../base/DomainResource.js';
import type {
  CarePlanIntentType,
  IAnnotation,
  ICarePlan,
  ICarePlanActivity,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  RequestStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CarePlan */
const CARE_PLAN_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'replaces',
  'partOf',
  'status',
  '_status',
  'intent',
  '_intent',
  'category',
  'title',
  '_title',
  'description',
  '_description',
  'subject',
  'encounter',
  'period',
  'created',
  '_created',
  'author',
  'contributor',
  'careTeam',
  'addresses',
  'supportingInfo',
  'goal',
  'activity',
  'note',
] as const;

/**
 * CarePlan - Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 *
 * @see https://hl7.org/fhir/R4/careplan.html
 *
 * @example
 * const carePlan = new CarePlan({
 *   // ... properties
 * });
 */
export class CarePlan extends DomainResource implements ICarePlan {
  readonly resourceType = 'CarePlan' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Ids for this plan */
  identifier?: IIdentifier[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Fulfills CarePlan */
  basedOn?: IReference<'CarePlan'>[];

  /** CarePlan replaced by this CarePlan */
  replaces?: IReference<'CarePlan'>[];

  /** Part of referenced CarePlan */
  partOf?: IReference<'CarePlan'>[];

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
  status: RequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** proposal | plan | order | option */
  intent: CarePlanIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** Type of plan */
  category?: ICodeableConcept[];

  /** Human-friendly name for the care plan */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Summary of nature of plan */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Who the care plan is for */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter created as part of */
  encounter?: IReference<'Encounter'>;

  /** Time period plan covers */
  period?: IPeriod;

  /** Date record was first recorded */
  created?: string;

  /** Extension for created */
  _created?: IElement;

  /** Who is the designated responsible party */
  author?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'RelatedPerson' | 'Organization' | 'CareTeam'>;

  /** Who provided the content of the care plan */
  contributor?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'RelatedPerson' | 'Organization' | 'CareTeam'>[];

  /** Who's involved in plan? */
  careTeam?: IReference<'CareTeam'>[];

  /** Health issues this plan addresses */
  addresses?: IReference<'Condition'>[];

  /** Information considered as part of plan */
  supportingInfo?: IReference<'Resource'>[];

  /** Desired outcome of plan */
  goal?: IReference<'Goal'>[];

  /** Action to occur as part of plan */
  activity?: ICarePlanActivity[];

  /** Comments about the plan */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ICarePlan>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, CARE_PLAN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CarePlan from a JSON object
   */
  static fromJSON(json: ICarePlan): CarePlan {
    return new CarePlan(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CarePlan with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICarePlan>): CarePlan {
    return new CarePlan({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CarePlan by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICarePlan) => Partial<ICarePlan>): CarePlan {
    const currentData = this.toJSON();
    return new CarePlan({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICarePlan)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICarePlan {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CARE_PLAN_PROPERTIES);
    return result as ICarePlan;
  }

  /**
   * Create a deep clone of this CarePlan
   */
  clone(): CarePlan {
    return new CarePlan(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CarePlan
   */
  toString(): string {
    const parts: string[] = ['CarePlan'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
