import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IEvidenceStatisticAttributeEstimate,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to EvidenceStatisticAttributeEstimate */
const EVIDENCE_STATISTIC_ATTRIBUTE_ESTIMATE_PROPERTIES = [
  'description',
  '_description',
  'note',
  'type',
  'quantity',
  'level',
  '_level',
  'range',
  'attributeEstimate',
] as const;

/**
 * EvidenceStatisticAttributeEstimate - An attribute of the Statistic
 *
 * @see https://hl7.org/fhir/R5/evidencestatisticattributeestimate.html
 *
 * @example
 * const evidenceStatisticAttributeEstimate = new EvidenceStatisticAttributeEstimate({
 *   // ... properties
 * });
 */
export class EvidenceStatisticAttributeEstimate extends BackboneElement implements IEvidenceStatisticAttributeEstimate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Textual description of the attribute estimate */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Footnote or explanatory note about the estimate */
  note?: IAnnotation[];

  /** The type of attribute estimate, e.g., confidence interval or p value */
  type?: ICodeableConcept;

  /** The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure */
  quantity?: IQuantity;

  /** Level of confidence interval, e.g., 0.95 for 95% confidence interval */
  level?: number;

  /** Extension for level */
  _level?: IElement;

  /** Lower and upper bound values of the attribute estimate */
  range?: IRange;

  /** A nested attribute estimate; which is the attribute estimate of an attribute estimate */
  attributeEstimate?: IEvidenceStatisticAttributeEstimate[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceStatisticAttributeEstimate>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_STATISTIC_ATTRIBUTE_ESTIMATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceStatisticAttributeEstimate from a JSON object
   */
  static fromJSON(json: IEvidenceStatisticAttributeEstimate): EvidenceStatisticAttributeEstimate {
    return new EvidenceStatisticAttributeEstimate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceStatisticAttributeEstimate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceStatisticAttributeEstimate>): EvidenceStatisticAttributeEstimate {
    return new EvidenceStatisticAttributeEstimate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceStatisticAttributeEstimate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceStatisticAttributeEstimate) => Partial<IEvidenceStatisticAttributeEstimate>): EvidenceStatisticAttributeEstimate {
    const currentData = this.toJSON();
    return new EvidenceStatisticAttributeEstimate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceStatisticAttributeEstimate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceStatisticAttributeEstimate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_STATISTIC_ATTRIBUTE_ESTIMATE_PROPERTIES);
    return result as IEvidenceStatisticAttributeEstimate;
  }

  /**
   * Create a deep clone of this EvidenceStatisticAttributeEstimate
   */
  clone(): EvidenceStatisticAttributeEstimate {
    return new EvidenceStatisticAttributeEstimate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceStatisticAttributeEstimate
   */
  toString(): string {
    const parts: string[] = ['EvidenceStatisticAttributeEstimate'];
    return parts.join(', ');
  }
}
