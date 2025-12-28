import { DomainResource } from '../base/DomainResource.js';
import type {
  EncounterStatusType,
  ICodeableConcept,
  ICodeableReference,
  IDuration,
  IElement,
  IEncounter,
  IEncounterAdmission,
  IEncounterDiagnosis,
  IEncounterLocation,
  IEncounterParticipant,
  IEncounterReason,
  IIdentifier,
  IPeriod,
  IReference,
  IVirtualServiceDetail,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Encounter */
const ENCOUNTER_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'class',
  'priority',
  'type',
  'serviceType',
  'subject',
  'subjectStatus',
  'episodeOfCare',
  'basedOn',
  'careTeam',
  'partOf',
  'serviceProvider',
  'participant',
  'appointment',
  'virtualService',
  'actualPeriod',
  'plannedStartDate',
  '_plannedStartDate',
  'plannedEndDate',
  '_plannedEndDate',
  'length',
  'reason',
  'diagnosis',
  'account',
  'dietPreference',
  'specialArrangement',
  'specialCourtesy',
  'admission',
  'location',
] as const;

/**
 * Encounter - An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.  Encounter is primarily used to record information about the actual activities that occurred, where Appointment is used to record planned activities.
 *
 * @see https://hl7.org/fhir/R5/encounter.html
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

  /** planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown */
  status: EncounterStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Classification of patient encounter context - e.g. Inpatient, outpatient */
  class?: ICodeableConcept[];

  /** Indicates the urgency of the encounter */
  priority?: ICodeableConcept;

  /** Specific type of encounter (e.g. e-mail consultation, surgical day-care, ...) */
  type?: ICodeableConcept[];

  /** Specific type of service */
  serviceType?: ICodeableReference[];

  /** The patient or group related to this encounter */
  subject?: IReference<'Patient' | 'Group'>;

  /** The current status of the subject in relation to the Encounter */
  subjectStatus?: ICodeableConcept;

  /** Episode(s) of care that this encounter should be recorded against */
  episodeOfCare?: IReference<'EpisodeOfCare'>[];

  /** The request that initiated this encounter */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'MedicationRequest' | 'ServiceRequest'>[];

  /** The group(s) that are allocated to participate in this encounter */
  careTeam?: IReference<'CareTeam'>[];

  /** Another Encounter this encounter is part of */
  partOf?: IReference<'Encounter'>;

  /** The organization (facility) responsible for this encounter */
  serviceProvider?: IReference<'Organization'>;

  /** List of participants involved in the encounter */
  participant?: IEncounterParticipant[];

  /** The appointment that scheduled this encounter */
  appointment?: IReference<'Appointment'>[];

  /** Connection details of a virtual service (e.g. conference call) */
  virtualService?: IVirtualServiceDetail[];

  /** The actual start and end time of the encounter */
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

  /** The list of medical reasons that are expected to be addressed during the episode of care */
  reason?: IEncounterReason[];

  /** The list of diagnosis relevant to this encounter */
  diagnosis?: IEncounterDiagnosis[];

  /** The set of accounts that may be used for billing for this Encounter */
  account?: IReference<'Account'>[];

  /** Diet preferences reported by the patient */
  dietPreference?: ICodeableConcept[];

  /** Wheelchair, translator, stretcher, etc */
  specialArrangement?: ICodeableConcept[];

  /** Special courtesies (VIP, board member) */
  specialCourtesy?: ICodeableConcept[];

  /** Details about the admission to a healthcare service */
  admission?: IEncounterAdmission;

  /** List of locations where the patient has been */
  location?: IEncounterLocation[];

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
