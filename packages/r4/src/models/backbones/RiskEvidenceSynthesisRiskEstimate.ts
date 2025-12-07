import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IRiskEvidenceSynthesisRiskEstimate,
  IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
} from '@fhir-toolkit/r4-types';

/** Properties specific to RiskEvidenceSynthesisRiskEstimate */
const RISK_EVIDENCE_SYNTHESIS_RISK_ESTIMATE_PROPERTIES = [
  'description',
  '_description',
  'type',
  'value',
  '_value',
  'unitOfMeasure',
  'denominatorCount',
  '_denominatorCount',
  'numeratorCount',
  '_numeratorCount',
  'precisionEstimate',
] as const;

/**
 * RiskEvidenceSynthesisRiskEstimate - What was the estimated risk
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesisriskestimate.html
 *
 * @example
 * const riskEvidenceSynthesisRiskEstimate = new RiskEvidenceSynthesisRiskEstimate({
 *   // ... properties
 * });
 */
export class RiskEvidenceSynthesisRiskEstimate extends BackboneElement implements IRiskEvidenceSynthesisRiskEstimate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of risk estimate */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Type of risk estimate */
  type?: ICodeableConcept;

  /** Point estimate */
  value?: number;

  /** Extension for value */
  _value?: IElement;

  /** What unit is the outcome described in? */
  unitOfMeasure?: ICodeableConcept;

  /** Sample size for group measured */
  denominatorCount?: number;

  /** Extension for denominatorCount */
  _denominatorCount?: IElement;

  /** Number with the outcome */
  numeratorCount?: number;

  /** Extension for numeratorCount */
  _numeratorCount?: IElement;

  /** How precise the estimate is */
  precisionEstimate?: IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRiskEvidenceSynthesisRiskEstimate>) {
    super(data);
    if (data) {
      this.assignProps(data, RISK_EVIDENCE_SYNTHESIS_RISK_ESTIMATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RiskEvidenceSynthesisRiskEstimate from a JSON object
   */
  static fromJSON(json: IRiskEvidenceSynthesisRiskEstimate): RiskEvidenceSynthesisRiskEstimate {
    return new RiskEvidenceSynthesisRiskEstimate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RiskEvidenceSynthesisRiskEstimate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRiskEvidenceSynthesisRiskEstimate>): RiskEvidenceSynthesisRiskEstimate {
    return new RiskEvidenceSynthesisRiskEstimate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RiskEvidenceSynthesisRiskEstimate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRiskEvidenceSynthesisRiskEstimate) => Partial<IRiskEvidenceSynthesisRiskEstimate>): RiskEvidenceSynthesisRiskEstimate {
    const currentData = this.toJSON();
    return new RiskEvidenceSynthesisRiskEstimate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRiskEvidenceSynthesisRiskEstimate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRiskEvidenceSynthesisRiskEstimate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RISK_EVIDENCE_SYNTHESIS_RISK_ESTIMATE_PROPERTIES);
    return result as IRiskEvidenceSynthesisRiskEstimate;
  }

  /**
   * Create a deep clone of this RiskEvidenceSynthesisRiskEstimate
   */
  clone(): RiskEvidenceSynthesisRiskEstimate {
    return new RiskEvidenceSynthesisRiskEstimate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RiskEvidenceSynthesisRiskEstimate
   */
  toString(): string {
    const parts: string[] = ['RiskEvidenceSynthesisRiskEstimate'];
    return parts.join(', ');
  }
}
