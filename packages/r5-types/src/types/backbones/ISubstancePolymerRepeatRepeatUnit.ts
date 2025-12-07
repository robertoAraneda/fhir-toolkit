import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation } from './ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation.js';
import type { ISubstancePolymerRepeatRepeatUnitStructuralRepresentation } from './ISubstancePolymerRepeatRepeatUnitStructuralRepresentation.js';

/**
 * SubstancePolymerRepeatRepeatUnit Interface
 * 
 * An SRU - Structural Repeat Unit
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeatrepeatunit.html
 */
export interface ISubstancePolymerRepeatRepeatUnit extends IBackboneElement {
  /**
   * Structural repeat units are essential elements for defining polymers
   */
  unit?: string;
  /**
   * Extension for unit
   */
  _unit?: IElement;

  /**
   * The orientation of the polymerisation, e.g. head-tail, head-head, random
   */
  orientation?: ICodeableConcept;

  /**
   * Number of repeats of this unit
   */
  amount?: number;
  /**
   * Extension for amount
   */
  _amount?: IElement;

  /**
   * Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described
   */
  degreeOfPolymerisation?: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];

  /**
   * A graphical structure for this SRU
   */
  structuralRepresentation?: ISubstancePolymerRepeatRepeatUnitStructuralRepresentation[];

}
