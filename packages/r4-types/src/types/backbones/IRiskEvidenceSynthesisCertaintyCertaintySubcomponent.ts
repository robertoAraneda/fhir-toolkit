import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';

/**
 * RiskEvidenceSynthesisCertaintyCertaintySubcomponent Interface
 * 
 * A component that contributes to the overall certainty
 * 
 *
 * @see https://hl7.org/fhir/R4/riskevidencesynthesiscertaintycertaintysubcomponent.html
 */
export interface IRiskEvidenceSynthesisCertaintyCertaintySubcomponent extends IBackboneElement {
  /**
   * Type of subcomponent of certainty rating
   */
  type?: ICodeableConcept;

  /**
   * Subcomponent certainty rating
   */
  rating?: ICodeableConcept[];

  /**
   * Used for footnotes or explanatory notes
   */
  note?: IAnnotation[];

}
