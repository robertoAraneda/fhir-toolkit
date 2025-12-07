import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
} from '@fhir-toolkit/r4-types';

/** Properties specific to RiskEvidenceSynthesisRiskEstimatePrecisionEstimate */
const RISK_EVIDENCE_SYNTHESIS_RISK_ESTIMATE_PRECISION_ESTIMATE_PROPERTIES = [
  'type',
  'level',
  '_level',
  'from',
  '_from',
  'to',
  '_to',
] as const;

/**
 * RiskEvidenceSynthesisRiskEstimatePrecisionEstimate - How precise the estimate is
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesisriskestimateprecisionestimate.html
 *
 * @example
 * const riskEvidenceSynthesisRiskEstimatePrecisionEstimate = new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate({
 *   // ... properties
 * });
 */
export class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends BackboneElement implements IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of precision estimate */
  type?: ICodeableConcept;

  /** Level of confidence interval */
  level?: number;

  /** Extension for level */
  _level?: IElement;

  /** Lower bound */
  from?: number;

  /** Extension for from */
  _from?: IElement;

  /** Upper bound */
  to?: number;

  /** Extension for to */
  _to?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate>) {
    super(data);
    if (data) {
      this.assignProps(data, RISK_EVIDENCE_SYNTHESIS_RISK_ESTIMATE_PRECISION_ESTIMATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RiskEvidenceSynthesisRiskEstimatePrecisionEstimate from a JSON object
   */
  static fromJSON(json: IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate): RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    return new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate>): RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    return new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate) => Partial<IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate>): RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    const currentData = this.toJSON();
    return new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RISK_EVIDENCE_SYNTHESIS_RISK_ESTIMATE_PRECISION_ESTIMATE_PROPERTIES);
    return result as IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate;
  }

  /**
   * Create a deep clone of this RiskEvidenceSynthesisRiskEstimatePrecisionEstimate
   */
  clone(): RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
    return new RiskEvidenceSynthesisRiskEstimatePrecisionEstimate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RiskEvidenceSynthesisRiskEstimatePrecisionEstimate
   */
  toString(): string {
    const parts: string[] = ['RiskEvidenceSynthesisRiskEstimatePrecisionEstimate'];
    return parts.join(', ');
  }
}
