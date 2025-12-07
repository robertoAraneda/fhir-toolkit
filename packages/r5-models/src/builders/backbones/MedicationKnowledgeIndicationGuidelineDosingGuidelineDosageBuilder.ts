import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage } from '../../models/backbones/MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage.js';
import type {
  ICodeableConcept,
  IDosage,
  IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageBuilder - Fluent builder for MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeIndicationGuidelineDosingGuidelineDosage = new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageBuilder()
 *   .setType(value)
 *   .addDosage({ ... })
 *   .build();
 */
export class MedicationKnowledgeIndicationGuidelineDosingGuidelineDosageBuilder extends BackboneElementBuilder<MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage, IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Category of dosage for a medication
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add dosage
   * Dosage for the medication for the specific guidelines
   */
  addDosage(dosage: IDosage): this {
    return this.addToArray('dosage', dosage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage instance
   */
  build(): MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage {
    return new MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeIndicationGuidelineDosingGuidelineDosage> {
    const medicationKnowledgeIndicationGuidelineDosingGuidelineDosage = this.build();
    await medicationKnowledgeIndicationGuidelineDosingGuidelineDosage.validateOrThrow();
    return medicationKnowledgeIndicationGuidelineDosingGuidelineDosage;
  }
}
