import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate } from './IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate.js';

/**
 * EffectEvidenceSynthesisEffectEstimate Interface
 * 
 * What was the estimated effect
 * 
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesiseffectestimate.html
 */
export interface IEffectEvidenceSynthesisEffectEstimate extends IBackboneElement {
  /**
   * Description of effect estimate
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Type of efffect estimate
   */
  type?: ICodeableConcept;

  /**
   * Variant exposure states
   */
  variantState?: ICodeableConcept;

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
   * How precise the estimate is
   */
  precisionEstimate?: IEffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];

}
