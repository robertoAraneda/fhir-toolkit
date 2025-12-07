import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Encounter } from '../../models/resources/Encounter.js';
import type {
  EncounterStatusType,
  ICodeableConcept,
  ICoding,
  IDuration,
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
   * planned | arrived | triaged | in-progress | onleave | finished | cancelled +
   */
  setStatus(status: EncounterStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set class
   * Classification of patient encounter
   */
  setClass(_class: ICoding): this {
    this.data.class = _class;
    return this;
  }

  /**
   * Set serviceType
   * Specific type of service
   */
  setServiceType(serviceType: ICodeableConcept): this {
    this.data.serviceType = serviceType;
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
   * The patient or group present at the encounter
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set period
   * The start and end time of the encounter
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set length
   * Quantity of time the encounter lasted (less time absent)
   */
  setLength(length: IDuration): this {
    this.data.length = length;
    return this;
  }

  /**
   * Set hospitalization
   * Details about the admission to a healthcare service
   */
  setHospitalization(hospitalization: IEncounterHospitalization): this {
    this.data.hospitalization = hospitalization;
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
   * Set partOf
   * Another Encounter this encounter is part of
   */
  setPartOf(partOf: IReference<'Encounter'>): this {
    this.data.partOf = partOf;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set reason choice type
   * @param type - 'Code' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReason('Code', value)
   */
  setReason<T extends 'Code' | 'Reference'>(
    type: T,
    value: string
  ): this {
    const key = `reason${type}` as keyof IEncounter;
    const otherKeys: (keyof IEncounter)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof IEncounter);
      otherKeys.push('_reasonCode' as keyof IEncounter);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof IEncounter);
      otherKeys.push('_reasonReference' as keyof IEncounter);
    }
    return this.setChoiceType(key, value, otherKeys);
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
   * Add statusHistory
   * List of past encounter statuses
   */
  addStatusHistory(statusHistory: IEncounterStatusHistory): this {
    return this.addToArray('statusHistory', statusHistory);
  }

  /**
   * Add classHistory
   * List of past encounter classes
   */
  addClassHistory(classHistory: IEncounterClassHistory): this {
    return this.addToArray('classHistory', classHistory);
  }

  /**
   * Add type
   * Specific type of encounter
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
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
   * The ServiceRequest that initiated this encounter
   */
  addBasedOn(basedOn: IReference<'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
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
