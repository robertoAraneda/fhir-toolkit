import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ISubstancePolymerRepeatRepeatUnit } from './ISubstancePolymerRepeatRepeatUnit.js';

/**
 * SubstancePolymerRepeat Interface
 * 
 * Specifies and quantifies the repeated units and their configuration
 * 
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeat.html
 */
export interface ISubstancePolymerRepeat extends IBackboneElement {
  /**
   * A representation of an (average) molecular formula from a polymer
   */
  averageMolecularFormula?: string;
  /**
   * Extension for averageMolecularFormula
   */
  _averageMolecularFormula?: IElement;

  /**
   * How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average)
   */
  repeatUnitAmountType?: ICodeableConcept;

  /**
   * An SRU - Structural Repeat Unit
   */
  repeatUnit?: ISubstancePolymerRepeatRepeatUnit[];

}
