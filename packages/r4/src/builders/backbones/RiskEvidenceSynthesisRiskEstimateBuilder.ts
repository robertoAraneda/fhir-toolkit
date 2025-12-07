import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RiskEvidenceSynthesisRiskEstimate } from '../../models/backbones/RiskEvidenceSynthesisRiskEstimate.js';
import type {
  ICodeableConcept,
  IRiskEvidenceSynthesisRiskEstimate,
  IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
} from '@fhir-toolkit/r4-types';

/**
 * RiskEvidenceSynthesisRiskEstimateBuilder - Fluent builder for RiskEvidenceSynthesisRiskEstimate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const riskEvidenceSynthesisRiskEstimate = new RiskEvidenceSynthesisRiskEstimateBuilder()
 *   .setDescription(value)
 *   .addPrecisionEstimate({ ... })
 *   .build();
 */
export class RiskEvidenceSynthesisRiskEstimateBuilder extends BackboneElementBuilder<RiskEvidenceSynthesisRiskEstimate, IRiskEvidenceSynthesisRiskEstimate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of risk estimate
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * Type of risk estimate
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set value
   * Point estimate
   */
  setValue(value: number): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set unitOfMeasure
   * What unit is the outcome described in?
   */
  setUnitOfMeasure(unitOfMeasure: ICodeableConcept): this {
    this.data.unitOfMeasure = unitOfMeasure;
    return this;
  }

  /**
   * Set denominatorCount
   * Sample size for group measured
   */
  setDenominatorCount(denominatorCount: number): this {
    this.data.denominatorCount = denominatorCount;
    return this;
  }

  /**
   * Set numeratorCount
   * Number with the outcome
   */
  setNumeratorCount(numeratorCount: number): this {
    this.data.numeratorCount = numeratorCount;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add precisionEstimate
   * How precise the estimate is
   */
  addPrecisionEstimate(precisionEstimate: IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate): this {
    return this.addToArray('precisionEstimate', precisionEstimate);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RiskEvidenceSynthesisRiskEstimate instance
   */
  build(): RiskEvidenceSynthesisRiskEstimate {
    return new RiskEvidenceSynthesisRiskEstimate(this.data);
  }

  /**
   * Build and validate the RiskEvidenceSynthesisRiskEstimate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RiskEvidenceSynthesisRiskEstimate> {
    const riskEvidenceSynthesisRiskEstimate = this.build();
    await riskEvidenceSynthesisRiskEstimate.validateOrThrow();
    return riskEvidenceSynthesisRiskEstimate;
  }
}
