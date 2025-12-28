import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoverageEligibilityRequestInsurance,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CoverageEligibilityRequestInsurance */
const COVERAGE_ELIGIBILITY_REQUEST_INSURANCE_PROPERTIES = [
  'focal',
  '_focal',
  'coverage',
  'businessArrangement',
  '_businessArrangement',
] as const;

/**
 * CoverageEligibilityRequestInsurance - Patient insurance information
 *
 * @see https://hl7.org/fhir/R4B/coverageeligibilityrequestinsurance.html
 *
 * @example
 * const coverageEligibilityRequestInsurance = new CoverageEligibilityRequestInsurance({
 *   // ... properties
 * });
 */
export class CoverageEligibilityRequestInsurance extends BackboneElement implements ICoverageEligibilityRequestInsurance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Applicable coverage */
  focal?: boolean;

  /** Extension for focal */
  _focal?: IElement;

  /** Insurance information */
  coverage: IReference<'Coverage'>;

  /** Additional provider contract number */
  businessArrangement?: string;

  /** Extension for businessArrangement */
  _businessArrangement?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityRequestInsurance>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_REQUEST_INSURANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityRequestInsurance from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityRequestInsurance): CoverageEligibilityRequestInsurance {
    return new CoverageEligibilityRequestInsurance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityRequestInsurance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityRequestInsurance>): CoverageEligibilityRequestInsurance {
    return new CoverageEligibilityRequestInsurance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityRequestInsurance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityRequestInsurance) => Partial<ICoverageEligibilityRequestInsurance>): CoverageEligibilityRequestInsurance {
    const currentData = this.toJSON();
    return new CoverageEligibilityRequestInsurance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityRequestInsurance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityRequestInsurance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_REQUEST_INSURANCE_PROPERTIES);
    return result as ICoverageEligibilityRequestInsurance;
  }

  /**
   * Create a deep clone of this CoverageEligibilityRequestInsurance
   */
  clone(): CoverageEligibilityRequestInsurance {
    return new CoverageEligibilityRequestInsurance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityRequestInsurance
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityRequestInsurance'];
    return parts.join(', ');
  }
}
