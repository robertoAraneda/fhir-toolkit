import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeCost } from '../../models/backbones/MedicationKnowledgeCost.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeCost,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationKnowledgeCostBuilder - Fluent builder for MedicationKnowledgeCost backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeCost = new MedicationKnowledgeCostBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgeCostBuilder extends BackboneElementBuilder<MedicationKnowledgeCost, IMedicationKnowledgeCost> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The category of the cost information
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set source
   * The source or owner for the price information
   */
  setSource(source: string): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set cost
   * The price of the medication
   */
  setCost(cost: IMoney): this {
    this.data.cost = cost;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeCost instance
   */
  build(): MedicationKnowledgeCost {
    return new MedicationKnowledgeCost(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeCost instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeCost> {
    const medicationKnowledgeCost = this.build();
    await medicationKnowledgeCost.validateOrThrow();
    return medicationKnowledgeCost;
  }
}
