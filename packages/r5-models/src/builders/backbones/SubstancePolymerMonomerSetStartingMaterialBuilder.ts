import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerMonomerSetStartingMaterial } from '../../models/backbones/SubstancePolymerMonomerSetStartingMaterial.js';
import type {
  ICodeableConcept,
  IQuantity,
  ISubstancePolymerMonomerSetStartingMaterial,
} from '@fhir-toolkit/r5-types';

/**
 * SubstancePolymerMonomerSetStartingMaterialBuilder - Fluent builder for SubstancePolymerMonomerSetStartingMaterial backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerMonomerSetStartingMaterial = new SubstancePolymerMonomerSetStartingMaterialBuilder()
 *   .setCode(value)
 *   .build();
 */
export class SubstancePolymerMonomerSetStartingMaterialBuilder extends BackboneElementBuilder<SubstancePolymerMonomerSetStartingMaterial, ISubstancePolymerMonomerSetStartingMaterial> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * The type of substance for this starting material
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set category
   * Substance high level category, e.g. chemical substance
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set isDefining
   * Used to specify whether the attribute described is a defining element for the unique identification of the polymer
   */
  setIsDefining(isDefining: boolean): this {
    this.data.isDefining = isDefining;
    return this;
  }

  /**
   * Set amount
   * A percentage
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstancePolymerMonomerSetStartingMaterial instance
   */
  build(): SubstancePolymerMonomerSetStartingMaterial {
    return new SubstancePolymerMonomerSetStartingMaterial(this.data);
  }

  /**
   * Build and validate the SubstancePolymerMonomerSetStartingMaterial instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstancePolymerMonomerSetStartingMaterial> {
    const substancePolymerMonomerSetStartingMaterial = this.build();
    await substancePolymerMonomerSetStartingMaterial.validateOrThrow();
    return substancePolymerMonomerSetStartingMaterial;
  }
}
