import { DomainResource } from '../base/DomainResource.js';
import type {
  FinancialResourceStatusType,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPaymentReconciliation,
  IPaymentReconciliationDetail,
  IPaymentReconciliationProcessNote,
  IPeriod,
  IReference,
  RemittanceOutcomeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PaymentReconciliation */
const PAYMENT_RECONCILIATION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'period',
  'created',
  '_created',
  'paymentIssuer',
  'request',
  'requestor',
  'outcome',
  '_outcome',
  'disposition',
  '_disposition',
  'paymentDate',
  '_paymentDate',
  'paymentAmount',
  'paymentIdentifier',
  'detail',
  'formCode',
  'processNote',
] as const;

/**
 * PaymentReconciliation - This resource provides the details including amount of a payment and allocates the payment items being paid.
 *
 * @see https://hl7.org/fhir/R4/paymentreconciliation.html
 *
 * @example
 * const paymentReconciliation = new PaymentReconciliation({
 *   resourceType: 'PaymentReconciliation',
 *   // ... properties
 * });
 */
export class PaymentReconciliation extends DomainResource implements IPaymentReconciliation {
  readonly resourceType = 'PaymentReconciliation' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for a payment reconciliation */
  identifier?: IIdentifier[];

  /** active | cancelled | draft | entered-in-error */
  status: FinancialResourceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Period covered */
  period?: IPeriod;

  /** Creation date */
  created: string;

  /** Extension for created */
  _created?: IElement;

  /** Party generating payment */
  paymentIssuer?: IReference<'Organization'>;

  /** Reference to requesting resource */
  request?: IReference<'Task'>;

  /** Responsible practitioner */
  requestor?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** queued | complete | error | partial */
  outcome?: RemittanceOutcomeType;

  /** Extension for outcome */
  _outcome?: IElement;

  /** Disposition message */
  disposition?: string;

  /** Extension for disposition */
  _disposition?: IElement;

  /** When payment issued */
  paymentDate: string;

  /** Extension for paymentDate */
  _paymentDate?: IElement;

  /** Total amount of Payment */
  paymentAmount: IMoney;

  /** Business identifier for the payment */
  paymentIdentifier?: IIdentifier;

  /** Settlement particulars */
  detail?: IPaymentReconciliationDetail[];

  /** Printed form identifier */
  formCode?: ICodeableConcept;

  /** Note concerning processing */
  processNote?: IPaymentReconciliationProcessNote[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPaymentReconciliation>) {
    super(data);
    if (data) {
      this.assignProps(data, PAYMENT_RECONCILIATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PaymentReconciliation from a JSON object
   */
  static fromJSON(json: IPaymentReconciliation): PaymentReconciliation {
    return new PaymentReconciliation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PaymentReconciliation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPaymentReconciliation>): PaymentReconciliation {
    return new PaymentReconciliation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PaymentReconciliation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPaymentReconciliation) => Partial<IPaymentReconciliation>): PaymentReconciliation {
    const currentData = this.toJSON();
    return new PaymentReconciliation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPaymentReconciliation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPaymentReconciliation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PAYMENT_RECONCILIATION_PROPERTIES);
    return result as IPaymentReconciliation;
  }

  /**
   * Create a deep clone of this PaymentReconciliation
   */
  clone(): PaymentReconciliation {
    return new PaymentReconciliation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PaymentReconciliation
   */
  toString(): string {
    const parts: string[] = ['PaymentReconciliation'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
