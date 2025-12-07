import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitAccident } from '../../models/backbones/ExplanationOfBenefitAccident.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAddress,
  ICodeableConcept,
  IExplanationOfBenefitAccident,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ExplanationOfBenefitAccidentBuilder - Fluent builder for ExplanationOfBenefitAccident backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitAccident = new ExplanationOfBenefitAccidentBuilder()
 *   .setDate(value)
 *   .build();
 */
export class ExplanationOfBenefitAccidentBuilder extends BackboneElementBuilder<ExplanationOfBenefitAccident, IExplanationOfBenefitAccident> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set date
   * When the incident occurred
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set type
   * The nature of the accident
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set location choice type (locationAddress, locationReference)
   * @param type - 'Address' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setLocation('Address', value)
   */
  setLocation<T extends 'Address' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `location${type}` as keyof IExplanationOfBenefitAccident;
    const otherKeys: (keyof IExplanationOfBenefitAccident)[] = [];
    if (type !== 'Address') {
      otherKeys.push('locationAddress' as keyof IExplanationOfBenefitAccident);
      otherKeys.push('_locationAddress' as keyof IExplanationOfBenefitAccident);
    }
    if (type !== 'Reference') {
      otherKeys.push('locationReference' as keyof IExplanationOfBenefitAccident);
      otherKeys.push('_locationReference' as keyof IExplanationOfBenefitAccident);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitAccident instance
   */
  build(): ExplanationOfBenefitAccident {
    return new ExplanationOfBenefitAccident(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitAccident instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitAccident> {
    const explanationOfBenefitAccident = this.build();
    await explanationOfBenefitAccident.validateOrThrow();
    return explanationOfBenefitAccident;
  }
}
