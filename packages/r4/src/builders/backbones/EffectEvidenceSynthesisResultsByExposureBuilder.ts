import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EffectEvidenceSynthesisResultsByExposure } from '../../models/backbones/EffectEvidenceSynthesisResultsByExposure.js';
import type {
  ExposureStateType,
  ICodeableConcept,
  IEffectEvidenceSynthesisResultsByExposure,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * EffectEvidenceSynthesisResultsByExposureBuilder - Fluent builder for EffectEvidenceSynthesisResultsByExposure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const effectEvidenceSynthesisResultsByExposure = new EffectEvidenceSynthesisResultsByExposureBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class EffectEvidenceSynthesisResultsByExposureBuilder extends BackboneElementBuilder<EffectEvidenceSynthesisResultsByExposure, IEffectEvidenceSynthesisResultsByExposure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of results by exposure
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set exposureState
   * exposure | exposure-alternative
   */
  setExposureState(exposureState: ExposureStateType): this {
    this.data.exposureState = exposureState;
    return this;
  }

  /**
   * Set variantState
   * Variant exposure states
   */
  setVariantState(variantState: ICodeableConcept): this {
    this.data.variantState = variantState;
    return this;
  }

  /**
   * Set riskEvidenceSynthesis
   * Risk evidence synthesis
   */
  setRiskEvidenceSynthesis(riskEvidenceSynthesis: IReference<'RiskEvidenceSynthesis'>): this {
    this.data.riskEvidenceSynthesis = riskEvidenceSynthesis;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EffectEvidenceSynthesisResultsByExposure instance
   */
  build(): EffectEvidenceSynthesisResultsByExposure {
    return new EffectEvidenceSynthesisResultsByExposure(this.data);
  }

  /**
   * Build and validate the EffectEvidenceSynthesisResultsByExposure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EffectEvidenceSynthesisResultsByExposure> {
    const effectEvidenceSynthesisResultsByExposure = this.build();
    await effectEvidenceSynthesisResultsByExposure.validateOrThrow();
    return effectEvidenceSynthesisResultsByExposure;
  }
}
