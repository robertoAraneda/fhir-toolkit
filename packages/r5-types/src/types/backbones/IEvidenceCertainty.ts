import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';

/**
 * EvidenceCertainty Interface
 * 
 * Certainty or quality of the evidence
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencecertainty.html
 */
export interface IEvidenceCertainty extends IBackboneElement {
  /**
   * Textual description of certainty
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Footnotes and/or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * Aspect of certainty being rated
   */
  type?: ICodeableConcept;

  /**
   * Assessment or judgement of the aspect
   */
  rating?: ICodeableConcept;

  /**
   * Individual or group who did the rating
   */
  rater?: string;
  /**
   * Extension for rater
   */
  _rater?: IElement;

  /**
   * A domain or subdomain of certainty
   */
  subcomponent?: IEvidenceCertainty[];

}
