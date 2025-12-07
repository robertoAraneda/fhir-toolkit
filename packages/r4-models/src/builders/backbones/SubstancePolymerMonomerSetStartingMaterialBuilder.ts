import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerMonomerSetStartingMaterial } from '../../models/backbones/SubstancePolymerMonomerSetStartingMaterial.js';
import type {
  ICodeableConcept,
  ISubstanceAmount,
  ISubstancePolymerMonomerSetStartingMaterial,
} from '@fhir-toolkit/r4-types';

/**
 * SubstancePolymerMonomerSetStartingMaterialBuilder - Fluent builder for SubstancePolymerMonomerSetStartingMaterial backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerMonomerSetStartingMaterial = new SubstancePolymerMonomerSetStartingMaterialBuilder()
 *   .setMaterial(value)
 *   .build();
 */
export class SubstancePolymerMonomerSetStartingMaterialBuilder extends BackboneElementBuilder<SubstancePolymerMonomerSetStartingMaterial, ISubstancePolymerMonomerSetStartingMaterial> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set material
   * Todo
   */
  setMaterial(material: ICodeableConcept): this {
    this.data.material = material;
    return this;
  }

  /**
   * Set type
   * Todo
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set isDefining
   * Todo
   */
  setIsDefining(isDefining: boolean): this {
    this.data.isDefining = isDefining;
    return this;
  }

  /**
   * Set amount
   * Todo
   */
  setAmount(amount: ISubstanceAmount): this {
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
