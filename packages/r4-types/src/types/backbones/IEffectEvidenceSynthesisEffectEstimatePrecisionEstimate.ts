import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * EffectEvidenceSynthesisEffectEstimatePrecisionEstimate Interface
 * 
 * How precise the estimate is
 * 
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesiseffectestimateprecisionestimate.html
 */
export interface IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends IBackboneElement {
  /**
   * Type of precision estimate
   */
  type?: ICodeableConcept;

  /**
   * Level of confidence interval
   */
  level?: number;
  /**
   * Extension for level
   */
  _level?: IElement;

  /**
   * Lower bound
   */
  from?: number;
  /**
   * Extension for from
   */
  _from?: IElement;

  /**
   * Upper bound
   */
  to?: number;
  /**
   * Extension for to
   */
  _to?: IElement;

}
