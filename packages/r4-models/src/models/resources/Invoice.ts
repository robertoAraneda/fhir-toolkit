import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IInvoice,
  IInvoiceLineItem,
  IInvoiceLineItemPriceComponent,
  IInvoiceParticipant,
  IMoney,
  IReference,
  InvoiceStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Invoice */
const INVOICE_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'cancelledReason',
  '_cancelledReason',
  'type',
  'subject',
  'recipient',
  'date',
  '_date',
  'participant',
  'issuer',
  'account',
  'lineItem',
  'totalPriceComponent',
  'totalNet',
  'totalGross',
  'paymentTerms',
  '_paymentTerms',
  'note',
] as const;

/**
 * Invoice - Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 *
 * @see https://hl7.org/fhir/R4/invoice.html
 *
 * @example
 * const invoice = new Invoice({
 *   // ... properties
 * });
 */
export class Invoice extends DomainResource implements IInvoice {
  readonly resourceType = 'Invoice' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for item */
  identifier?: IIdentifier[];

  /** draft | issued | balanced | cancelled | entered-in-error */
  status: InvoiceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for cancellation of this Invoice */
  cancelledReason?: string;

  /** Extension for cancelledReason */
  _cancelledReason?: IElement;

  /** Type of Invoice */
  type?: ICodeableConcept;

  /** Recipient(s) of goods and services */
  subject?: IReference<'Patient' | 'Group'>;

  /** Recipient of this invoice */
  recipient?: IReference<'Organization' | 'Patient' | 'RelatedPerson'>;

  /** Invoice date / posting date */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Participant in creation of this Invoice */
  participant?: IInvoiceParticipant[];

  /** Issuing Organization of Invoice */
  issuer?: IReference<'Organization'>;

  /** Account that is being balanced */
  account?: IReference<'Account'>;

  /** Line items of this Invoice */
  lineItem?: IInvoiceLineItem[];

  /** Components of Invoice total */
  totalPriceComponent?: IInvoiceLineItemPriceComponent[];

  /** Net total of this Invoice */
  totalNet?: IMoney;

  /** Gross total of this Invoice */
  totalGross?: IMoney;

  /** Payment details */
  paymentTerms?: string;

  /** Extension for paymentTerms */
  _paymentTerms?: IElement;

  /** Comments made about the invoice */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IInvoice>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, INVOICE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Invoice from a JSON object
   */
  static fromJSON(json: IInvoice): Invoice {
    return new Invoice(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Invoice with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInvoice>): Invoice {
    return new Invoice({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Invoice by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInvoice) => Partial<IInvoice>): Invoice {
    const currentData = this.toJSON();
    return new Invoice({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInvoice)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInvoice {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, INVOICE_PROPERTIES);
    return result as IInvoice;
  }

  /**
   * Create a deep clone of this Invoice
   */
  clone(): Invoice {
    return new Invoice(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Invoice
   */
  toString(): string {
    const parts: string[] = ['Invoice'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
