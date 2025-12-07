import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgePackaging } from '../../models/backbones/MedicationKnowledgePackaging.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgePackaging,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationKnowledgePackagingBuilder - Fluent builder for MedicationKnowledgePackaging backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgePackaging = new MedicationKnowledgePackagingBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgePackagingBuilder extends BackboneElementBuilder<MedicationKnowledgePackaging, IMedicationKnowledgePackaging> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * A code that defines the specific type of packaging that the medication can be found in
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set quantity
   * The number of product units the package would contain if fully loaded
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgePackaging instance
   */
  build(): MedicationKnowledgePackaging {
    return new MedicationKnowledgePackaging(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgePackaging instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgePackaging> {
    const medicationKnowledgePackaging = this.build();
    await medicationKnowledgePackaging.validateOrThrow();
    return medicationKnowledgePackaging;
  }
}
