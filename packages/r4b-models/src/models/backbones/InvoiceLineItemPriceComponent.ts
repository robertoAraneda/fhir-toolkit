import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IInvoiceLineItemPriceComponent,
  IMoney,
  InvoicePriceComponentTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to InvoiceLineItemPriceComponent */
const INVOICE_LINE_ITEM_PRICE_COMPONENT_PROPERTIES = [
  'type',
  '_type',
  'code',
  'factor',
  '_factor',
  'amount',
] as const;

/**
 * InvoiceLineItemPriceComponent - Components of total line item price
 *
 * @see https://hl7.org/fhir/R4B/invoicelineitempricecomponent.html
 *
 * @example
 * const invoiceLineItemPriceComponent = new InvoiceLineItemPriceComponent({
 *   // ... properties
 * });
 */
export class InvoiceLineItemPriceComponent extends BackboneElement implements IInvoiceLineItemPriceComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** base | surcharge | deduction | discount | tax | informational */
  type: InvoicePriceComponentTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Code identifying the specific component */
  code?: ICodeableConcept;

  /** Factor used for calculating this component */
  factor?: number;

  /** Extension for factor */
  _factor?: IElement;

  /** Monetary amount associated with this component */
  amount?: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInvoiceLineItemPriceComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, INVOICE_LINE_ITEM_PRICE_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InvoiceLineItemPriceComponent from a JSON object
   */
  static fromJSON(json: IInvoiceLineItemPriceComponent): InvoiceLineItemPriceComponent {
    return new InvoiceLineItemPriceComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InvoiceLineItemPriceComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInvoiceLineItemPriceComponent>): InvoiceLineItemPriceComponent {
    return new InvoiceLineItemPriceComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InvoiceLineItemPriceComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInvoiceLineItemPriceComponent) => Partial<IInvoiceLineItemPriceComponent>): InvoiceLineItemPriceComponent {
    const currentData = this.toJSON();
    return new InvoiceLineItemPriceComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInvoiceLineItemPriceComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInvoiceLineItemPriceComponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVOICE_LINE_ITEM_PRICE_COMPONENT_PROPERTIES);
    return result as IInvoiceLineItemPriceComponent;
  }

  /**
   * Create a deep clone of this InvoiceLineItemPriceComponent
   */
  clone(): InvoiceLineItemPriceComponent {
    return new InvoiceLineItemPriceComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InvoiceLineItemPriceComponent
   */
  toString(): string {
    const parts: string[] = ['InvoiceLineItemPriceComponent'];
    return parts.join(', ');
  }
}
