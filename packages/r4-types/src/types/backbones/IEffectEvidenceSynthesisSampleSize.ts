import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * EffectEvidenceSynthesisSampleSize Interface
 * 
 * What sample size was involved?
 * 
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesissamplesize.html
 */
export interface IEffectEvidenceSynthesisSampleSize extends IBackboneElement {
  /**
   * Description of sample size
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * How many studies?
   */
  numberOfStudies?: number;
  /**
   * Extension for numberOfStudies
   */
  _numberOfStudies?: IElement;

  /**
   * How many participants?
   */
  numberOfParticipants?: number;
  /**
   * Extension for numberOfParticipants
   */
  _numberOfParticipants?: IElement;

}
