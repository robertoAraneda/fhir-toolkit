import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMoney,
  IPaymentReconciliationAllocation,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PaymentReconciliationAllocation */
const PAYMENT_RECONCILIATION_ALLOCATION_PROPERTIES = [
  'identifier',
  'predecessor',
  'target',
  'targetItemString',
  '_targetItemString',
  'targetItemIdentifier',
  'targetItemPositiveInt',
  '_targetItemPositiveInt',
  'encounter',
  'account',
  'type',
  'submitter',
  'response',
  'date',
  '_date',
  'responsible',
  'payee',
  'amount',
] as const;

/**
 * PaymentReconciliationAllocation - Settlement particulars
 *
 * @see https://hl7.org/fhir/R5/paymentreconciliationallocation.html
 *
 * @example
 * const paymentReconciliationAllocation = new PaymentReconciliationAllocation({
 *   // ... properties
 * });
 */
export class PaymentReconciliationAllocation extends BackboneElement implements IPaymentReconciliationAllocation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier of the payment detail */
  identifier?: IIdentifier;

  /** Business identifier of the prior payment detail */
  predecessor?: IIdentifier;

  /** Subject of the payment */
  target?: IReference<'Claim' | 'Account' | 'Invoice' | 'ChargeItem' | 'Encounter' | 'Contract'>;

  /** Sub-element of the subject */
  targetItemString?: string;

  /** Extension for targetItemString */
  _targetItemString?: IElement;

  /** Sub-element of the subject */
  targetItemIdentifier?: IIdentifier;

  /** Sub-element of the subject */
  targetItemPositiveInt?: number;

  /** Extension for targetItemPositiveInt */
  _targetItemPositiveInt?: IElement;

  /** Applied-to encounter */
  encounter?: IReference<'Encounter'>;

  /** Applied-to account */
  account?: IReference<'Account'>;

  /** Category of payment */
  type?: ICodeableConcept;

  /** Submitter of the request */
  submitter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Response committing to a payment */
  response?: IReference<'ClaimResponse'>;

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

  constructor(data?: Partial<IPaymentReconciliationAllocation>) {
    super(data);
    if (data) {
      this.assignProps(data, PAYMENT_RECONCILIATION_ALLOCATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PaymentReconciliationAllocation from a JSON object
   */
  static fromJSON(json: IPaymentReconciliationAllocation): PaymentReconciliationAllocation {
    return new PaymentReconciliationAllocation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PaymentReconciliationAllocation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPaymentReconciliationAllocation>): PaymentReconciliationAllocation {
    return new PaymentReconciliationAllocation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PaymentReconciliationAllocation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPaymentReconciliationAllocation) => Partial<IPaymentReconciliationAllocation>): PaymentReconciliationAllocation {
    const currentData = this.toJSON();
    return new PaymentReconciliationAllocation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPaymentReconciliationAllocation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPaymentReconciliationAllocation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PAYMENT_RECONCILIATION_ALLOCATION_PROPERTIES);
    return result as IPaymentReconciliationAllocation;
  }

  /**
   * Create a deep clone of this PaymentReconciliationAllocation
   */
  clone(): PaymentReconciliationAllocation {
    return new PaymentReconciliationAllocation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PaymentReconciliationAllocation
   */
  toString(): string {
    const parts: string[] = ['PaymentReconciliationAllocation'];
    return parts.join(', ');
  }
}
