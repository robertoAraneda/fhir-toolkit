import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IConsentVerification,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConsentVerification */
const CONSENT_VERIFICATION_PROPERTIES = [
  'verified',
  '_verified',
  'verificationType',
  'verifiedBy',
  'verifiedWith',
  'verificationDate',
  '_verificationDate',
] as const;

/**
 * ConsentVerification - Consent Verified by patient or family
 *
 * @see https://hl7.org/fhir/R4/consentverification.html
 *
 * @example
 * const consentVerification = new ConsentVerification({
 *   // ... properties
 * });
 */
export class ConsentVerification extends BackboneElement implements IConsentVerification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Has been verified */
  verified: boolean;

  /** Extension for verified */
  _verified?: IElement;

  /** Business case of verification */
  verificationType?: ICodeableConcept;

  /** Person conducting verification */
  verifiedBy?: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>;

  /** Person who verified */
  verifiedWith?: IReference<'Patient' | 'RelatedPerson'>;

  /** When consent verified */
  verificationDate?: string[];

  /** Extension for verificationDate */
  _verificationDate?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConsentVerification>) {
    super(data);
    if (data) {
      this.assignProps(data, CONSENT_VERIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConsentVerification from a JSON object
   */
  static fromJSON(json: IConsentVerification): ConsentVerification {
    return new ConsentVerification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConsentVerification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConsentVerification>): ConsentVerification {
    return new ConsentVerification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConsentVerification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConsentVerification) => Partial<IConsentVerification>): ConsentVerification {
    const currentData = this.toJSON();
    return new ConsentVerification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConsentVerification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConsentVerification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONSENT_VERIFICATION_PROPERTIES);
    return result as IConsentVerification;
  }

  /**
   * Create a deep clone of this ConsentVerification
   */
  clone(): ConsentVerification {
    return new ConsentVerification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConsentVerification
   */
  toString(): string {
    const parts: string[] = ['ConsentVerification'];
    return parts.join(', ');
  }
}
