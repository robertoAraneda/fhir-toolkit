import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * RiskAssessmentPrediction Interface
 * 
 * Outcome predicted
 * 
 *
 * @see https://hl7.org/fhir/R5/riskassessmentprediction.html
 */
export interface IRiskAssessmentPrediction extends IBackboneElement {
  /**
   * Possible outcome for the subject
   */
  outcome?: ICodeableConcept;

  /**
   * Likelihood of specified outcome
   */
  probabilityDecimal?: number;
  /**
   * Extension for probabilityDecimal
   */
  _probabilityDecimal?: IElement;

  /**
   * Likelihood of specified outcome
   */
  probabilityRange?: IRange;

  /**
   * Likelihood of specified outcome as a qualitative value
   */
  qualitativeRisk?: ICodeableConcept;

  /**
   * Relative likelihood
   */
  relativeRisk?: number;
  /**
   * Extension for relativeRisk
   */
  _relativeRisk?: IElement;

  /**
   * Timeframe or age range
   */
  whenPeriod?: IPeriod;

  /**
   * Timeframe or age range
   */
  whenRange?: IRange;

  /**
   * Explanation of prediction
   */
  rationale?: string;
  /**
   * Extension for rationale
   */
  _rationale?: IElement;

}
