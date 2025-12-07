import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ISignature,
  IVerificationResultAttestation,
} from '@fhir-toolkit/r5-types';

/** Properties specific to VerificationResultAttestation */
const VERIFICATION_RESULT_ATTESTATION_PROPERTIES = [
  'who',
  'onBehalfOf',
  'communicationMethod',
  'date',
  '_date',
  'sourceIdentityCertificate',
  '_sourceIdentityCertificate',
  'proxyIdentityCertificate',
  '_proxyIdentityCertificate',
  'proxySignature',
  'sourceSignature',
] as const;

/**
 * VerificationResultAttestation - Information about the entity attesting to information
 *
 * @see https://hl7.org/fhir/R4/verificationresultattestation.html
 *
 * @example
 * const verificationResultAttestation = new VerificationResultAttestation({
 *   // ... properties
 * });
 */
export class VerificationResultAttestation extends BackboneElement implements IVerificationResultAttestation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The individual or organization attesting to information */
  who?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** When the who is asserting on behalf of another (organization or individual) */
  onBehalfOf?: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>;

  /** The method by which attested information was submitted/retrieved */
  communicationMethod?: ICodeableConcept;

  /** The date the information was attested to */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** A digital identity certificate associated with the attestation source */
  sourceIdentityCertificate?: string;

  /** Extension for sourceIdentityCertificate */
  _sourceIdentityCertificate?: IElement;

  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source */
  proxyIdentityCertificate?: string;

  /** Extension for proxyIdentityCertificate */
  _proxyIdentityCertificate?: IElement;

  /** Proxy signature (digital or image) */
  proxySignature?: ISignature;

  /** Attester signature (digital or image) */
  sourceSignature?: ISignature;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IVerificationResultAttestation>) {
    super(data);
    if (data) {
      this.assignProps(data, VERIFICATION_RESULT_ATTESTATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create VerificationResultAttestation from a JSON object
   */
  static fromJSON(json: IVerificationResultAttestation): VerificationResultAttestation {
    return new VerificationResultAttestation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new VerificationResultAttestation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IVerificationResultAttestation>): VerificationResultAttestation {
    return new VerificationResultAttestation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new VerificationResultAttestation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IVerificationResultAttestation) => Partial<IVerificationResultAttestation>): VerificationResultAttestation {
    const currentData = this.toJSON();
    return new VerificationResultAttestation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IVerificationResultAttestation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IVerificationResultAttestation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VERIFICATION_RESULT_ATTESTATION_PROPERTIES);
    return result as IVerificationResultAttestation;
  }

  /**
   * Create a deep clone of this VerificationResultAttestation
   */
  clone(): VerificationResultAttestation {
    return new VerificationResultAttestation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the VerificationResultAttestation
   */
  toString(): string {
    const parts: string[] = ['VerificationResultAttestation'];
    return parts.join(', ');
  }
}
