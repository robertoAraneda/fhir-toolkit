import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdverseEventSupportingInfo,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdverseEventSupportingInfo */
const ADVERSE_EVENT_SUPPORTING_INFO_PROPERTIES = [
  'itemReference',
  'itemCodeableConcept',
] as const;

/**
 * AdverseEventSupportingInfo - Supporting information relevant to the event
 *
 * @see https://hl7.org/fhir/R5/adverseeventsupportinginfo.html
 *
 * @example
 * const adverseEventSupportingInfo = new AdverseEventSupportingInfo({
 *   // ... properties
 * });
 */
export class AdverseEventSupportingInfo extends BackboneElement implements IAdverseEventSupportingInfo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Subject medical history or document relevant to this adverse event */
  itemReference?: IReference;

  /** Subject medical history or document relevant to this adverse event */
  itemCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdverseEventSupportingInfo>) {
    super(data);
    if (data) {
      this.assignProps(data, ADVERSE_EVENT_SUPPORTING_INFO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdverseEventSupportingInfo from a JSON object
   */
  static fromJSON(json: IAdverseEventSupportingInfo): AdverseEventSupportingInfo {
    return new AdverseEventSupportingInfo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdverseEventSupportingInfo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdverseEventSupportingInfo>): AdverseEventSupportingInfo {
    return new AdverseEventSupportingInfo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdverseEventSupportingInfo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdverseEventSupportingInfo) => Partial<IAdverseEventSupportingInfo>): AdverseEventSupportingInfo {
    const currentData = this.toJSON();
    return new AdverseEventSupportingInfo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdverseEventSupportingInfo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdverseEventSupportingInfo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADVERSE_EVENT_SUPPORTING_INFO_PROPERTIES);
    return result as IAdverseEventSupportingInfo;
  }

  /**
   * Create a deep clone of this AdverseEventSupportingInfo
   */
  clone(): AdverseEventSupportingInfo {
    return new AdverseEventSupportingInfo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdverseEventSupportingInfo
   */
  toString(): string {
    const parts: string[] = ['AdverseEventSupportingInfo'];
    return parts.join(', ');
  }
}
