import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate } from './IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate.js';

/**
 * RiskEvidenceSynthesisRiskEstimate Interface
 * 
 * What was the estimated risk
 * 
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesisriskestimate.html
 */
export interface IRiskEvidenceSynthesisRiskEstimate extends IBackboneElement {
  /**
   * Description of risk estimate
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Type of risk estimate
   */
  type?: ICodeableConcept;

  /**
   * Point estimate
   */
  value?: number;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * What unit is the outcome described in?
   */
  unitOfMeasure?: ICodeableConcept;

  /**
   * Sample size for group measured
   */
  denominatorCount?: number;
  /**
   * Extension for denominatorCount
   */
  _denominatorCount?: IElement;

  /**
   * Number with the outcome
   */
  numeratorCount?: number;
  /**
   * Extension for numeratorCount
   */
  _numeratorCount?: IElement;

  /**
   * How precise the estimate is
   */
  precisionEstimate?: IRiskEvidenceSynthesisRiskEstimatePrecisionEstimate[];

}
