import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CoverageEligibilityResponseInsuranceItemBenefit } from '../../models/backbones/CoverageEligibilityResponseInsuranceItemBenefit.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityResponseInsuranceItemBenefit,
  IMoney,
} from '@fhir-toolkit/r4-types';

/**
 * CoverageEligibilityResponseInsuranceItemBenefitBuilder - Fluent builder for CoverageEligibilityResponseInsuranceItemBenefit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const coverageEligibilityResponseInsuranceItemBenefit = new CoverageEligibilityResponseInsuranceItemBenefitBuilder()
 *   .setType(value)
 *   .build();
 */
export class CoverageEligibilityResponseInsuranceItemBenefitBuilder extends BackboneElementBuilder<CoverageEligibilityResponseInsuranceItemBenefit, ICoverageEligibilityResponseInsuranceItemBenefit> {
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
    const key = `allowed${type}` as keyof ICoverageEligibilityResponseInsuranceItemBenefit;
    const otherKeys: (keyof ICoverageEligibilityResponseInsuranceItemBenefit)[] = [];
    if (type !== 'String') {
      otherKeys.push('allowedString' as keyof ICoverageEligibilityResponseInsuranceItemBenefit);
      otherKeys.push('_allowedString' as keyof ICoverageEligibilityResponseInsuranceItemBenefit);
    }
    if (type !== 'Money') {
      otherKeys.push('allowedMoney' as keyof ICoverageEligibilityResponseInsuranceItemBenefit);
      otherKeys.push('_allowedMoney' as keyof ICoverageEligibilityResponseInsuranceItemBenefit);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set used choice type
   * @param type - 'String' | 'Money'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setUsed('String', value)
   */
  setUsed<T extends 'String' | 'Money'>(
    type: T,
    value: string
  ): this {
    const key = `used${type}` as keyof ICoverageEligibilityResponseInsuranceItemBenefit;
    const otherKeys: (keyof ICoverageEligibilityResponseInsuranceItemBenefit)[] = [];
    if (type !== 'String') {
      otherKeys.push('usedString' as keyof ICoverageEligibilityResponseInsuranceItemBenefit);
      otherKeys.push('_usedString' as keyof ICoverageEligibilityResponseInsuranceItemBenefit);
    }
    if (type !== 'Money') {
      otherKeys.push('usedMoney' as keyof ICoverageEligibilityResponseInsuranceItemBenefit);
      otherKeys.push('_usedMoney' as keyof ICoverageEligibilityResponseInsuranceItemBenefit);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CoverageEligibilityResponseInsuranceItemBenefit instance
   */
  build(): CoverageEligibilityResponseInsuranceItemBenefit {
    return new CoverageEligibilityResponseInsuranceItemBenefit(this.data);
  }

  /**
   * Build and validate the CoverageEligibilityResponseInsuranceItemBenefit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CoverageEligibilityResponseInsuranceItemBenefit> {
    const coverageEligibilityResponseInsuranceItemBenefit = this.build();
    await coverageEligibilityResponseInsuranceItemBenefit.validateOrThrow();
    return coverageEligibilityResponseInsuranceItemBenefit;
  }
}
