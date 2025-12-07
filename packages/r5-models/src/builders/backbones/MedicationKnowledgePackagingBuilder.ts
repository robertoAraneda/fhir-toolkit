import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgePackaging } from '../../models/backbones/MedicationKnowledgePackaging.js';
import type {
  IMedicationKnowledgeCost,
  IMedicationKnowledgePackaging,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgePackagingBuilder - Fluent builder for MedicationKnowledgePackaging backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgePackaging = new MedicationKnowledgePackagingBuilder()
 *   .setPackagedProduct(value)
 *   .addCost({ ... })
 *   .build();
 */
export class MedicationKnowledgePackagingBuilder extends BackboneElementBuilder<MedicationKnowledgePackaging, IMedicationKnowledgePackaging> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set packagedProduct
   * The packaged medication that is being priced
   */
  setPackagedProduct(packagedProduct: IReference<'PackagedProductDefinition'>): this {
    this.data.packagedProduct = packagedProduct;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add cost
   * Cost of the packaged medication
   */
  addCost(cost: IMedicationKnowledgeCost): this {
    return this.addToArray('cost', cost);
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
