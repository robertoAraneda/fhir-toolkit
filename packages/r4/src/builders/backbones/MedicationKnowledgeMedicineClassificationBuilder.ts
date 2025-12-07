import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeMedicineClassification } from '../../models/backbones/MedicationKnowledgeMedicineClassification.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeMedicineClassification,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationKnowledgeMedicineClassificationBuilder - Fluent builder for MedicationKnowledgeMedicineClassification backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeMedicineClassification = new MedicationKnowledgeMedicineClassificationBuilder()
 *   .setType(value)
 *   .addClassification({ ... })
 *   .build();
 */
export class MedicationKnowledgeMedicineClassificationBuilder extends BackboneElementBuilder<MedicationKnowledgeMedicineClassification, IMedicationKnowledgeMedicineClassification> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add classification
   * Specific category assigned to the medication
   */
  addClassification(classification: ICodeableConcept): this {
    return this.addToArray('classification', classification);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeMedicineClassification instance
   */
  build(): MedicationKnowledgeMedicineClassification {
    return new MedicationKnowledgeMedicineClassification(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeMedicineClassification instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeMedicineClassification> {
    const medicationKnowledgeMedicineClassification = this.build();
    await medicationKnowledgeMedicineClassification.validateOrThrow();
    return medicationKnowledgeMedicineClassification;
  }
}
