import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoverageEligibilityRequestSupportingInfo,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CoverageEligibilityRequestSupportingInfo */
const COVERAGE_ELIGIBILITY_REQUEST_SUPPORTING_INFO_PROPERTIES = [
  'sequence',
  '_sequence',
  'information',
  'appliesToAll',
  '_appliesToAll',
] as const;

/**
 * CoverageEligibilityRequestSupportingInfo - Supporting information
 *
 * @see https://hl7.org/fhir/R4/coverageeligibilityrequestsupportinginfo.html
 *
 * @example
 * const coverageEligibilityRequestSupportingInfo = new CoverageEligibilityRequestSupportingInfo({
 *   // ... properties
 * });
 */
export class CoverageEligibilityRequestSupportingInfo extends BackboneElement implements ICoverageEligibilityRequestSupportingInfo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Information instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Data to be provided */
  information: IReference<'Resource'>;

  /** Applies to all items */
  appliesToAll?: boolean;

  /** Extension for appliesToAll */
  _appliesToAll?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageEligibilityRequestSupportingInfo>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_ELIGIBILITY_REQUEST_SUPPORTING_INFO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageEligibilityRequestSupportingInfo from a JSON object
   */
  static fromJSON(json: ICoverageEligibilityRequestSupportingInfo): CoverageEligibilityRequestSupportingInfo {
    return new CoverageEligibilityRequestSupportingInfo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageEligibilityRequestSupportingInfo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageEligibilityRequestSupportingInfo>): CoverageEligibilityRequestSupportingInfo {
    return new CoverageEligibilityRequestSupportingInfo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageEligibilityRequestSupportingInfo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageEligibilityRequestSupportingInfo) => Partial<ICoverageEligibilityRequestSupportingInfo>): CoverageEligibilityRequestSupportingInfo {
    const currentData = this.toJSON();
    return new CoverageEligibilityRequestSupportingInfo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageEligibilityRequestSupportingInfo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageEligibilityRequestSupportingInfo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_ELIGIBILITY_REQUEST_SUPPORTING_INFO_PROPERTIES);
    return result as ICoverageEligibilityRequestSupportingInfo;
  }

  /**
   * Create a deep clone of this CoverageEligibilityRequestSupportingInfo
   */
  clone(): CoverageEligibilityRequestSupportingInfo {
    return new CoverageEligibilityRequestSupportingInfo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageEligibilityRequestSupportingInfo
   */
  toString(): string {
    const parts: string[] = ['CoverageEligibilityRequestSupportingInfo'];
    return parts.join(', ');
  }
}
