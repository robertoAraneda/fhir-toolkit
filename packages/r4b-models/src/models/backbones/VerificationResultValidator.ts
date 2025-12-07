import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IReference,
  ISignature,
  IVerificationResultValidator,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to VerificationResultValidator */
const VERIFICATION_RESULT_VALIDATOR_PROPERTIES = [
  'organization',
  'identityCertificate',
  '_identityCertificate',
  'attestationSignature',
] as const;

/**
 * VerificationResultValidator - Information about the entity validating information
 *
 * @see https://hl7.org/fhir/R4/verificationresultvalidator.html
 *
 * @example
 * const verificationResultValidator = new VerificationResultValidator({
 *   // ... properties
 * });
 */
export class VerificationResultValidator extends BackboneElement implements IVerificationResultValidator {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to the organization validating information */
  organization: IReference<'Organization'>;

  /** A digital identity certificate associated with the validator */
  identityCertificate?: string;

  /** Extension for identityCertificate */
  _identityCertificate?: IElement;

  /** Validator signature */
  attestationSignature?: ISignature;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IVerificationResultValidator>) {
    super(data);
    if (data) {
      this.assignProps(data, VERIFICATION_RESULT_VALIDATOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create VerificationResultValidator from a JSON object
   */
  static fromJSON(json: IVerificationResultValidator): VerificationResultValidator {
    return new VerificationResultValidator(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new VerificationResultValidator with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IVerificationResultValidator>): VerificationResultValidator {
    return new VerificationResultValidator({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new VerificationResultValidator by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IVerificationResultValidator) => Partial<IVerificationResultValidator>): VerificationResultValidator {
    const currentData = this.toJSON();
    return new VerificationResultValidator({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IVerificationResultValidator)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IVerificationResultValidator {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VERIFICATION_RESULT_VALIDATOR_PROPERTIES);
    return result as IVerificationResultValidator;
  }

  /**
   * Create a deep clone of this VerificationResultValidator
   */
  clone(): VerificationResultValidator {
    return new VerificationResultValidator(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the VerificationResultValidator
   */
  toString(): string {
    const parts: string[] = ['VerificationResultValidator'];
    return parts.join(', ');
  }
}
