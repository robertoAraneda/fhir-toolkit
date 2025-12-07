import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IRiskEvidenceSynthesisCertaintyCertaintySubcomponent } from './IRiskEvidenceSynthesisCertaintyCertaintySubcomponent.js';

/**
 * RiskEvidenceSynthesisCertainty Interface
 * 
 * How certain is the risk
 * 
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesiscertainty.html
 */
export interface IRiskEvidenceSynthesisCertainty extends IBackboneElement {
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
  certaintySubcomponent?: IRiskEvidenceSynthesisCertaintyCertaintySubcomponent[];

}
