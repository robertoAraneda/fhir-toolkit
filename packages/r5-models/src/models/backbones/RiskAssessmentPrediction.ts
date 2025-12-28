import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IPeriod,
  IRange,
  IRiskAssessmentPrediction,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RiskAssessmentPrediction */
const RISK_ASSESSMENT_PREDICTION_PROPERTIES = [
  'outcome',
  'probabilityDecimal',
  '_probabilityDecimal',
  'probabilityRange',
  'qualitativeRisk',
  'relativeRisk',
  '_relativeRisk',
  'whenPeriod',
  'whenRange',
  'rationale',
  '_rationale',
] as const;

/**
 * RiskAssessmentPrediction - Outcome predicted
 *
 * @see https://hl7.org/fhir/R5/riskassessmentprediction.html
 *
 * @example
 * const riskAssessmentPrediction = new RiskAssessmentPrediction({
 *   // ... properties
 * });
 */
export class RiskAssessmentPrediction extends BackboneElement implements IRiskAssessmentPrediction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Possible outcome for the subject */
  outcome?: ICodeableConcept;

  /** Likelihood of specified outcome */
  probabilityDecimal?: number;

  /** Extension for probabilityDecimal */
  _probabilityDecimal?: IElement;

  /** Likelihood of specified outcome */
  probabilityRange?: IRange;

  /** Likelihood of specified outcome as a qualitative value */
  qualitativeRisk?: ICodeableConcept;

  /** Relative likelihood */
  relativeRisk?: number;

  /** Extension for relativeRisk */
  _relativeRisk?: IElement;

  /** Timeframe or age range */
  whenPeriod?: IPeriod;

  /** Timeframe or age range */
  whenRange?: IRange;

  /** Explanation of prediction */
  rationale?: string;

  /** Extension for rationale */
  _rationale?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRiskAssessmentPrediction>) {
    super(data);
    if (data) {
      this.assignProps(data, RISK_ASSESSMENT_PREDICTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RiskAssessmentPrediction from a JSON object
   */
  static fromJSON(json: IRiskAssessmentPrediction): RiskAssessmentPrediction {
    return new RiskAssessmentPrediction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RiskAssessmentPrediction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRiskAssessmentPrediction>): RiskAssessmentPrediction {
    return new RiskAssessmentPrediction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RiskAssessmentPrediction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRiskAssessmentPrediction) => Partial<IRiskAssessmentPrediction>): RiskAssessmentPrediction {
    const currentData = this.toJSON();
    return new RiskAssessmentPrediction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRiskAssessmentPrediction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRiskAssessmentPrediction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, RISK_ASSESSMENT_PREDICTION_PROPERTIES);
    return result as IRiskAssessmentPrediction;
  }

  /**
   * Create a deep clone of this RiskAssessmentPrediction
   */
  clone(): RiskAssessmentPrediction {
    return new RiskAssessmentPrediction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RiskAssessmentPrediction
   */
  toString(): string {
    const parts: string[] = ['RiskAssessmentPrediction'];
    return parts.join(', ');
  }
}
