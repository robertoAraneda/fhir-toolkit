import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationDispense } from '../../models/resources/MedicationDispense.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IDosage,
  IIdentifier,
  IMedicationDispense,
  IMedicationDispensePerformer,
  IMedicationDispenseSubstitution,
  IQuantity,
  IReference,
  MedicationDispenseStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationDispenseBuilder - Fluent builder for MedicationDispense resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationDispense = new MedicationDispenseBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicationDispenseBuilder extends DomainResourceBuilder<MedicationDispense, IMedicationDispense> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown
   */
  setStatus(status: MedicationDispenseStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set notPerformedReason
   * Why a dispense was not performed
   */
  setNotPerformedReason(notPerformedReason: ICodeableReference): this {
    this.data.notPerformedReason = notPerformedReason;
    return this;
  }

  /**
   * Set statusChanged
   * When the status changed
   */
  setStatusChanged(statusChanged: string): this {
    this.data.statusChanged = statusChanged;
    return this;
  }

  /**
   * Set medication
   * What medication was supplied
   */
  setMedication(medication: ICodeableReference): this {
    this.data.medication = medication;
    return this;
  }

  /**
   * Set subject
   * Who the dispense is for
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set encounter
   * Encounter associated with event
   */
  setEncounter(encounter: IReference<'Encounter'>): this {
    this.data.encounter = encounter;
    return this;
  }

  /**
   * Set location
   * Where the dispense occurred
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set type
   * Trial fill, partial fill, emergency fill, etc
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set quantity
   * Amount dispensed
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set daysSupply
   * Amount of medication expressed as a timing amount
   */
  setDaysSupply(daysSupply: IQuantity): this {
    this.data.daysSupply = daysSupply;
    return this;
  }

  /**
   * Set recorded
   * When the recording of the dispense started
   */
  setRecorded(recorded: string): this {
    this.data.recorded = recorded;
    return this;
  }

  /**
   * Set whenPrepared
   * When product was packaged and reviewed
   */
  setWhenPrepared(whenPrepared: string): this {
    this.data.whenPrepared = whenPrepared;
    return this;
  }

  /**
   * Set whenHandedOver
   * When product was given out
   */
  setWhenHandedOver(whenHandedOver: string): this {
    this.data.whenHandedOver = whenHandedOver;
    return this;
  }

  /**
   * Set destination
   * Where the medication was/will be sent
   */
  setDestination(destination: IReference<'Location'>): this {
    this.data.destination = destination;
    return this;
  }

  /**
   * Set renderedDosageInstruction
   * Full representation of the dosage instructions
   */
  setRenderedDosageInstruction(renderedDosageInstruction: string): this {
    this.data.renderedDosageInstruction = renderedDosageInstruction;
    return this;
  }

  /**
   * Set substitution
   * Whether a substitution was performed on the dispense
   */
  setSubstitution(substitution: IMedicationDispenseSubstitution): this {
    this.data.substitution = substitution;
    return this;
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
   * Plan that is fulfilled by this dispense
   */
  addBasedOn(basedOn: IReference<'CarePlan'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add partOf
   * Event that dispense is part of
   */
  addPartOf(partOf: IReference<'Procedure' | 'MedicationAdministration'>): this {
    return this.addToArray('partOf', partOf);
  }

  /**
   * Add category
   * Type of medication dispense
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add supportingInformation
   * Information that supports the dispensing of the medication
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add performer
   * Who performed event
   */
  addPerformer(performer: IMedicationDispensePerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add authorizingPrescription
   * Medication order that authorizes the dispense
   */
  addAuthorizingPrescription(authorizingPrescription: IReference<'MedicationRequest'>): this {
    return this.addToArray('authorizingPrescription', authorizingPrescription);
  }

  /**
   * Add receiver
   * Who collected the medication or where the medication was delivered
   */
  addReceiver(receiver: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Location' | 'PractitionerRole'>): this {
    return this.addToArray('receiver', receiver);
  }

  /**
   * Add note
   * Information about the dispense
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add dosageInstruction
   * How the medication is to be used by the patient or administered by the caregiver
   */
  addDosageInstruction(dosageInstruction: IDosage): this {
    return this.addToArray('dosageInstruction', dosageInstruction);
  }

  /**
   * Add eventHistory
   * A list of relevant lifecycle events
   */
  addEventHistory(eventHistory: IReference<'Provenance'>): this {
    return this.addToArray('eventHistory', eventHistory);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationDispense instance
   */
  build(): MedicationDispense {
    return new MedicationDispense(this.data);
  }

  /**
   * Build and validate the MedicationDispense instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationDispense> {
    const medicationDispense = this.build();
    await medicationDispense.validateOrThrow();
    return medicationDispense;
  }
}
