import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenFeature } from '../../models/backbones/SpecimenFeature.js';
import type {
  ICodeableConcept,
  ISpecimenFeature,
} from '@fhir-toolkit/r5-types';

/**
 * SpecimenFeatureBuilder - Fluent builder for SpecimenFeature backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenFeature = new SpecimenFeatureBuilder()
 *   .setType(value)
 *   .build();
 */
export class SpecimenFeatureBuilder extends BackboneElementBuilder<SpecimenFeature, ISpecimenFeature> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Highlighted feature
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set description
   * Information about the feature
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenFeature instance
   */
  build(): SpecimenFeature {
    return new SpecimenFeature(this.data);
  }

  /**
   * Build and validate the SpecimenFeature instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenFeature> {
    const specimenFeature = this.build();
    await specimenFeature.validateOrThrow();
    return specimenFeature;
  }
}
