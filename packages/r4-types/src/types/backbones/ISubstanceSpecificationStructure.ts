import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ISubstanceSpecificationStructureIsotope } from './ISubstanceSpecificationStructureIsotope.js';
import type { ISubstanceSpecificationStructureIsotopeMolecularWeight } from './ISubstanceSpecificationStructureIsotopeMolecularWeight.js';
import type { ISubstanceSpecificationStructureRepresentation } from './ISubstanceSpecificationStructureRepresentation.js';

/**
 * SubstanceSpecificationStructure Interface
 * 
 * Structural information
 * 
 *
 * @see https://hl7.org/fhir/R4/substancespecificationstructure.html
 */
export interface ISubstanceSpecificationStructure extends IBackboneElement {
  /**
   * Stereochemistry type
   */
  stereochemistry?: ICodeableConcept;

  /**
   * Optical activity type
   */
  opticalActivity?: ICodeableConcept;

  /**
   * Molecular formula
   */
  molecularFormula?: string;
  /**
   * Extension for molecularFormula
   */
  _molecularFormula?: IElement;

  /**
   * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot
   */
  molecularFormulaByMoiety?: string;
  /**
   * Extension for molecularFormulaByMoiety
   */
  _molecularFormulaByMoiety?: IElement;

  /**
   * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
   */
  isotope?: ISubstanceSpecificationStructureIsotope[];

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids)
   */
  molecularWeight?: ISubstanceSpecificationStructureIsotopeMolecularWeight;

  /**
   * Supporting literature
   */
  source?: IReference<'DocumentReference'>[];

  /**
   * Molecular structural representation
   */
  representation?: ISubstanceSpecificationStructureRepresentation[];

}
