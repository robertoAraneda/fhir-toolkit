import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  IClaimSupportingInfo,
  ICodeableConcept,
  IElement,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimSupportingInfo */
const CLAIM_SUPPORTING_INFO_PROPERTIES = [
  'sequence',
  '_sequence',
  'category',
  'code',
  'timingDate',
  '_timingDate',
  'timingPeriod',
  'valueBoolean',
  '_valueBoolean',
  'valueString',
  '_valueString',
  'valueQuantity',
  'valueAttachment',
  'valueReference',
  'reason',
] as const;

/**
 * ClaimSupportingInfo - Supporting information
 *
 * @see https://hl7.org/fhir/R4B/claimsupportinginfo.html
 *
 * @example
 * const claimSupportingInfo = new ClaimSupportingInfo({
 *   // ... properties
 * });
 */
export class ClaimSupportingInfo extends BackboneElement implements IClaimSupportingInfo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Information instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Classification of the supplied information */
  category: ICodeableConcept;

  /** Type of information */
  code?: ICodeableConcept;

  /** When it occurred */
  timingDate?: string;

  /** Extension for timingDate */
  _timingDate?: IElement;

  /** When it occurred */
  timingPeriod?: IPeriod;

  /** Data to be provided */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Data to be provided */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Data to be provided */
  valueQuantity?: IQuantity;

  /** Data to be provided */
  valueAttachment?: IAttachment;

  /** Data to be provided */
  valueReference?: IReference;

  /** Explanation for the information */
  reason?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimSupportingInfo>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_SUPPORTING_INFO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimSupportingInfo from a JSON object
   */
  static fromJSON(json: IClaimSupportingInfo): ClaimSupportingInfo {
    return new ClaimSupportingInfo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimSupportingInfo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimSupportingInfo>): ClaimSupportingInfo {
    return new ClaimSupportingInfo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimSupportingInfo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimSupportingInfo) => Partial<IClaimSupportingInfo>): ClaimSupportingInfo {
    const currentData = this.toJSON();
    return new ClaimSupportingInfo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimSupportingInfo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimSupportingInfo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_SUPPORTING_INFO_PROPERTIES);
    return result as IClaimSupportingInfo;
  }

  /**
   * Create a deep clone of this ClaimSupportingInfo
   */
  clone(): ClaimSupportingInfo {
    return new ClaimSupportingInfo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimSupportingInfo
   */
  toString(): string {
    const parts: string[] = ['ClaimSupportingInfo'];
    return parts.join(', ');
  }
}
