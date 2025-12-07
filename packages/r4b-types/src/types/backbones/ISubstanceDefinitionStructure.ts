import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ISubstanceDefinitionMolecularWeight } from './ISubstanceDefinitionMolecularWeight.js';
import type { ISubstanceDefinitionStructureRepresentation } from './ISubstanceDefinitionStructureRepresentation.js';

/**
 * SubstanceDefinitionStructure Interface
 * 
 * Structural information
 * 
 *
 * @see https://hl7.org/fhir/R4/substancedefinitionstructure.html
 */
export interface ISubstanceDefinitionStructure extends IBackboneElement {
  /**
   * Stereochemistry type
   */
  stereochemistry?: ICodeableConcept;

  /**
   * Optical activity type
   */
  opticalActivity?: ICodeableConcept;

  /**
   * Molecular formula (e.g. using the Hill system)
   */
  molecularFormula?: string;
  /**
   * Extension for molecularFormula
   */
  _molecularFormula?: IElement;

  /**
   * Specified per moiety according to the Hill system
   */
  molecularFormulaByMoiety?: string;
  /**
   * Extension for molecularFormulaByMoiety
   */
  _molecularFormulaByMoiety?: IElement;

  /**
   * The molecular weight or weight range
   */
  molecularWeight?: ISubstanceDefinitionMolecularWeight;

  /**
   * The method used to find the structure e.g. X-ray, NMR
   */
  technique?: ICodeableConcept[];

  /**
   * Source of information for the structure
   */
  sourceDocument?: IReference<'DocumentReference'>[];

  /**
   * A depiction of the structure or characterization of the substance
   */
  representation?: ISubstanceDefinitionStructureRepresentation[];

}
