import { DomainResource } from '../base/DomainResource.js';
import type {
  EncounterStatusType,
  ICodeableConcept,
  ICodeableReference,
  IDuration,
  IElement,
  IEncounterHistory,
  IEncounterHistoryLocation,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EncounterHistory */
const ENCOUNTER_HISTORY_PROPERTIES = [
  'encounter',
  'identifier',
  'status',
  '_status',
  'class',
  'type',
  'serviceType',
  'subject',
  'subjectStatus',
  'actualPeriod',
  'plannedStartDate',
  '_plannedStartDate',
  'plannedEndDate',
  '_plannedEndDate',
  'length',
  'location',
] as const;

/**
 * EncounterHistory - A record of significant events/milestones key data throughout the history of an Encounter, often tracked for specific purposes such as billing.
 *
 * @see https://hl7.org/fhir/R4/encounterhistory.html
 *
 * @example
 * const encounterHistory = new EncounterHistory({
 *   // ... properties
 * });
 */
export class EncounterHistory extends DomainResource implements IEncounterHistory {
  readonly resourceType = 'EncounterHistory' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** The Encounter associated with this set of historic values */
  encounter?: IReference<'Encounter'>;

  /** Identifier(s) by which this encounter is known */
  identifier?: IIdentifier[];

  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown */
  status: EncounterStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Classification of patient encounter */
  class: ICodeableConcept;

  /** Specific type of encounter */
  type?: ICodeableConcept[];

  /** Specific type of service */
  serviceType?: ICodeableReference[];

  /** The patient or group related to this encounter */
  subject?: IReference<'Patient' | 'Group'>;

  /** The current status of the subject in relation to the Encounter */
  subjectStatus?: ICodeableConcept;

  /** The actual start and end time associated with this set of values associated with the encounter */
  actualPeriod?: IPeriod;

  /** The planned start date/time (or admission date) of the encounter */
  plannedStartDate?: string;

  /** Extension for plannedStartDate */
  _plannedStartDate?: IElement;

  /** The planned end date/time (or discharge date) of the encounter */
  plannedEndDate?: string;

  /** Extension for plannedEndDate */
  _plannedEndDate?: IElement;

  /** Actual quantity of time the encounter lasted (less time absent) */
  length?: IDuration;

  /** Location of the patient at this point in the encounter */
  location?: IEncounterHistoryLocation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEncounterHistory>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_HISTORY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EncounterHistory from a JSON object
   */
  static fromJSON(json: IEncounterHistory): EncounterHistory {
    return new EncounterHistory(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EncounterHistory with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounterHistory>): EncounterHistory {
    return new EncounterHistory({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EncounterHistory by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounterHistory) => Partial<IEncounterHistory>): EncounterHistory {
    const currentData = this.toJSON();
    return new EncounterHistory({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounterHistory)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounterHistory {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ENCOUNTER_HISTORY_PROPERTIES);
    return result as IEncounterHistory;
  }

  /**
   * Create a deep clone of this EncounterHistory
   */
  clone(): EncounterHistory {
    return new EncounterHistory(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EncounterHistory
   */
  toString(): string {
    const parts: string[] = ['EncounterHistory'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
