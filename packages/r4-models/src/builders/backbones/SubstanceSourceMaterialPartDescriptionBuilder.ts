import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSourceMaterialPartDescription } from '../../models/backbones/SubstanceSourceMaterialPartDescription.js';
import type {
  ICodeableConcept,
  ISubstanceSourceMaterialPartDescription,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSourceMaterialPartDescriptionBuilder - Fluent builder for SubstanceSourceMaterialPartDescription backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSourceMaterialPartDescription = new SubstanceSourceMaterialPartDescriptionBuilder()
 *   .setPart(value)
 *   .build();
 */
export class SubstanceSourceMaterialPartDescriptionBuilder extends BackboneElementBuilder<SubstanceSourceMaterialPartDescription, ISubstanceSourceMaterialPartDescription> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set part
   * Entity of anatomical origin of source material within an organism
   */
  setPart(part: ICodeableConcept): this {
    this.data.part = part;
    return this;
  }

  /**
   * Set partLocation
   * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply
   */
  setPartLocation(partLocation: ICodeableConcept): this {
    this.data.partLocation = partLocation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSourceMaterialPartDescription instance
   */
  build(): SubstanceSourceMaterialPartDescription {
    return new SubstanceSourceMaterialPartDescription(this.data);
  }

  /**
   * Build and validate the SubstanceSourceMaterialPartDescription instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSourceMaterialPartDescription> {
    const substanceSourceMaterialPartDescription = this.build();
    await substanceSourceMaterialPartDescription.validateOrThrow();
    return substanceSourceMaterialPartDescription;
  }
}
