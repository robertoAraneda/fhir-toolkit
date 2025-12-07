import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  ICoding,
  IElement,
  IExplanationOfBenefitSupportingInfo,
  IIdentifier,
  IPeriod,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitSupportingInfo */
const EXPLANATION_OF_BENEFIT_SUPPORTING_INFO_PROPERTIES = [
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
  'valueIdentifier',
  'reason',
] as const;

/**
 * ExplanationOfBenefitSupportingInfo - Supporting information
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitsupportinginfo.html
 *
 * @example
 * const explanationOfBenefitSupportingInfo = new ExplanationOfBenefitSupportingInfo({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitSupportingInfo extends BackboneElement implements IExplanationOfBenefitSupportingInfo {

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

  /** Data to be provided */
  valueIdentifier?: IIdentifier;

  /** Explanation for the information */
  reason?: ICoding;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitSupportingInfo>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_SUPPORTING_INFO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitSupportingInfo from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitSupportingInfo): ExplanationOfBenefitSupportingInfo {
    return new ExplanationOfBenefitSupportingInfo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitSupportingInfo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitSupportingInfo>): ExplanationOfBenefitSupportingInfo {
    return new ExplanationOfBenefitSupportingInfo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitSupportingInfo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitSupportingInfo) => Partial<IExplanationOfBenefitSupportingInfo>): ExplanationOfBenefitSupportingInfo {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitSupportingInfo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitSupportingInfo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitSupportingInfo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_SUPPORTING_INFO_PROPERTIES);
    return result as IExplanationOfBenefitSupportingInfo;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitSupportingInfo
   */
  clone(): ExplanationOfBenefitSupportingInfo {
    return new ExplanationOfBenefitSupportingInfo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitSupportingInfo
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitSupportingInfo'];
    return parts.join(', ');
  }
}
