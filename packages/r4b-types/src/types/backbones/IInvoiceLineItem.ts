import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IInvoiceLineItemPriceComponent } from './IInvoiceLineItemPriceComponent.js';

/**
 * InvoiceLineItem Interface
 * 
 * Line items of this Invoice
 * 
 *
 * @see https://hl7.org/fhir/R4B/invoicelineitem.html
 */
export interface IInvoiceLineItem extends IBackboneElement {
  /**
   * Sequence number of line item
   */
  sequence?: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Reference to ChargeItem containing details of this line item or an inline billing code
   */
  chargeItemReference?: IReference;

  /**
   * Reference to ChargeItem containing details of this line item or an inline billing code
   */
  chargeItemCodeableConcept?: ICodeableConcept;

  /**
   * Components of total line item price
   */
  priceComponent?: IInvoiceLineItemPriceComponent[];

}
