import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { SubstanceSourceMaterial } from '../../models/resources/SubstanceSourceMaterial.js';
import type {
  ICodeableConcept,
  IIdentifier,
  ISubstanceSourceMaterial,
  ISubstanceSourceMaterialFractionDescription,
  ISubstanceSourceMaterialOrganism,
  ISubstanceSourceMaterialPartDescription,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceSourceMaterialBuilder - Fluent builder for SubstanceSourceMaterial resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSourceMaterial = new SubstanceSourceMaterialBuilder()
 *   .setId('123')
 *   .setSourceMaterialClass(value)
 *   .addParentSubstanceId({ ... })
 *   .build();
 */
export class SubstanceSourceMaterialBuilder extends DomainResourceBuilder<SubstanceSourceMaterial, ISubstanceSourceMaterial> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sourceMaterialClass
   * General high level classification of the source material specific to the origin of the material
   */
  setSourceMaterialClass(sourceMaterialClass: ICodeableConcept): this {
    this.data.sourceMaterialClass = sourceMaterialClass;
    return this;
  }

  /**
   * Set sourceMaterialType
   * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent
   */
  setSourceMaterialType(sourceMaterialType: ICodeableConcept): this {
    this.data.sourceMaterialType = sourceMaterialType;
    return this;
  }

  /**
   * Set sourceMaterialState
   * The state of the source material when extracted
   */
  setSourceMaterialState(sourceMaterialState: ICodeableConcept): this {
    this.data.sourceMaterialState = sourceMaterialState;
    return this;
  }

  /**
   * Set organismId
   * The unique identifier associated with the source material parent organism shall be specified
   */
  setOrganismId(organismId: IIdentifier): this {
    this.data.organismId = organismId;
    return this;
  }

  /**
   * Set organismName
   * The organism accepted Scientific name shall be provided based on the organism taxonomy
   */
  setOrganismName(organismName: string): this {
    this.data.organismName = organismName;
    return this;
  }

  /**
   * Set developmentStage
   * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum)
   */
  setDevelopmentStage(developmentStage: ICodeableConcept): this {
    this.data.developmentStage = developmentStage;
    return this;
  }

  /**
   * Set organism
   * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
   */
  setOrganism(organism: ISubstanceSourceMaterialOrganism): this {
    this.data.organism = organism;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add parentSubstanceId
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant)
   */
  addParentSubstanceId(parentSubstanceId: IIdentifier): this {
    return this.addToArray('parentSubstanceId', parentSubstanceId);
  }

  /**
   * Add parentSubstanceName
   * The parent substance of the Herbal Drug, or Herbal preparation
   */
  addParentSubstanceName(parentSubstanceName: string): this {
    return this.addToArray('parentSubstanceName', parentSubstanceName);
  }

  /**
   * Add countryOfOrigin
   * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate
   */
  addCountryOfOrigin(countryOfOrigin: ICodeableConcept): this {
    return this.addToArray('countryOfOrigin', countryOfOrigin);
  }

  /**
   * Add geographicalLocation
   * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat
   */
  addGeographicalLocation(geographicalLocation: string): this {
    return this.addToArray('geographicalLocation', geographicalLocation);
  }

  /**
   * Add fractionDescription
   * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
   */
  addFractionDescription(fractionDescription: ISubstanceSourceMaterialFractionDescription): this {
    return this.addToArray('fractionDescription', fractionDescription);
  }

  /**
   * Add partDescription
   * To do
   */
  addPartDescription(partDescription: ISubstanceSourceMaterialPartDescription): this {
    return this.addToArray('partDescription', partDescription);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSourceMaterial instance
   */
  build(): SubstanceSourceMaterial {
    return new SubstanceSourceMaterial(this.data);
  }

  /**
   * Build and validate the SubstanceSourceMaterial instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSourceMaterial> {
    const substanceSourceMaterial = this.build();
    await substanceSourceMaterial.validateOrThrow();
    return substanceSourceMaterial;
  }
}
