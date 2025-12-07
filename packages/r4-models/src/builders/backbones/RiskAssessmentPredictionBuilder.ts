import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RiskAssessmentPrediction } from '../../models/backbones/RiskAssessmentPrediction.js';
import type {
  ICodeableConcept,
  IPeriod,
  IRange,
  IRiskAssessmentPrediction,
} from '@fhir-toolkit/r4-types';

/**
 * RiskAssessmentPredictionBuilder - Fluent builder for RiskAssessmentPrediction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const riskAssessmentPrediction = new RiskAssessmentPredictionBuilder()
 *   .setOutcome(value)
 *   .build();
 */
export class RiskAssessmentPredictionBuilder extends BackboneElementBuilder<RiskAssessmentPrediction, IRiskAssessmentPrediction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set outcome
   * Possible outcome for the subject
   */
  setOutcome(outcome: ICodeableConcept): this {
    this.data.outcome = outcome;
    return this;
  }

  /**
   * Set qualitativeRisk
   * Likelihood of specified outcome as a qualitative value
   */
  setQualitativeRisk(qualitativeRisk: ICodeableConcept): this {
    this.data.qualitativeRisk = qualitativeRisk;
    return this;
  }

  /**
   * Set relativeRisk
   * Relative likelihood
   */
  setRelativeRisk(relativeRisk: number): this {
    this.data.relativeRisk = relativeRisk;
    return this;
  }

  /**
   * Set rationale
   * Explanation of prediction
   */
  setRationale(rationale: string): this {
    this.data.rationale = rationale;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set probability choice type
   * @param type - 'Decimal' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setProbability('Decimal', value)
   */
  setProbability<T extends 'Decimal' | 'Range'>(
    type: T,
    value: string
  ): this {
    const key = `probability${type}` as keyof IRiskAssessmentPrediction;
    const otherKeys: (keyof IRiskAssessmentPrediction)[] = [];
    if (type !== 'Decimal') {
      otherKeys.push('probabilityDecimal' as keyof IRiskAssessmentPrediction);
      otherKeys.push('_probabilityDecimal' as keyof IRiskAssessmentPrediction);
    }
    if (type !== 'Range') {
      otherKeys.push('probabilityRange' as keyof IRiskAssessmentPrediction);
      otherKeys.push('_probabilityRange' as keyof IRiskAssessmentPrediction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set when choice type
   * @param type - 'Period' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setWhen('Period', value)
   */
  setWhen<T extends 'Period' | 'Range'>(
    type: T,
    value: string
  ): this {
    const key = `when${type}` as keyof IRiskAssessmentPrediction;
    const otherKeys: (keyof IRiskAssessmentPrediction)[] = [];
    if (type !== 'Period') {
      otherKeys.push('whenPeriod' as keyof IRiskAssessmentPrediction);
      otherKeys.push('_whenPeriod' as keyof IRiskAssessmentPrediction);
    }
    if (type !== 'Range') {
      otherKeys.push('whenRange' as keyof IRiskAssessmentPrediction);
      otherKeys.push('_whenRange' as keyof IRiskAssessmentPrediction);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RiskAssessmentPrediction instance
   */
  build(): RiskAssessmentPrediction {
    return new RiskAssessmentPrediction(this.data);
  }

  /**
   * Build and validate the RiskAssessmentPrediction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RiskAssessmentPrediction> {
    const riskAssessmentPrediction = this.build();
    await riskAssessmentPrediction.validateOrThrow();
    return riskAssessmentPrediction;
  }
}
