import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * SubstanceSourceMaterialFractionDescription Interface
 * 
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
 * 
 *
 * @see https://hl7.org/fhir/R5/substancesourcematerialfractiondescription.html
 */
export interface ISubstanceSourceMaterialFractionDescription extends IBackboneElement {
  /**
   * This element is capturing information about the fraction of a plant part, or human plasma for fractionation
   */
  fraction?: string;
  /**
   * Extension for fraction
   */
  _fraction?: IElement;

  /**
   * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1
   */
  materialType?: ICodeableConcept;

}
