import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IEffectEvidenceSynthesisCertaintyCertaintySubcomponent } from './IEffectEvidenceSynthesisCertaintyCertaintySubcomponent.js';

/**
 * EffectEvidenceSynthesisCertainty Interface
 * 
 * How certain is the effect
 * 
 *
 * @see https://hl7.org/fhir/R4/effectevidencesynthesiscertainty.html
 */
export interface IEffectEvidenceSynthesisCertainty extends IBackboneElement {
  /**
   * Certainty rating
   */
  rating?: ICodeableConcept[];

  /**
   * Used for footnotes or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * A component that contributes to the overall certainty
   */
  certaintySubcomponent?: IEffectEvidenceSynthesisCertaintyCertaintySubcomponent[];

}
