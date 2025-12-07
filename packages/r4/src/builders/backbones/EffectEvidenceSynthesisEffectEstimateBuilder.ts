import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EffectEvidenceSynthesisEffectEstimate } from '../../models/backbones/EffectEvidenceSynthesisEffectEstimate.js';
import type {
  ICodeableConcept,
  IEffectEvidenceSynthesisEffectEstimate,
  IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
} from '@fhir-toolkit/r4-types';

/**
 * EffectEvidenceSynthesisEffectEstimateBuilder - Fluent builder for EffectEvidenceSynthesisEffectEstimate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const effectEvidenceSynthesisEffectEstimate = new EffectEvidenceSynthesisEffectEstimateBuilder()
 *   .setDescription(value)
 *   .addPrecisionEstimate({ ... })
 *   .build();
 */
export class EffectEvidenceSynthesisEffectEstimateBuilder extends BackboneElementBuilder<EffectEvidenceSynthesisEffectEstimate, IEffectEvidenceSynthesisEffectEstimate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of effect estimate
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * Type of efffect estimate
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
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

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add precisionEstimate
   * How precise the estimate is
   */
  addPrecisionEstimate(precisionEstimate: IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate): this {
    return this.addToArray('precisionEstimate', precisionEstimate);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EffectEvidenceSynthesisEffectEstimate instance
   */
  build(): EffectEvidenceSynthesisEffectEstimate {
    return new EffectEvidenceSynthesisEffectEstimate(this.data);
  }

  /**
   * Build and validate the EffectEvidenceSynthesisEffectEstimate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EffectEvidenceSynthesisEffectEstimate> {
    const effectEvidenceSynthesisEffectEstimate = this.build();
    await effectEvidenceSynthesisEffectEstimate.validateOrThrow();
    return effectEvidenceSynthesisEffectEstimate;
  }
}
