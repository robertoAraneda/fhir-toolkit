import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { EncounterHistory } from '../../models/resources/EncounterHistory.js';
import type {
  EncounterStatusType,
  ICodeableConcept,
  ICodeableReference,
  IDuration,
  IEncounterHistory,
  IEncounterHistoryLocation,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EncounterHistoryBuilder - Fluent builder for EncounterHistory resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterHistory = new EncounterHistoryBuilder()
 *   .setId('123')
 *   .setEncounter(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EncounterHistoryBuilder extends DomainResourceBuilder<EncounterHistory, IEncounterHistory> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set encounter
   * The Encounter associated with this set of historic values
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set status
   * planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown
   */
  setStatus(status: EncounterStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set class
   * Classification of patient encounter
   */
  setClass(_class: ICodeableConcept): this {
    this.data.class = _class;
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
   * Set actualPeriod
   * The actual start and end time associated with this set of values associated with the encounter
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
   * Add type
   * Specific type of encounter
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
   * Add location
   * Location of the patient at this point in the encounter
   */
  addLocation(location: IEncounterHistoryLocation): this {
    return this.addToArray('location', location);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterHistory instance
   */
  build(): EncounterHistory {
    return new EncounterHistory(this.data);
  }

  /**
   * Build and validate the EncounterHistory instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterHistory> {
    const encounterHistory = this.build();
    await encounterHistory.validateOrThrow();
    return encounterHistory;
  }
}
