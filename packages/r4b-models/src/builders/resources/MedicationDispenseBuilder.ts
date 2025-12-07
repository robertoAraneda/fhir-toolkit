import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicationDispense } from '../../models/resources/MedicationDispense.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDosage,
  IIdentifier,
  IMedicationDispense,
  IMedicationDispensePerformer,
  IMedicationDispenseSubstitution,
  IQuantity,
  IReference,
  MedicationDispenseStatusType,
} from '@fhir-toolkit/r4b-types';

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
   * Set category
   * Type of medication dispense
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
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
   * Set context
   * Encounter / Episode associated with event
   */
  setContext(context: IReference<'Encounter' | 'EpisodeOfCare'>): this {
    this.data.context = context;
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
   * Trial fill, partial fill, emergency fill, etc.
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
   * Where the medication was sent
   */
  setDestination(destination: IReference<'Location'>): this {
    this.data.destination = destination;
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
  // Choice Types
  // ============================================================================

  /**
   * Set statusReason choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setStatusReason('CodeableConcept', value)
   */
  setStatusReason<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `statusReason${type}` as keyof IMedicationDispense;
    const otherKeys: (keyof IMedicationDispense)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('statusReasonCodeableConcept' as keyof IMedicationDispense);
      otherKeys.push('_statusReasonCodeableConcept' as keyof IMedicationDispense);
    }
    if (type !== 'Reference') {
      otherKeys.push('statusReasonReference' as keyof IMedicationDispense);
      otherKeys.push('_statusReasonReference' as keyof IMedicationDispense);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set medication choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setMedication('CodeableConcept', value)
   */
  setMedication<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `medication${type}` as keyof IMedicationDispense;
    const otherKeys: (keyof IMedicationDispense)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('medicationCodeableConcept' as keyof IMedicationDispense);
      otherKeys.push('_medicationCodeableConcept' as keyof IMedicationDispense);
    }
    if (type !== 'Reference') {
      otherKeys.push('medicationReference' as keyof IMedicationDispense);
      otherKeys.push('_medicationReference' as keyof IMedicationDispense);
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
   * Add partOf
   * Event that dispense is part of
   */
  addPartOf(partOf: IReference<'Procedure'>): this {
    return this.addToArray('partOf', partOf);
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
   * Who collected the medication
   */
  addReceiver(receiver: IReference<'Patient' | 'Practitioner'>): this {
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
   * Add detectedIssue
   * Clinical issue with action
   */
  addDetectedIssue(detectedIssue: IReference<'DetectedIssue'>): this {
    return this.addToArray('detectedIssue', detectedIssue);
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
