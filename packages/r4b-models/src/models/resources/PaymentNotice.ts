import { DomainResource } from '../base/DomainResource.js';
import type {
  FinancialResourceStatusType,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPaymentNotice,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PaymentNotice */
const PAYMENT_NOTICE_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'request',
  'response',
  'created',
  '_created',
  'provider',
  'payment',
  'paymentDate',
  '_paymentDate',
  'payee',
  'recipient',
  'amount',
  'paymentStatus',
] as const;

/**
 * PaymentNotice - This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 *
 * @see https://hl7.org/fhir/R4B/paymentnotice.html
 *
 * @example
 * const paymentNotice = new PaymentNotice({
 *   // ... properties
 * });
 */
export class PaymentNotice extends DomainResource implements IPaymentNotice {
  readonly resourceType = 'PaymentNotice' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for the payment noctice */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Request reference */
  request?: IReference<'Resource'>;

  /** Response reference */
  response?: IReference<'Resource'>;

  /** Creation date */
  created: string;

  /** Extension for created */
  _created?: IElement;

  /** Responsible practitioner */
  provider?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Payment reference */
  payment: IReference<'PaymentReconciliation'>;

  /** Payment or clearing date */
  paymentDate?: string;

  /** Extension for paymentDate */
  _paymentDate?: IElement;

  /** Party being paid */
  payee?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Party being notified */
  recipient: IReference<'Organization'>;

  /** Monetary amount of the payment */
  amount: IMoney;

  /** Issued or cleared Status of the payment */
  paymentStatus?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IPaymentNotice>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PAYMENT_NOTICE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PaymentNotice from a JSON object
   */
  static fromJSON(json: IPaymentNotice): PaymentNotice {
    return new PaymentNotice(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PaymentNotice with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPaymentNotice>): PaymentNotice {
    return new PaymentNotice({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PaymentNotice by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPaymentNotice) => Partial<IPaymentNotice>): PaymentNotice {
    const currentData = this.toJSON();
    return new PaymentNotice({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPaymentNotice)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPaymentNotice {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PAYMENT_NOTICE_PROPERTIES);
    return result as IPaymentNotice;
  }

  /**
   * Create a deep clone of this PaymentNotice
   */
  clone(): PaymentNotice {
    return new PaymentNotice(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PaymentNotice
   */
  toString(): string {
    const parts: string[] = ['PaymentNotice'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
