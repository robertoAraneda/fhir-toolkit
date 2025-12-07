import { ElementBuilder } from '../base/ElementBuilder.js';
import { SubstanceAmount } from '../../models/datatypes/SubstanceAmount.js';
import type {
  ICodeableConcept,
  IQuantity,
  IRange,
  ISubstanceAmount,
  ISubstanceAmountReferenceRange,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceAmountBuilder - Fluent builder for SubstanceAmount datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const substanceAmount = new SubstanceAmountBuilder()
 *   .setAmountType(value)
 *   .build();
 */
export class SubstanceAmountBuilder extends ElementBuilder<SubstanceAmount, ISubstanceAmount> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set amountType
   * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements
   */
  setAmountType(amountType: ICodeableConcept): this {
    this.data.amountType = amountType;
    return this;
  }

  /**
   * Set amountText
   * A textual comment on a numeric value
   */
  setAmountText(amountText: string): this {
    this.data.amountText = amountText;
    return this;
  }

  /**
   * Set referenceRange
   * Reference range of possible or expected values
   */
  setReferenceRange(referenceRange: ISubstanceAmountReferenceRange): this {
    this.data.referenceRange = referenceRange;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set amount choice type
   * @param type - 'Quantity' | 'Range' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAmount('Quantity', value)
   */
  setAmount<T extends 'Quantity' | 'Range' | 'String'>(
    type: T,
    value: string
  ): this {
    const key = `amount${type}` as keyof ISubstanceAmount;
    const otherKeys: (keyof ISubstanceAmount)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('amountQuantity' as keyof ISubstanceAmount);
      otherKeys.push('_amountQuantity' as keyof ISubstanceAmount);
    }
    if (type !== 'Range') {
      otherKeys.push('amountRange' as keyof ISubstanceAmount);
      otherKeys.push('_amountRange' as keyof ISubstanceAmount);
    }
    if (type !== 'String') {
      otherKeys.push('amountString' as keyof ISubstanceAmount);
      otherKeys.push('_amountString' as keyof ISubstanceAmount);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceAmount instance
   */
  build(): SubstanceAmount {
    return new SubstanceAmount(this.data);
  }

  /**
   * Build and validate the SubstanceAmount instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceAmount> {
    const substanceAmount = this.build();
    await substanceAmount.validateOrThrow();
    return substanceAmount;
  }
}
