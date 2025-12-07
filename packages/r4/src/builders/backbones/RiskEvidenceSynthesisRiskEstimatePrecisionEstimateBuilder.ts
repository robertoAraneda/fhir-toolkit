import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RiskEvidenceSynthesisRiskEstimatePrecisionEstimate } from '../../models/backbones/RiskEvidenceSynthesisRiskEstimatePrecisionEstimate.js';
import type {
  ICodeableConcept,
  IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
} from '@fhir-toolkit/r4-types';

/**
 * RiskEvidenceSynthesisRiskEstimatePrecisionEstimateBuilder - Fluent builder for RiskEvidenceSynthesisRiskEstimatePrecisionEstimate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const riskEvidenceSynthesisRiskEstimatePrecisionEstimate = new RiskEvidenceSynthesisRiskEstimatePrecisionEstimateBuilder()
 *   .setType(value)
 *   .build();
 */
export class RiskEvidenceSynthesisRiskEstimatePrecisionEstimateBuilder extends BackboneElementBuilder<RiskEvidenceSynthesisRiskEstimatePrecisionEstimate, IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of precision estimate
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set level
   * Level of confidence interval
   */
  setLevel(level: number): this {
    this.data.level = level;
    return this;
  }

  /**
   * Set from
   * Lower bound
   */
  setFrom(from: number): this {
    this.data.from = from;
    return this;
  }

  /**
   * Set to
   * Upper bound
   */
  setTo(to: number): this {
    this.data.to = to;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RiskEvidenceSynthesisRiskEstimatePrecisionEstimate instance
   */
  build(): RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    return new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(this.data);
  }

  /**
   * Build and validate the RiskEvidenceSynthesisRiskEstimatePrecisionEstimate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RiskEvidenceSynthesisRiskEstimatePrecisionEstimate> {
    const riskEvidenceSynthesisRiskEstimatePrecisionEstimate = this.build();
    await riskEvidenceSynthesisRiskEstimatePrecisionEstimate.validateOrThrow();
    return riskEvidenceSynthesisRiskEstimatePrecisionEstimate;
  }
}
