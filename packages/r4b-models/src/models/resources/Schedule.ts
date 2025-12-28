import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  ISchedule,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Schedule */
const SCHEDULE_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'serviceCategory',
  'serviceType',
  'specialty',
  'actor',
  'planningHorizon',
  'comment',
  '_comment',
] as const;

/**
 * Schedule - A container for slots of time that may be available for booking appointments.
 *
 * @see https://hl7.org/fhir/R4B/schedule.html
 *
 * @example
 * const schedule = new Schedule({
 *   // ... properties
 * });
 */
export class Schedule extends DomainResource implements ISchedule {
  readonly resourceType = 'Schedule' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Ids for this item */
  identifier?: IIdentifier[];

  /** Whether this schedule is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** High-level category */
  serviceCategory?: ICodeableConcept[];

  /** Specific service */
  serviceType?: ICodeableConcept[];

  /** Type of specialty needed */
  specialty?: ICodeableConcept[];

  /** Resource(s) that availability information is being provided for */
  actor: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>[];

  /** Period of time covered by schedule */
  planningHorizon?: IPeriod;

  /** Comments on availability */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISchedule>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SCHEDULE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Schedule from a JSON object
   */
  static fromJSON(json: ISchedule): Schedule {
    return new Schedule(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Schedule with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISchedule>): Schedule {
    return new Schedule({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Schedule by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISchedule) => Partial<ISchedule>): Schedule {
    const currentData = this.toJSON();
    return new Schedule({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISchedule)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISchedule {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SCHEDULE_PROPERTIES);
    return result as ISchedule;
  }

  /**
   * Create a deep clone of this Schedule
   */
  clone(): Schedule {
    return new Schedule(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Schedule
   */
  toString(): string {
    const parts: string[] = ['Schedule'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
