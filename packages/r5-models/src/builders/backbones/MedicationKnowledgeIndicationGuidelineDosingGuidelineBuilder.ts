import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeIndicationGuidelineDosingGuideline } from '../../models/backbones/MedicationKnowledgeIndicationGuidelineDosingGuideline.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeIndicationGuidelineDosingGuideline,
  IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage,
  IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelineBuilder - Fluent builder for MedicationKnowledgeIndicationGuidelineDosingGuideline backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeIndicationGuidelineDosingGuideline = new MedicationKnowledgeIndicationGuidelineDosingGuidelineBuilder()
 *   .setTreatmentIntent(value)
 *   .addDosage({ ... })
 *   .build();
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelineBuilder extends BackboneElementBuilder<MedicationKnowledgeIndicationGuidelineDosingGuideline, IMedicationKnowledgeIndicationGuidelineDosingGuideline> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set treatmentIntent
   * Intention of the treatment
   */
  setTreatmentIntent(treatmentIntent: ICodeableConcept): this {
    this.data.treatmentIntent = treatmentIntent;
    return this;
  }

  /**
   * Set administrationTreatment
   * Type of treatment the guideline applies to
   */
  setAdministrationTreatment(administrationTreatment: ICodeableConcept): this {
    this.data.administrationTreatment = administrationTreatment;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add dosage
   * Dosage for the medication for the specific guidelines
   */
  addDosage(dosage: IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage): this {
    return this.addToArray('dosage', dosage);
  }

  /**
   * Add patientCharacteristic
   * Characteristics of the patient that are relevant to the administration guidelines
   */
  addPatientCharacteristic(patientCharacteristic: IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic): this {
    return this.addToArray('patientCharacteristic', patientCharacteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeIndicationGuidelineDosingGuideline instance
   */
  build(): MedicationKnowledgeIndicationGuidelineDosingGuideline {
    return new MedicationKnowledgeIndicationGuidelineDosingGuideline(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeIndicationGuidelineDosingGuideline instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeIndicationGuidelineDosingGuideline> {
    const medicationKnowledgeIndicationGuidelineDosingGuideline = this.build();
    await medicationKnowledgeIndicationGuidelineDosingGuideline.validateOrThrow();
    return medicationKnowledgeIndicationGuidelineDosingGuideline;
  }
}
