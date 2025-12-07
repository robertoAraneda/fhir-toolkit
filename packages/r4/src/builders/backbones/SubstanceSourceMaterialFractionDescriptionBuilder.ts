import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSourceMaterialFractionDescription } from '../../models/backbones/SubstanceSourceMaterialFractionDescription.js';
import type {
  ICodeableConcept,
  ISubstanceSourceMaterialFractionDescription,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSourceMaterialFractionDescriptionBuilder - Fluent builder for SubstanceSourceMaterialFractionDescription backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSourceMaterialFractionDescription = new SubstanceSourceMaterialFractionDescriptionBuilder()
 *   .setFraction(value)
 *   .build();
 */
export class SubstanceSourceMaterialFractionDescriptionBuilder extends BackboneElementBuilder<SubstanceSourceMaterialFractionDescription, ISubstanceSourceMaterialFractionDescription> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set fraction
   * This element is capturing information about the fraction of a plant part, or human plasma for fractionation
   */
  setFraction(fraction: string): this {
    this.data.fraction = fraction;
    return this;
  }

  /**
   * Set materialType
   * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1
   */
  setMaterialType(materialType: ICodeableConcept): this {
    this.data.materialType = materialType;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSourceMaterialFractionDescription instance
   */
  build(): SubstanceSourceMaterialFractionDescription {
    return new SubstanceSourceMaterialFractionDescription(this.data);
  }

  /**
   * Build and validate the SubstanceSourceMaterialFractionDescription instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSourceMaterialFractionDescription> {
    const substanceSourceMaterialFractionDescription = this.build();
    await substanceSourceMaterialFractionDescription.validateOrThrow();
    return substanceSourceMaterialFractionDescription;
  }
}
