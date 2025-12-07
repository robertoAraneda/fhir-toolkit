import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ISubstanceSpecificationStructureIsotopeMolecularWeight } from './ISubstanceSpecificationStructureIsotopeMolecularWeight.js';

/**
 * SubstanceSpecificationStructureIsotope Interface
 * 
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationstructureisotope.html
 */
export interface ISubstanceSpecificationStructureIsotope extends IBackboneElement {
  /**
   * Substance identifier for each non-natural or radioisotope
   */
  identifier?: IIdentifier;

  /**
   * Substance name for each non-natural or radioisotope
   */
  name?: ICodeableConcept;

  /**
   * The type of isotopic substitution present in a single substance
   */
  substitution?: ICodeableConcept;

  /**
   * Half life - for a non-natural nuclide
   */
  halfLife?: IQuantity;

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids)
   */
  molecularWeight?: ISubstanceSpecificationStructureIsotopeMolecularWeight;

}
