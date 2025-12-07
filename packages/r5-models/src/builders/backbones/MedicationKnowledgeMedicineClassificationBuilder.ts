import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeMedicineClassification } from '../../models/backbones/MedicationKnowledgeMedicineClassification.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeMedicineClassification,
} from '@fhir-toolkit/r5-types';

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
  // Choice Types
  // ============================================================================

  /**
   * Set source choice type (sourceString, sourceUri)
   * @param type - 'String' | 'Uri'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSource('String', value)
   */
  setSource<T extends 'String' | 'Uri'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `source${type}` as keyof IMedicationKnowledgeMedicineClassification;
    const otherKeys: (keyof IMedicationKnowledgeMedicineClassification)[] = [];
    if (type !== 'String') {
      otherKeys.push('sourceString' as keyof IMedicationKnowledgeMedicineClassification);
      otherKeys.push('_sourceString' as keyof IMedicationKnowledgeMedicineClassification);
    }
    if (type !== 'Uri') {
      otherKeys.push('sourceUri' as keyof IMedicationKnowledgeMedicineClassification);
      otherKeys.push('_sourceUri' as keyof IMedicationKnowledgeMedicineClassification);
    }
    return this.setChoiceType(key, value, otherKeys);
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
