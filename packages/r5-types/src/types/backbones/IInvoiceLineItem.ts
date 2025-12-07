import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IMonetaryComponent } from '../datatypes/IMonetaryComponent.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * InvoiceLineItem Interface
 * 
 * Line items of this Invoice
 * 
 *
 * @see https://hl7.org/fhir/R4/invoicelineitem.html
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
   * Service data or period
   */
  servicedDate?: string;
  /**
   * Extension for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * Service data or period
   */
  servicedPeriod?: IPeriod;

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
  priceComponent?: IMonetaryComponent[];

}
