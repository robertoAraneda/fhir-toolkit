import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPaymentReconciliationDetail,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PaymentReconciliationDetail */
const PAYMENT_RECONCILIATION_DETAIL_PROPERTIES = [
  'identifier',
  'predecessor',
  'type',
  'request',
  'submitter',
  'response',
  'date',
  '_date',
  'responsible',
  'payee',
  'amount',
] as const;

/**
 * PaymentReconciliationDetail - Settlement particulars
 *
 * @see https://hl7.org/fhir/R4B/paymentreconciliationdetail.html
 *
 * @example
 * const paymentReconciliationDetail = new PaymentReconciliationDetail({
 *   // ... properties
 * });
 */
export class PaymentReconciliationDetail extends BackboneElement implements IPaymentReconciliationDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier of the payment detail */
  identifier?: IIdentifier;

  /** Business identifier of the prior payment detail */
  predecessor?: IIdentifier;

  /** Category of payment */
  type: ICodeableConcept;

  /** Request giving rise to the payment */
  request?: IReference<'Resource'>;

  /** Submitter of the request */
  submitter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Response committing to a payment */
  response?: IReference<'Resource'>;

  /** Date of commitment to pay */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Contact for the response */
  responsible?: IReference<'PractitionerRole'>;

  /** Recipient of the payment */
  payee?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Amount allocated to this payable */
  amount?: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPaymentReconciliationDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, PAYMENT_RECONCILIATION_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PaymentReconciliationDetail from a JSON object
   */
  static fromJSON(json: IPaymentReconciliationDetail): PaymentReconciliationDetail {
    return new PaymentReconciliationDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PaymentReconciliationDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPaymentReconciliationDetail>): PaymentReconciliationDetail {
    return new PaymentReconciliationDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PaymentReconciliationDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPaymentReconciliationDetail) => Partial<IPaymentReconciliationDetail>): PaymentReconciliationDetail {
    const currentData = this.toJSON();
    return new PaymentReconciliationDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPaymentReconciliationDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPaymentReconciliationDetail {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PAYMENT_RECONCILIATION_DETAIL_PROPERTIES);
    return result as IPaymentReconciliationDetail;
  }

  /**
   * Create a deep clone of this PaymentReconciliationDetail
   */
  clone(): PaymentReconciliationDetail {
    return new PaymentReconciliationDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PaymentReconciliationDetail
   */
  toString(): string {
    const parts: string[] = ['PaymentReconciliationDetail'];
    return parts.join(', ');
  }
}
