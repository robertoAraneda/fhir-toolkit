import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeRelatedMedicationKnowledge } from '../../models/backbones/MedicationKnowledgeRelatedMedicationKnowledge.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeRelatedMedicationKnowledge,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeRelatedMedicationKnowledgeBuilder - Fluent builder for MedicationKnowledgeRelatedMedicationKnowledge backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeRelatedMedicationKnowledge = new MedicationKnowledgeRelatedMedicationKnowledgeBuilder()
 *   .setType(value)
 *   .addReference({ ... })
 *   .build();
 */
export class MedicationKnowledgeRelatedMedicationKnowledgeBuilder extends BackboneElementBuilder<MedicationKnowledgeRelatedMedicationKnowledge, IMedicationKnowledgeRelatedMedicationKnowledge> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Category of medicationKnowledge
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add reference
   * Associated documentation about the associated medication knowledge
   */
  addReference(reference: IReference<'MedicationKnowledge'>): this {
    return this.addToArray('reference', reference);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeRelatedMedicationKnowledge instance
   */
  build(): MedicationKnowledgeRelatedMedicationKnowledge {
    return new MedicationKnowledgeRelatedMedicationKnowledge(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeRelatedMedicationKnowledge instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeRelatedMedicationKnowledge> {
    const medicationKnowledgeRelatedMedicationKnowledge = this.build();
    await medicationKnowledgeRelatedMedicationKnowledge.validateOrThrow();
    return medicationKnowledgeRelatedMedicationKnowledge;
  }
}
