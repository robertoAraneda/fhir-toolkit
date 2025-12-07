import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitBenefitBalanceFinancial } from '../../models/backbones/ExplanationOfBenefitBenefitBalanceFinancial.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitBenefitBalanceFinancial,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitBenefitBalanceFinancialBuilder - Fluent builder for ExplanationOfBenefitBenefitBalanceFinancial backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitBenefitBalanceFinancial = new ExplanationOfBenefitBenefitBalanceFinancialBuilder()
 *   .setType(value)
 *   .build();
 */
export class ExplanationOfBenefitBenefitBalanceFinancialBuilder extends BackboneElementBuilder<ExplanationOfBenefitBenefitBalanceFinancial, IExplanationOfBenefitBenefitBalanceFinancial> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Benefit classification
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set allowed choice type (allowedUnsignedInt, allowedString, allowedMoney)
   * @param type - 'UnsignedInt' | 'String' | 'Money'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAllowed('UnsignedInt', value)
   */
  setAllowed<T extends 'UnsignedInt' | 'String' | 'Money'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `allowed${type}` as keyof IExplanationOfBenefitBenefitBalanceFinancial;
    const otherKeys: (keyof IExplanationOfBenefitBenefitBalanceFinancial)[] = [];
    if (type !== 'UnsignedInt') {
      otherKeys.push('allowedUnsignedInt' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
      otherKeys.push('_allowedUnsignedInt' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
    }
    if (type !== 'String') {
      otherKeys.push('allowedString' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
      otherKeys.push('_allowedString' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
    }
    if (type !== 'Money') {
      otherKeys.push('allowedMoney' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
      otherKeys.push('_allowedMoney' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set used choice type (usedUnsignedInt, usedMoney)
   * @param type - 'UnsignedInt' | 'Money'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setUsed('UnsignedInt', value)
   */
  setUsed<T extends 'UnsignedInt' | 'Money'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `used${type}` as keyof IExplanationOfBenefitBenefitBalanceFinancial;
    const otherKeys: (keyof IExplanationOfBenefitBenefitBalanceFinancial)[] = [];
    if (type !== 'UnsignedInt') {
      otherKeys.push('usedUnsignedInt' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
      otherKeys.push('_usedUnsignedInt' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
    }
    if (type !== 'Money') {
      otherKeys.push('usedMoney' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
      otherKeys.push('_usedMoney' as keyof IExplanationOfBenefitBenefitBalanceFinancial);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitBenefitBalanceFinancial instance
   */
  build(): ExplanationOfBenefitBenefitBalanceFinancial {
    return new ExplanationOfBenefitBenefitBalanceFinancial(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitBenefitBalanceFinancial instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitBenefitBalanceFinancial> {
    const explanationOfBenefitBenefitBalanceFinancial = this.build();
    await explanationOfBenefitBenefitBalanceFinancial.validateOrThrow();
    return explanationOfBenefitBenefitBalanceFinancial;
  }
}
