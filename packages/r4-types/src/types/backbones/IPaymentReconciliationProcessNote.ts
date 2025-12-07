import type { IBackboneElement, IElement } from '../../base/index.js';
import type { NoteTypeType } from '../../valuesets/index.js';

/**
 * PaymentReconciliationProcessNote Interface
 * 
 * Note concerning processing
 * 
 *
 * @see https://hl7.org/fhir/R4/paymentreconciliationprocessnote.html
 */
export interface IPaymentReconciliationProcessNote extends IBackboneElement {
  /**
   * display | print | printoper
   */
  type?: NoteTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Note explanatory text
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

}
