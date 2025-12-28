import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IInvoiceLineItem,
  IInvoiceLineItemPriceComponent,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to InvoiceLineItem */
const INVOICE_LINE_ITEM_PROPERTIES = [
  'sequence',
  '_sequence',
  'chargeItemReference',
  'chargeItemCodeableConcept',
  'priceComponent',
] as const;

/**
 * InvoiceLineItem - Line items of this Invoice
 *
 * @see https://hl7.org/fhir/R4B/invoicelineitem.html
 *
 * @example
 * const invoiceLineItem = new InvoiceLineItem({
 *   // ... properties
 * });
 */
export class InvoiceLineItem extends BackboneElement implements IInvoiceLineItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Sequence number of line item */
  sequence?: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Reference to ChargeItem containing details of this line item or an inline billing code */
  chargeItemReference?: IReference;

  /** Reference to ChargeItem containing details of this line item or an inline billing code */
  chargeItemCodeableConcept?: ICodeableConcept;

  /** Components of total line item price */
  priceComponent?: IInvoiceLineItemPriceComponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInvoiceLineItem>) {
    super(data);
    if (data) {
      this.assignProps(data, INVOICE_LINE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InvoiceLineItem from a JSON object
   */
  static fromJSON(json: IInvoiceLineItem): InvoiceLineItem {
    return new InvoiceLineItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InvoiceLineItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInvoiceLineItem>): InvoiceLineItem {
    return new InvoiceLineItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InvoiceLineItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInvoiceLineItem) => Partial<IInvoiceLineItem>): InvoiceLineItem {
    const currentData = this.toJSON();
    return new InvoiceLineItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInvoiceLineItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInvoiceLineItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVOICE_LINE_ITEM_PROPERTIES);
    return result as IInvoiceLineItem;
  }

  /**
   * Create a deep clone of this InvoiceLineItem
   */
  clone(): InvoiceLineItem {
    return new InvoiceLineItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InvoiceLineItem
   */
  toString(): string {
    const parts: string[] = ['InvoiceLineItem'];
    return parts.join(', ');
  }
}
