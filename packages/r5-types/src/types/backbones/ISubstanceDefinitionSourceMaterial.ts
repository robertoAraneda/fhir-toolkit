import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * SubstanceDefinitionSourceMaterial Interface
 * 
 * Material or taxonomic/anatomical source
 * 
 *
 * @see https://hl7.org/fhir/R5/substancedefinitionsourcematerial.html
 */
export interface ISubstanceDefinitionSourceMaterial extends IBackboneElement {
  /**
   * Classification of the origin of the raw material. e.g. cat hair is an Animal source type
   */
  type?: ICodeableConcept;

  /**
   * The genus of an organism e.g. the Latin epithet of the plant/animal scientific name
   */
  genus?: ICodeableConcept;

  /**
   * The species of an organism e.g. the Latin epithet of the species of the plant/animal
   */
  species?: ICodeableConcept;

  /**
   * An anatomical origin of the source material within an organism
   */
  part?: ICodeableConcept;

  /**
   * The country or countries where the material is harvested
   */
  countryOfOrigin?: ICodeableConcept[];

}
