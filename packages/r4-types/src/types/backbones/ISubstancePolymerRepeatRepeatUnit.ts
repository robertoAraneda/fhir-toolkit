import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ISubstanceAmount } from '../datatypes/ISubstanceAmount.js';
import type { ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation } from './ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation.js';
import type { ISubstancePolymerRepeatRepeatUnitStructuralRepresentation } from './ISubstancePolymerRepeatRepeatUnitStructuralRepresentation.js';

/**
 * SubstancePolymerRepeatRepeatUnit Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeatrepeatunit.html
 */
export interface ISubstancePolymerRepeatRepeatUnit extends IBackboneElement {
  /**
   * Todo
   */
  orientationOfPolymerisation?: ICodeableConcept;

  /**
   * Todo
   */
  repeatUnit?: string;
  /**
   * Extension for repeatUnit
   */
  _repeatUnit?: IElement;

  /**
   * Todo
   */
  amount?: ISubstanceAmount;

  /**
   * Todo
   */
  degreeOfPolymerisation?: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];

  /**
   * Todo
   */
  structuralRepresentation?: ISubstancePolymerRepeatRepeatUnitStructuralRepresentation[];

}
