import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionSourceMaterial } from '../../models/backbones/SubstanceDefinitionSourceMaterial.js';
import type {
  ICodeableConcept,
  ISubstanceDefinitionSourceMaterial,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceDefinitionSourceMaterialBuilder - Fluent builder for SubstanceDefinitionSourceMaterial backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionSourceMaterial = new SubstanceDefinitionSourceMaterialBuilder()
 *   .setType(value)
 *   .addCountryOfOrigin({ ... })
 *   .build();
 */
export class SubstanceDefinitionSourceMaterialBuilder extends BackboneElementBuilder<SubstanceDefinitionSourceMaterial, ISubstanceDefinitionSourceMaterial> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Classification of the origin of the raw material. e.g. cat hair is an Animal source type
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set genus
   * The genus of an organism e.g. the Latin epithet of the plant/animal scientific name
   */
  setGenus(genus: ICodeableConcept): this {
    this.data.genus = genus;
    return this;
  }

  /**
   * Set species
   * The species of an organism e.g. the Latin epithet of the species of the plant/animal
   */
  setSpecies(species: ICodeableConcept): this {
    this.data.species = species;
    return this;
  }

  /**
   * Set part
   * An anatomical origin of the source material within an organism
   */
  setPart(part: ICodeableConcept): this {
    this.data.part = part;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add countryOfOrigin
   * The country or countries where the material is harvested
   */
  addCountryOfOrigin(countryOfOrigin: ICodeableConcept): this {
    return this.addToArray('countryOfOrigin', countryOfOrigin);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinitionSourceMaterial instance
   */
  build(): SubstanceDefinitionSourceMaterial {
    return new SubstanceDefinitionSourceMaterial(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionSourceMaterial instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionSourceMaterial> {
    const substanceDefinitionSourceMaterial = this.build();
    await substanceDefinitionSourceMaterial.validateOrThrow();
    return substanceDefinitionSourceMaterial;
  }
}
