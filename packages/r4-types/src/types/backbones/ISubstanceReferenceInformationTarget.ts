import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * SubstanceReferenceInformationTarget Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancereferenceinformationtarget.html
 */
export interface ISubstanceReferenceInformationTarget extends IBackboneElement {
  /**
   * Todo
   */
  target?: IIdentifier;

  /**
   * Todo
   */
  type?: ICodeableConcept;

  /**
   * Todo
   */
  interaction?: ICodeableConcept;

  /**
   * Todo
   */
  organism?: ICodeableConcept;

  /**
   * Todo
   */
  organismType?: ICodeableConcept;

  /**
   * Todo
   */
  amountQuantity?: IQuantity;

  /**
   * Todo
   */
  amountRange?: IRange;

  /**
   * Todo
   */
  amountString?: string;
  /**
   * Extension for amountString
   */
  _amountString?: IElement;

  /**
   * Todo
   */
  amountType?: ICodeableConcept;

  /**
   * Todo
   */
  source?: IReference<'DocumentReference'>[];

}
