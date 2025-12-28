import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IInvoiceParticipant,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to InvoiceParticipant */
const INVOICE_PARTICIPANT_PROPERTIES = [
  'role',
  'actor',
] as const;

/**
 * InvoiceParticipant - Participant in creation of this Invoice
 *
 * @see https://hl7.org/fhir/R4B/invoiceparticipant.html
 *
 * @example
 * const invoiceParticipant = new InvoiceParticipant({
 *   // ... properties
 * });
 */
export class InvoiceParticipant extends BackboneElement implements IInvoiceParticipant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of involvement in creation of this Invoice */
  role?: ICodeableConcept;

  /** Individual who was involved */
  actor: IReference<'Practitioner' | 'Organization' | 'Patient' | 'PractitionerRole' | 'Device' | 'RelatedPerson'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IInvoiceParticipant>) {
    super(data);
    if (data) {
      this.assignProps(data, INVOICE_PARTICIPANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create InvoiceParticipant from a JSON object
   */
  static fromJSON(json: IInvoiceParticipant): InvoiceParticipant {
    return new InvoiceParticipant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new InvoiceParticipant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IInvoiceParticipant>): InvoiceParticipant {
    return new InvoiceParticipant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new InvoiceParticipant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IInvoiceParticipant) => Partial<IInvoiceParticipant>): InvoiceParticipant {
    const currentData = this.toJSON();
    return new InvoiceParticipant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IInvoiceParticipant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IInvoiceParticipant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INVOICE_PARTICIPANT_PROPERTIES);
    return result as IInvoiceParticipant;
  }

  /**
   * Create a deep clone of this InvoiceParticipant
   */
  clone(): InvoiceParticipant {
    return new InvoiceParticipant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the InvoiceParticipant
   */
  toString(): string {
    const parts: string[] = ['InvoiceParticipant'];
    return parts.join(', ');
  }
}
