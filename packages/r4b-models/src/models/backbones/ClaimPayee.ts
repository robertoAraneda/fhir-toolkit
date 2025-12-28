import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimPayee,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimPayee */
const CLAIM_PAYEE_PROPERTIES = [
  'type',
  'party',
] as const;

/**
 * ClaimPayee - Recipient of benefits payable
 *
 * @see https://hl7.org/fhir/R4B/claimpayee.html
 *
 * @example
 * const claimPayee = new ClaimPayee({
 *   // ... properties
 * });
 */
export class ClaimPayee extends BackboneElement implements IClaimPayee {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Category of recipient */
  type: ICodeableConcept;

  /** Recipient reference */
  party?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimPayee>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_PAYEE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimPayee from a JSON object
   */
  static fromJSON(json: IClaimPayee): ClaimPayee {
    return new ClaimPayee(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimPayee with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimPayee>): ClaimPayee {
    return new ClaimPayee({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimPayee by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimPayee) => Partial<IClaimPayee>): ClaimPayee {
    const currentData = this.toJSON();
    return new ClaimPayee({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimPayee)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimPayee {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_PAYEE_PROPERTIES);
    return result as IClaimPayee;
  }

  /**
   * Create a deep clone of this ClaimPayee
   */
  clone(): ClaimPayee {
    return new ClaimPayee(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimPayee
   */
  toString(): string {
    const parts: string[] = ['ClaimPayee'];
    return parts.join(', ');
  }
}
