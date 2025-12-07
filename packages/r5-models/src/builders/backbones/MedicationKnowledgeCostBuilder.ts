import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeCost } from '../../models/backbones/MedicationKnowledgeCost.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeCost,
  IMoney,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeCostBuilder - Fluent builder for MedicationKnowledgeCost backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeCost = new MedicationKnowledgeCostBuilder()
 *   .setType(value)
 *   .addEffectiveDate({ ... })
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

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set cost choice type (costMoney, costCodeableConcept)
   * @param type - 'Money' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCost('Money', value)
   */
  setCost<T extends 'Money' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `cost${type}` as keyof IMedicationKnowledgeCost;
    const otherKeys: (keyof IMedicationKnowledgeCost)[] = [];
    if (type !== 'Money') {
      otherKeys.push('costMoney' as keyof IMedicationKnowledgeCost);
      otherKeys.push('_costMoney' as keyof IMedicationKnowledgeCost);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('costCodeableConcept' as keyof IMedicationKnowledgeCost);
      otherKeys.push('_costCodeableConcept' as keyof IMedicationKnowledgeCost);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add effectiveDate
   * The date range for which the cost is effective
   */
  addEffectiveDate(effectiveDate: IPeriod): this {
    return this.addToArray('effectiveDate', effectiveDate);
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
