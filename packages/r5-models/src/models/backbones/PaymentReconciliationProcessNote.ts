import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IPaymentReconciliationProcessNote,
  NoteTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PaymentReconciliationProcessNote */
const PAYMENT_RECONCILIATION_PROCESS_NOTE_PROPERTIES = [
  'type',
  '_type',
  'text',
  '_text',
] as const;

/**
 * PaymentReconciliationProcessNote - Note concerning processing
 *
 * @see https://hl7.org/fhir/R5/paymentreconciliationprocessnote.html
 *
 * @example
 * const paymentReconciliationProcessNote = new PaymentReconciliationProcessNote({
 *   // ... properties
 * });
 */
export class PaymentReconciliationProcessNote extends BackboneElement implements IPaymentReconciliationProcessNote {

  // ============================================================================
  // Properties
  // ============================================================================

  /** display | print | printoper */
  type?: NoteTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Note explanatory text */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPaymentReconciliationProcessNote>) {
    super(data);
    if (data) {
      this.assignProps(data, PAYMENT_RECONCILIATION_PROCESS_NOTE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PaymentReconciliationProcessNote from a JSON object
   */
  static fromJSON(json: IPaymentReconciliationProcessNote): PaymentReconciliationProcessNote {
    return new PaymentReconciliationProcessNote(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PaymentReconciliationProcessNote with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPaymentReconciliationProcessNote>): PaymentReconciliationProcessNote {
    return new PaymentReconciliationProcessNote({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PaymentReconciliationProcessNote by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPaymentReconciliationProcessNote) => Partial<IPaymentReconciliationProcessNote>): PaymentReconciliationProcessNote {
    const currentData = this.toJSON();
    return new PaymentReconciliationProcessNote({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPaymentReconciliationProcessNote)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPaymentReconciliationProcessNote {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PAYMENT_RECONCILIATION_PROCESS_NOTE_PROPERTIES);
    return result as IPaymentReconciliationProcessNote;
  }

  /**
   * Create a deep clone of this PaymentReconciliationProcessNote
   */
  clone(): PaymentReconciliationProcessNote {
    return new PaymentReconciliationProcessNote(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PaymentReconciliationProcessNote
   */
  toString(): string {
    const parts: string[] = ['PaymentReconciliationProcessNote'];
    return parts.join(', ');
  }
}
