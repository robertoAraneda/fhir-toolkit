import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitBenefitBalance } from '../../models/backbones/ExplanationOfBenefitBenefitBalance.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitBenefitBalance,
  IExplanationOfBenefitBenefitBalanceFinancial,
} from '@fhir-toolkit/r4-types';

/**
 * ExplanationOfBenefitBenefitBalanceBuilder - Fluent builder for ExplanationOfBenefitBenefitBalance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitBenefitBalance = new ExplanationOfBenefitBenefitBalanceBuilder()
 *   .setCategory(value)
 *   .addFinancial({ ... })
 *   .build();
 */
export class ExplanationOfBenefitBenefitBalanceBuilder extends BackboneElementBuilder<ExplanationOfBenefitBenefitBalance, IExplanationOfBenefitBenefitBalance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * Benefit classification
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set excluded
   * Excluded from the plan
   */
  setExcluded(excluded: boolean): this {
    this.data.excluded = excluded;
    return this;
  }

  /**
   * Set name
   * Short name for the benefit
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Description of the benefit or services covered
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set network
   * In or out of network
   */
  setNetwork(network: ICodeableConcept): this {
    this.data.network = network;
    return this;
  }

  /**
   * Set unit
   * Individual or family
   */
  setUnit(unit: ICodeableConcept): this {
    this.data.unit = unit;
    return this;
  }

  /**
   * Set term
   * Annual or lifetime
   */
  setTerm(term: ICodeableConcept): this {
    this.data.term = term;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add financial
   * Benefit Summary
   */
  addFinancial(financial: IExplanationOfBenefitBenefitBalanceFinancial): this {
    return this.addToArray('financial', financial);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitBenefitBalance instance
   */
  build(): ExplanationOfBenefitBenefitBalance {
    return new ExplanationOfBenefitBenefitBalance(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitBenefitBalance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitBenefitBalance> {
    const explanationOfBenefitBenefitBalance = this.build();
    await explanationOfBenefitBenefitBalance.validateOrThrow();
    return explanationOfBenefitBenefitBalance;
  }
}
