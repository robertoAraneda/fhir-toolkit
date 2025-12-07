import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSourceMaterialOrganism } from '../../models/backbones/SubstanceSourceMaterialOrganism.js';
import type {
  ICodeableConcept,
  ISubstanceSourceMaterialOrganism,
  ISubstanceSourceMaterialOrganismAuthor,
  ISubstanceSourceMaterialOrganismHybrid,
  ISubstanceSourceMaterialOrganismOrganismGeneral,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSourceMaterialOrganismBuilder - Fluent builder for SubstanceSourceMaterialOrganism backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSourceMaterialOrganism = new SubstanceSourceMaterialOrganismBuilder()
 *   .setFamily(value)
 *   .addAuthor({ ... })
 *   .build();
 */
export class SubstanceSourceMaterialOrganismBuilder extends BackboneElementBuilder<SubstanceSourceMaterialOrganism, ISubstanceSourceMaterialOrganism> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set family
   * The family of an organism shall be specified
   */
  setFamily(family: ICodeableConcept): this {
    this.data.family = family;
    return this;
  }

  /**
   * Set genus
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies
   */
  setGenus(genus: ICodeableConcept): this {
    this.data.genus = genus;
    return this;
  }

  /**
   * Set species
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies
   */
  setSpecies(species: ICodeableConcept): this {
    this.data.species = species;
    return this;
  }

  /**
   * Set intraspecificType
   * The Intraspecific type of an organism shall be specified
   */
  setIntraspecificType(intraspecificType: ICodeableConcept): this {
    this.data.intraspecificType = intraspecificType;
    return this;
  }

  /**
   * Set intraspecificDescription
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention
   */
  setIntraspecificDescription(intraspecificDescription: string): this {
    this.data.intraspecificDescription = intraspecificDescription;
    return this;
  }

  /**
   * Set hybrid
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
   */
  setHybrid(hybrid: ISubstanceSourceMaterialOrganismHybrid): this {
    this.data.hybrid = hybrid;
    return this;
  }

  /**
   * Set organismGeneral
   * 4.9.13.7.1 Kingdom (Conditional)
   */
  setOrganismGeneral(organismGeneral: ISubstanceSourceMaterialOrganismOrganismGeneral): this {
    this.data.organismGeneral = organismGeneral;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add author
   * 4.9.13.6.1 Author type (Conditional)
   */
  addAuthor(author: ISubstanceSourceMaterialOrganismAuthor): this {
    return this.addToArray('author', author);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSourceMaterialOrganism instance
   */
  build(): SubstanceSourceMaterialOrganism {
    return new SubstanceSourceMaterialOrganism(this.data);
  }

  /**
   * Build and validate the SubstanceSourceMaterialOrganism instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSourceMaterialOrganism> {
    const substanceSourceMaterialOrganism = this.build();
    await substanceSourceMaterialOrganism.validateOrThrow();
    return substanceSourceMaterialOrganism;
  }
}
