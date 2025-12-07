import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeAdministrationGuidelines } from '../../models/backbones/MedicationKnowledgeAdministrationGuidelines.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeAdministrationGuidelines,
  IMedicationKnowledgeAdministrationGuidelinesDosage,
  IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationKnowledgeAdministrationGuidelinesBuilder - Fluent builder for MedicationKnowledgeAdministrationGuidelines backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeAdministrationGuidelines = new MedicationKnowledgeAdministrationGuidelinesBuilder()
 *   .addDosage({ ... })
 *   .build();
 */
export class MedicationKnowledgeAdministrationGuidelinesBuilder extends BackboneElementBuilder<MedicationKnowledgeAdministrationGuidelines, IMedicationKnowledgeAdministrationGuidelines> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set indication choice type (indicationCodeableConcept, indicationReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setIndication('CodeableConcept', value)
   */
  setIndication<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `indication${type}` as keyof IMedicationKnowledgeAdministrationGuidelines;
    const otherKeys: (keyof IMedicationKnowledgeAdministrationGuidelines)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('indicationCodeableConcept' as keyof IMedicationKnowledgeAdministrationGuidelines);
      otherKeys.push('_indicationCodeableConcept' as keyof IMedicationKnowledgeAdministrationGuidelines);
    }
    if (type !== 'Reference') {
      otherKeys.push('indicationReference' as keyof IMedicationKnowledgeAdministrationGuidelines);
      otherKeys.push('_indicationReference' as keyof IMedicationKnowledgeAdministrationGuidelines);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add dosage
   * Dosage for the medication for the specific guidelines
   */
  addDosage(dosage: IMedicationKnowledgeAdministrationGuidelinesDosage): this {
    return this.addToArray('dosage', dosage);
  }

  /**
   * Add patientCharacteristics
   * Characteristics of the patient that are relevant to the administration guidelines
   */
  addPatientCharacteristics(patientCharacteristic: IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics): this {
    return this.addToArray('patientCharacteristics', patientCharacteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeAdministrationGuidelines instance
   */
  build(): MedicationKnowledgeAdministrationGuidelines {
    return new MedicationKnowledgeAdministrationGuidelines(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeAdministrationGuidelines instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeAdministrationGuidelines> {
    const medicationKnowledgeAdministrationGuidelines = this.build();
    await medicationKnowledgeAdministrationGuidelines.validateOrThrow();
    return medicationKnowledgeAdministrationGuidelines;
  }
}
