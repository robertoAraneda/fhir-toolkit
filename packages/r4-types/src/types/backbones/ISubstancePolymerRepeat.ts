import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ISubstancePolymerRepeatRepeatUnit } from './ISubstancePolymerRepeatRepeatUnit.js';

/**
 * SubstancePolymerRepeat Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeat.html
 */
export interface ISubstancePolymerRepeat extends IBackboneElement {
  /**
   * Todo
   */
  numberOfUnits?: number;
  /**
   * Extension for numberOfUnits
   */
  _numberOfUnits?: IElement;

  /**
   * Todo
   */
  averageMolecularFormula?: string;
  /**
   * Extension for averageMolecularFormula
   */
  _averageMolecularFormula?: IElement;

  /**
   * Todo
   */
  repeatUnitAmountType?: ICodeableConcept;

  /**
   * Todo
   */
  repeatUnit?: ISubstancePolymerRepeatRepeatUnit[];

}
