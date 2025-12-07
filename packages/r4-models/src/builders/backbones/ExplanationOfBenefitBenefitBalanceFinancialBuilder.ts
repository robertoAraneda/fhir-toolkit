import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitBenefitBalanceFinancial } from '../../models/backbones/ExplanationOfBenefitBenefitBalanceFinancial.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitBenefitBalanceFinancial,
  IMoney,
} from '@fhir-toolkit/r4-types';

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

  /**
   * Set allowedUnsignedInt
   * Benefits allowed
   */
  setAllowedUnsignedInt(allowedUnsignedInt: number): this {
    this.data.allowedUnsignedInt = allowedUnsignedInt;
    return this;
  }

  /**
   * Set usedUnsignedInt
   * Benefits used
   */
  setUsedUnsignedInt(usedUnsignedInt: number): this {
    this.data.usedUnsignedInt = usedUnsignedInt;
    return this;
  }

  /**
   * Set usedMoney
   * Benefits used
   */
  setUsedMoney(usedMoney: IMoney): this {
    this.data.usedMoney = usedMoney;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set allowed choice type
   * @param type - 'String' | 'Money'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAllowed('String', value)
   */
  setAllowed<T extends 'String' | 'Money'>(
    type: T,
    value: string
  ): this {
    const key = `allowed${type}` as keyof IExplanationOfBenefitBenefitBalanceFinancial;
    const otherKeys: (keyof IExplanationOfBenefitBenefitBalanceFinancial)[] = [];
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
