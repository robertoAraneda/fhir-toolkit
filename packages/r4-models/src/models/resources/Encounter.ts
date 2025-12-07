import { DomainResource } from '../base/DomainResource.js';
import type {
  EncounterStatusType,
  ICodeableConcept,
  ICoding,
  IDuration,
  IElement,
  IEncounter,
  IEncounterClassHistory,
  IEncounterDiagnosis,
  IEncounterHospitalization,
  IEncounterLocation,
  IEncounterParticipant,
  IEncounterStatusHistory,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Encounter */
const ENCOUNTER_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'statusHistory',
  'class',
  'classHistory',
  'type',
  'serviceType',
  'priority',
  'subject',
  'episodeOfCare',
  'basedOn',
  'participant',
  'appointment',
  'period',
  'length',
  'reasonCode',
  'reasonReference',
  'diagnosis',
  'account',
  'hospitalization',
  'location',
  'serviceProvider',
  'partOf',
] as const;

/**
 * Encounter - An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 *
 * @see https://hl7.org/fhir/R4/encounter.html
 *
 * @example
 * const encounter = new Encounter({
 *   // ... properties
 * });
 */
export class Encounter extends DomainResource implements IEncounter {
  readonly resourceType = 'Encounter' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier(s) by which this encounter is known */
  identifier?: IIdentifier[];

  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
  status: EncounterStatusType;

  /** Extension for status */
  _status?: IElement;

  /** List of past encounter statuses */
  statusHistory?: IEncounterStatusHistory[];

  /** Classification of patient encounter */
  class: ICoding;

  /** List of past encounter classes */
  classHistory?: IEncounterClassHistory[];

  /** Specific type of encounter */
  type?: ICodeableConcept[];

  /** Specific type of service */
  serviceType?: ICodeableConcept;

  /** Indicates the urgency of the encounter */
  priority?: ICodeableConcept;

  /** The patient or group present at the encounter */
  subject?: IReference<'Patient' | 'Group'>;

  /** Episode(s) of care that this encounter should be recorded against */
  episodeOfCare?: IReference<'EpisodeOfCare'>[];

  /** The ServiceRequest that initiated this encounter */
  basedOn?: IReference<'ServiceRequest'>[];

  /** List of participants involved in the encounter */
  participant?: IEncounterParticipant[];

  /** The appointment that scheduled this encounter */
  appointment?: IReference<'Appointment'>[];

  /** The start and end time of the encounter */
  period?: IPeriod;

  /** Quantity of time the encounter lasted (less time absent) */
  length?: IDuration;

  /** Coded reason the encounter takes place */
  reasonCode?: ICodeableConcept[];

  /** Reason the encounter takes place (reference) */
  reasonReference?: IReference<'Condition' | 'Procedure' | 'Observation' | 'ImmunizationRecommendation'>[];

  /** The list of diagnosis relevant to this encounter */
  diagnosis?: IEncounterDiagnosis[];

  /** The set of accounts that may be used for billing for this Encounter */
  account?: IReference<'Account'>[];

  /** Details about the admission to a healthcare service */
  hospitalization?: IEncounterHospitalization;

  /** List of locations where the patient has been */
  location?: IEncounterLocation[];

  /** The organization (facility) responsible for this encounter */
  serviceProvider?: IReference<'Organization'>;

  /** Another Encounter this encounter is part of */
  partOf?: IReference<'Encounter'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEncounter>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ENCOUNTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Encounter from a JSON object
   */
  static fromJSON(json: IEncounter): Encounter {
    return new Encounter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Encounter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEncounter>): Encounter {
    return new Encounter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Encounter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEncounter) => Partial<IEncounter>): Encounter {
    const currentData = this.toJSON();
    return new Encounter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEncounter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEncounter {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ENCOUNTER_PROPERTIES);
    return result as IEncounter;
  }

  /**
   * Create a deep clone of this Encounter
   */
  clone(): Encounter {
    return new Encounter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Encounter
   */
  toString(): string {
    const parts: string[] = ['Encounter'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
