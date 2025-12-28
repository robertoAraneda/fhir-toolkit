import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  IVerificationResultPrimarySource,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to VerificationResultPrimarySource */
const VERIFICATION_RESULT_PRIMARY_SOURCE_PROPERTIES = [
  'who',
  'type',
  'communicationMethod',
  'validationStatus',
  'validationDate',
  '_validationDate',
  'canPushUpdates',
  'pushTypeAvailable',
] as const;

/**
 * VerificationResultPrimarySource - Information about the primary source(s) involved in validation
 *
 * @see https://hl7.org/fhir/R4B/verificationresultprimarysource.html
 *
 * @example
 * const verificationResultPrimarySource = new VerificationResultPrimarySource({
 *   // ... properties
 * });
 */
export class VerificationResultPrimarySource extends BackboneElement implements IVerificationResultPrimarySource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to the primary source */
  who?: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>;

  /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) */
  type?: ICodeableConcept[];

  /** Method for exchanging information with the primary source */
  communicationMethod?: ICodeableConcept[];

  /** successful | failed | unknown */
  validationStatus?: ICodeableConcept;

  /** When the target was validated against the primary source */
  validationDate?: string;

  /** Extension for validationDate */
  _validationDate?: IElement;

  /** yes | no | undetermined */
  canPushUpdates?: ICodeableConcept;

  /** specific | any | source */
  pushTypeAvailable?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IVerificationResultPrimarySource>) {
    super(data);
    if (data) {
      this.assignProps(data, VERIFICATION_RESULT_PRIMARY_SOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create VerificationResultPrimarySource from a JSON object
   */
  static fromJSON(json: IVerificationResultPrimarySource): VerificationResultPrimarySource {
    return new VerificationResultPrimarySource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new VerificationResultPrimarySource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IVerificationResultPrimarySource>): VerificationResultPrimarySource {
    return new VerificationResultPrimarySource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new VerificationResultPrimarySource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IVerificationResultPrimarySource) => Partial<IVerificationResultPrimarySource>): VerificationResultPrimarySource {
    const currentData = this.toJSON();
    return new VerificationResultPrimarySource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IVerificationResultPrimarySource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IVerificationResultPrimarySource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VERIFICATION_RESULT_PRIMARY_SOURCE_PROPERTIES);
    return result as IVerificationResultPrimarySource;
  }

  /**
   * Create a deep clone of this VerificationResultPrimarySource
   */
  clone(): VerificationResultPrimarySource {
    return new VerificationResultPrimarySource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the VerificationResultPrimarySource
   */
  toString(): string {
    const parts: string[] = ['VerificationResultPrimarySource'];
    return parts.join(', ');
  }
}
