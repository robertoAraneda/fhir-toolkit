import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageEligibilityResponseError,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageEligibilityResponseError */
const COVERAGE_ELIGIBILITY_RESPONSE_ERROR_PROPERTIES = [
  'code',
  'expression',
  '_expression',
] as const;

/**
 * CoverageEligibilityResponseError - Processing errors
 *
 * @see https://hl7.org/fhir/R5/coverageeligibilityresponseerror.html
 *
 * @example
 * const coverageEligibilityResponseError = new CoverageEligibilityResponseError({
 *   // ... properties
 * });
 */
export class CoverageEligibilityResponseError extends BackboneElement implements ICoverageEligibilityResponseError {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Error code detailing processing issues */
  code: ICodeableConcept;

  /** FHIRPath of element(s) related to issue */
  expression?: string[];

  /** Extension for expression */
  _expression?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityResponseError>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_RESPONSE_ERROR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityResponseError from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityResponseError): CoverageEligibilityResponseError {
    return new CoverageEligibilityResponseError(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityResponseError with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityResponseError>): CoverageEligibilityResponseError {
    return new CoverageEligibilityResponseError({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityResponseError by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityResponseError) => Partial<ICoverageEligibilityResponseError>): CoverageEligibilityResponseError {
    const currentData = this.toJSON();
    return new CoverageEligibilityResponseError({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityResponseError)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityResponseError {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_RESPONSE_ERROR_PROPERTIES);
    return result as ICoverageEligibilityResponseError;
  }

  /**
   * Create a deep clone of this CoverageEligibilityResponseError
   */
  clone(): CoverageEligibilityResponseError {
    return new CoverageEligibilityResponseError(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityResponseError
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityResponseError'];
    return parts.join(', ');
  }
}
