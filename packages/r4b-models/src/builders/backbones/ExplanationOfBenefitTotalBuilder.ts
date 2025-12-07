import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitTotal } from '../../models/backbones/ExplanationOfBenefitTotal.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitTotal,
  IMoney,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitTotalBuilder - Fluent builder for ExplanationOfBenefitTotal backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitTotal = new ExplanationOfBenefitTotalBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class ExplanationOfBenefitTotalBuilder extends BackboneElementBuilder<ExplanationOfBenefitTotal, IExplanationOfBenefitTotal> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * Type of adjudication information
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set amount
   * Financial total for the category
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitTotal instance
   */
  build(): ExplanationOfBenefitTotal {
    return new ExplanationOfBenefitTotal(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitTotal instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitTotal> {
    const explanationOfBenefitTotal = this.build();
    await explanationOfBenefitTotal.validateOrThrow();
    return explanationOfBenefitTotal;
  }
}
