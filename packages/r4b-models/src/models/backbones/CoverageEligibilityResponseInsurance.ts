import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoverageEligibilityResponseInsurance,
  ICoverageEligibilityResponseInsuranceItem,
  IElement,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CoverageEligibilityResponseInsurance */
const COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_PROPERTIES = [
  'coverage',
  'inforce',
  '_inforce',
  'benefitPeriod',
  'item',
] as const;

/**
 * CoverageEligibilityResponseInsurance - Patient insurance information
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityresponseinsurance.html
 *
 * @example
 * const coverageEligibilityResponseInsurance = new CoverageEligibilityResponseInsurance({
 *   // ... properties
 * });
 */
export class CoverageEligibilityResponseInsurance extends BackboneElement implements ICoverageEligibilityResponseInsurance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Insurance information */
  coverage: IReference<'Coverage'>;

  /** Coverage inforce indicator */
  inforce?: boolean;

  /** Extension for inforce */
  _inforce?: IElement;

  /** When the benefits are applicable */
  benefitPeriod?: IPeriod;

  /** Benefits and authorization details */
  item?: ICoverageEligibilityResponseInsuranceItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityResponseInsurance>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityResponseInsurance from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityResponseInsurance): CoverageEligibilityResponseInsurance {
    return new CoverageEligibilityResponseInsurance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityResponseInsurance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityResponseInsurance>): CoverageEligibilityResponseInsurance {
    return new CoverageEligibilityResponseInsurance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityResponseInsurance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityResponseInsurance) => Partial<ICoverageEligibilityResponseInsurance>): CoverageEligibilityResponseInsurance {
    const currentData = this.toJSON();
    return new CoverageEligibilityResponseInsurance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityResponseInsurance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityResponseInsurance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_RESPONSE_INSURANCE_PROPERTIES);
    return result as ICoverageEligibilityResponseInsurance;
  }

  /**
   * Create a deep clone of this CoverageEligibilityResponseInsurance
   */
  clone(): CoverageEligibilityResponseInsurance {
    return new CoverageEligibilityResponseInsurance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityResponseInsurance
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityResponseInsurance'];
    return parts.join(', ');
  }
}
