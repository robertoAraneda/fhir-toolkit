import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Encounter } from '../../models/resources/Encounter.js';
import type {
  EncounterStatusType,
  ICodeableConcept,
  ICodeableReference,
  IDuration,
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

/**
 * EncounterBuilder - Fluent builder for Encounter resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounter = new EncounterBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EncounterBuilder extends DomainResourceBuilder<Encounter, IEncounter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown
   */
  setStatus(status: EncounterStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set priority
   * Indicates the urgency of the encounter
   */
  setPriority(priority: ICodeableConcept): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set subject
   * The patient or group related to this encounter
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set subjectStatus
   * The current status of the subject in relation to the Encounter
   */
  setSubjectStatus(subjectStatus: ICodeableConcept): this {
    this.data.subjectStatus = subjectStatus;
    return this;
  }

  /**
   * Set partOf
   * Another Encounter this encounter is part of
   */
  setPartOf(partOf: IReference<'Encounter'>): this {
    this.data.partOf = partOf;
    return this;
  }

  /**
   * Set serviceProvider
   * The organization (facility) responsible for this encounter
   */
  setServiceProvider(serviceProvider: IReference<'Organization'>): this {
    this.data.serviceProvider = serviceProvider;
    return this;
  }

  /**
   * Set actualPeriod
   * The actual start and end time of the encounter
   */
  setActualPeriod(actualPeriod: IPeriod): this {
    this.data.actualPeriod = actualPeriod;
    return this;
  }

  /**
   * Set plannedStartDate
   * The planned start date/time (or admission date) of the encounter
   */
  setPlannedStartDate(plannedStartDate: string): this {
    this.data.plannedStartDate = plannedStartDate;
    return this;
  }

  /**
   * Set plannedEndDate
   * The planned end date/time (or discharge date) of the encounter
   */
  setPlannedEndDate(plannedEndDate: string): this {
    this.data.plannedEndDate = plannedEndDate;
    return this;
  }

  /**
   * Set length
   * Actual quantity of time the encounter lasted (less time absent)
   */
  setLength(length: IDuration): this {
    this.data.length = length;
    return this;
  }

  /**
   * Set admission
   * Details about the admission to a healthcare service
   */
  setAdmission(admission: IEncounterAdmission): this {
    this.data.admission = admission;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifier(s) by which this encounter is known
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add class
   * Classification of patient encounter context - e.g. Inpatient, outpatient
   */
  addClass(_class: ICodeableConcept): this {
    return this.addToArray('class', _class);
  }

  /**
   * Add type
   * Specific type of encounter (e.g. e-mail consultation, surgical day-care, ...)
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add serviceType
   * Specific type of service
   */
  addServiceType(serviceType: ICodeableReference): this {
    return this.addToArray('serviceType', serviceType);
  }

  /**
   * Add episodeOfCare
   * Episode(s) of care that this encounter should be recorded against
   */
  addEpisodeOfCare(episodeOfCare: IReference<'EpisodeOfCare'>): this {
    return this.addToArray('episodeOfCare', episodeOfCare);
  }

  /**
   * Add basedOn
   * The request that initiated this encounter
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'DeviceRequest' | 'MedicationRequest' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add careTeam
   * The group(s) that are allocated to participate in this encounter
   */
  addCareTeam(careTeam: IReference<'CareTeam'>): this {
    return this.addToArray('careTeam', careTeam);
  }

  /**
   * Add participant
   * List of participants involved in the encounter
   */
  addParticipant(participant: IEncounterParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add appointment
   * The appointment that scheduled this encounter
   */
  addAppointment(appointment: IReference<'Appointment'>): this {
    return this.addToArray('appointment', appointment);
  }

  /**
   * Add virtualService
   * Connection details of a virtual service (e.g. conference call)
   */
  addVirtualService(virtualService: IVirtualServiceDetail): this {
    return this.addToArray('virtualService', virtualService);
  }

  /**
   * Add reason
   * The list of medical reasons that are expected to be addressed during the episode of care
   */
  addReason(reason: IEncounterReason): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add diagnosis
   * The list of diagnosis relevant to this encounter
   */
  addDiagnosis(diagnosi: IEncounterDiagnosis): this {
    return this.addToArray('diagnosis', diagnosi);
  }

  /**
   * Add account
   * The set of accounts that may be used for billing for this Encounter
   */
  addAccount(account: IReference<'Account'>): this {
    return this.addToArray('account', account);
  }

  /**
   * Add dietPreference
   * Diet preferences reported by the patient
   */
  addDietPreference(dietPreference: ICodeableConcept): this {
    return this.addToArray('dietPreference', dietPreference);
  }

  /**
   * Add specialArrangement
   * Wheelchair, translator, stretcher, etc
   */
  addSpecialArrangement(specialArrangement: ICodeableConcept): this {
    return this.addToArray('specialArrangement', specialArrangement);
  }

  /**
   * Add specialCourtesy
   * Special courtesies (VIP, board member)
   */
  addSpecialCourtesy(specialCourtesy: ICodeableConcept): this {
    return this.addToArray('specialCourtesy', specialCourtesy);
  }

  /**
   * Add location
   * List of locations where the patient has been
   */
  addLocation(location: IEncounterLocation): this {
    return this.addToArray('location', location);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Encounter instance
   */
  build(): Encounter {
    return new Encounter(this.data);
  }

  /**
   * Build and validate the Encounter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Encounter> {
    const encounter = this.build();
    await encounter.validateOrThrow();
    return encounter;
  }
}
