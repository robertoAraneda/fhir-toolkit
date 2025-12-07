import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ITiming,
  IVerificationResult,
  IVerificationResultAttestation,
  IVerificationResultPrimarySource,
  IVerificationResultValidator,
  StatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to VerificationResult */
const VERIFICATION_RESULT_PROPERTIES = [
  'target',
  'targetLocation',
  '_targetLocation',
  'need',
  'status',
  '_status',
  'statusDate',
  '_statusDate',
  'validationType',
  'validationProcess',
  'frequency',
  'lastPerformed',
  '_lastPerformed',
  'nextScheduled',
  '_nextScheduled',
  'failureAction',
  'primarySource',
  'attestation',
  'validator',
] as const;

/**
 * VerificationResult - Describes validation requirements, source(s), status and dates for one or more elements.
 *
 * @see https://hl7.org/fhir/R4/verificationresult.html
 *
 * @example
 * const verificationResult = new VerificationResult({
 *   // ... properties
 * });
 */
export class VerificationResult extends DomainResource implements IVerificationResult {
  readonly resourceType = 'VerificationResult' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** A resource that was validated */
  target?: IReference<'Resource'>[];

  /** The fhirpath location(s) within the resource that was validated */
  targetLocation?: string[];

  /** Extension for targetLocation */
  _targetLocation?: IElement;

  /** none | initial | periodic */
  need?: ICodeableConcept;

  /** attested | validated | in-process | req-revalid | val-fail | reval-fail */
  status: StatusType;

  /** Extension for status */
  _status?: IElement;

  /** When the validation status was updated */
  statusDate?: string;

  /** Extension for statusDate */
  _statusDate?: IElement;

  /** nothing | primary | multiple */
  validationType?: ICodeableConcept;

  /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) */
  validationProcess?: ICodeableConcept[];

  /** Frequency of revalidation */
  frequency?: ITiming;

  /** The date/time validation was last completed (including failed validations) */
  lastPerformed?: string;

  /** Extension for lastPerformed */
  _lastPerformed?: IElement;

  /** The date when target is next validated, if appropriate */
  nextScheduled?: string;

  /** Extension for nextScheduled */
  _nextScheduled?: IElement;

  /** fatal | warn | rec-only | none */
  failureAction?: ICodeableConcept;

  /** Information about the primary source(s) involved in validation */
  primarySource?: IVerificationResultPrimarySource[];

  /** Information about the entity attesting to information */
  attestation?: IVerificationResultAttestation;

  /** Information about the entity validating information */
  validator?: IVerificationResultValidator[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IVerificationResult>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, VERIFICATION_RESULT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create VerificationResult from a JSON object
   */
  static fromJSON(json: IVerificationResult): VerificationResult {
    return new VerificationResult(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new VerificationResult with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IVerificationResult>): VerificationResult {
    return new VerificationResult({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new VerificationResult by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IVerificationResult) => Partial<IVerificationResult>): VerificationResult {
    const currentData = this.toJSON();
    return new VerificationResult({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IVerificationResult)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IVerificationResult {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, VERIFICATION_RESULT_PROPERTIES);
    return result as IVerificationResult;
  }

  /**
   * Create a deep clone of this VerificationResult
   */
  clone(): VerificationResult {
    return new VerificationResult(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the VerificationResult
   */
  toString(): string {
    const parts: string[] = ['VerificationResult'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
