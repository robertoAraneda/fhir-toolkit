import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EffectEvidenceSynthesisEffectEstimatePrecisionEstimate } from '../../models/backbones/EffectEvidenceSynthesisEffectEstimatePrecisionEstimate.js';
import type {
  ICodeableConcept,
  IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
} from '@fhir-toolkit/r4-types';

/**
 * EffectEvidenceSynthesisEffectEstimatePrecisionEstimateBuilder - Fluent builder for EffectEvidenceSynthesisEffectEstimatePrecisionEstimate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const effectEvidenceSynthesisEffectEstimatePrecisionEstimate = new EffectEvidenceSynthesisEffectEstimatePrecisionEstimateBuilder()
 *   .setType(value)
 *   .build();
 */
export class EffectEvidenceSynthesisEffectEstimatePrecisionEstimateBuilder extends BackboneElementBuilder<EffectEvidenceSynthesisEffectEstimatePrecisionEstimate, IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate> {
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
   * Build the EffectEvidenceSynthesisEffectEstimatePrecisionEstimate instance
   */
  build(): EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
    return new EffectEvidenceSynthesisEffectEstimatePrecisionEstimate(this.data);
  }

  /**
   * Build and validate the EffectEvidenceSynthesisEffectEstimatePrecisionEstimate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EffectEvidenceSynthesisEffectEstimatePrecisionEstimate> {
    const effectEvidenceSynthesisEffectEstimatePrecisionEstimate = this.build();
    await effectEvidenceSynthesisEffectEstimatePrecisionEstimate.validateOrThrow();
    return effectEvidenceSynthesisEffectEstimatePrecisionEstimate;
  }
}
