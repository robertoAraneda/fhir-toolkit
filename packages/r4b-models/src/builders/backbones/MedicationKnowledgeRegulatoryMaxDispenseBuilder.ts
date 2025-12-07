import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeRegulatoryMaxDispense } from '../../models/backbones/MedicationKnowledgeRegulatoryMaxDispense.js';
import type {
  IDuration,
  IMedicationKnowledgeRegulatoryMaxDispense,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationKnowledgeRegulatoryMaxDispenseBuilder - Fluent builder for MedicationKnowledgeRegulatoryMaxDispense backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeRegulatoryMaxDispense = new MedicationKnowledgeRegulatoryMaxDispenseBuilder()
 *   .setQuantity(value)
 *   .build();
 */
export class MedicationKnowledgeRegulatoryMaxDispenseBuilder extends BackboneElementBuilder<MedicationKnowledgeRegulatoryMaxDispense, IMedicationKnowledgeRegulatoryMaxDispense> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set quantity
   * The maximum number of units of the medication that can be dispensed
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set period
   * The period that applies to the maximum number of units
   */
  setPeriod(period: IDuration): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeRegulatoryMaxDispense instance
   */
  build(): MedicationKnowledgeRegulatoryMaxDispense {
    return new MedicationKnowledgeRegulatoryMaxDispense(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeRegulatoryMaxDispense instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeRegulatoryMaxDispense> {
    const medicationKnowledgeRegulatoryMaxDispense = this.build();
    await medicationKnowledgeRegulatoryMaxDispense.validateOrThrow();
    return medicationKnowledgeRegulatoryMaxDispense;
  }
}
