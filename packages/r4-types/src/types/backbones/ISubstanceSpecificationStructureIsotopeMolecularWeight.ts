import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SubstanceSpecificationStructureIsotopeMolecularWeight Interface
 * 
 * The molecular weight or weight range (for proteins, polymers or nucleic acids)
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationstructureisotopemolecularweight.html
 */
export interface ISubstanceSpecificationStructureIsotopeMolecularWeight extends IBackboneElement {
  /**
   * The method by which the molecular weight was determined
   */
  method?: ICodeableConcept;

  /**
   * Type of molecular weight such as exact, average (also known as. number average), weight average
   */
  type?: ICodeableConcept;

  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field
   */
  amount?: IQuantity;

}
