import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationAdministration } from '../../models/resources/MedicationAdministration.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IMedicationAdministration,
  IMedicationAdministrationDosage,
  IMedicationAdministrationPerformer,
  IPeriod,
  IReference,
  ITiming,
  MedicationAdministrationStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationAdministrationBuilder - Fluent builder for MedicationAdministration resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationAdministration = new MedicationAdministrationBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicationAdministrationBuilder extends DomainResourceBuilder<MedicationAdministration, IMedicationAdministration> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown
   */
  setStatus(status: MedicationAdministrationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set medication
   * What was administered
   */
  setMedication(medication: ICodeableReference): this {
    this.data.medication = medication;
    return this;
  }

  /**
   * Set subject
   * Who received medication
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter administered as part of
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set recorded
   * When the MedicationAdministration was first captured in the subject's record
   */
  setRecorded(recorded: string): this {
    this.data.recorded = recorded;
    return this;
  }

  /**
   * Set isSubPotent
   * Full dose was not administered
   */
  setIsSubPotent(isSubPotent: boolean): this {
    this.data.isSubPotent = isSubPotent;
    return this;
  }

  /**
   * Set request
   * Request administration performed against
   */
  setRequest(request: IReference<'MedicationRequest'>): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set dosage
   * Details of how medication was taken
   */
  setDosage(dosage: IMedicationAdministrationDosage): this {
    this.data.dosage = dosage;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set occurence choice type (occurenceDateTime, occurencePeriod, occurenceTiming)
   * @param type - 'DateTime' | 'Period' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setOccurence('DateTime', value)
   */
  setOccurence<T extends 'DateTime' | 'Period' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `occurence${type}` as keyof IMedicationAdministration;
    const otherKeys: (keyof IMedicationAdministration)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('occurenceDateTime' as keyof IMedicationAdministration);
      otherKeys.push('_occurenceDateTime' as keyof IMedicationAdministration);
    }
    if (type !== 'Period') {
      otherKeys.push('occurencePeriod' as keyof IMedicationAdministration);
      otherKeys.push('_occurencePeriod' as keyof IMedicationAdministration);
    }
    if (type !== 'Timing') {
      otherKeys.push('occurenceTiming' as keyof IMedicationAdministration);
      otherKeys.push('_occurenceTiming' as keyof IMedicationAdministration);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add basedOn
   * Plan this is fulfilled by this administration
   */
  addBasedOn(basedOn: IReference<'CarePlan'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Part of referenced event
   */
  addPartOf(partOf: IReference<'MedicationAdministration' | 'Procedure' | 'MedicationDispense'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add statusReason
   * Reason administration not performed
   */
  addStatusReason(statusReason: ICodeableConcept): this {
    return this.addToArray('statusReason', statusReason);
  }

  /**
   * Add category
   * Type of medication administration
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add supportingInformation
   * Additional information to support administration
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add subPotentReason
   * Reason full dose was not administered
   */
  addSubPotentReason(subPotentReason: ICodeableConcept): this {
    return this.addToArray('subPotentReason', subPotentReason);
  }

  /**
   * Add performer
   * Who or what performed the medication administration and what type of performance they did
   */
  addPerformer(performer: IMedicationAdministrationPerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add reason
   * Concept, condition or observation that supports why the medication was administered
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add device
   * Device used to administer
   */
  addDevice(device: ICodeableReference): this {
    return this.addToArray('device', device);
  }

  /**
   * Add note
   * Information about the administration
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add eventHistory
   * A list of events of interest in the lifecycle
   */
  addEventHistory(eventHistory: IReference<'Provenance'>): this {
    return this.addToArray('eventHistory', eventHistory);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationAdministration instance
   */
  build(): MedicationAdministration {
    return new MedicationAdministration(this.data);
  }

  /**
   * Build and validate the MedicationAdministration instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationAdministration> {
    const medicationAdministration = this.build();
    await medicationAdministration.validateOrThrow();
    return medicationAdministration;
  }
}
