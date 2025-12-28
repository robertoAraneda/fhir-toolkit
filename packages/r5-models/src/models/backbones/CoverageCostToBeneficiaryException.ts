import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageCostToBeneficiaryException,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageCostToBeneficiaryException */
const COVERAGE_COST_TO_BENEFICIARY_EXCEPTION_PROPERTIES = [
  'type',
  'period',
] as const;

/**
 * CoverageCostToBeneficiaryException - Exceptions for patient payments
 *
 * @see https://hl7.org/fhir/R5/coveragecosttobeneficiaryexception.html
 *
 * @example
 * const coverageCostToBeneficiaryException = new CoverageCostToBeneficiaryException({
 *   // ... properties
 * });
 */
export class CoverageCostToBeneficiaryException extends BackboneElement implements ICoverageCostToBeneficiaryException {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Exception category */
  type: ICodeableConcept;

  /** The effective period of the exception */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageCostToBeneficiaryException>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_COST_TO_BENEFICIARY_EXCEPTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageCostToBeneficiaryException from a JSON object
   */
  static fromJSON(json: ICoverageCostToBeneficiaryException): CoverageCostToBeneficiaryException {
    return new CoverageCostToBeneficiaryException(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageCostToBeneficiaryException with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageCostToBeneficiaryException>): CoverageCostToBeneficiaryException {
    return new CoverageCostToBeneficiaryException({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageCostToBeneficiaryException by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageCostToBeneficiaryException) => Partial<ICoverageCostToBeneficiaryException>): CoverageCostToBeneficiaryException {
    const currentData = this.toJSON();
    return new CoverageCostToBeneficiaryException({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageCostToBeneficiaryException)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageCostToBeneficiaryException {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_COST_TO_BENEFICIARY_EXCEPTION_PROPERTIES);
    return result as ICoverageCostToBeneficiaryException;
  }

  /**
   * Create a deep clone of this CoverageCostToBeneficiaryException
   */
  clone(): CoverageCostToBeneficiaryException {
    return new CoverageCostToBeneficiaryException(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageCostToBeneficiaryException
   */
  toString(): string {
    const parts: string[] = ['CoverageCostToBeneficiaryException'];
    return parts.join(', ');
  }
}
