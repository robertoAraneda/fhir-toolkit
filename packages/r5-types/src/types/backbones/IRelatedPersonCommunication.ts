import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * RelatedPersonCommunication Interface
 * 
 * A language which may be used to communicate with the related person about the patient's health
 * 
 *
 * @see https://hl7.org/fhir/R5/relatedpersoncommunication.html
 */
export interface IRelatedPersonCommunication extends IBackboneElement {
  /**
   * The language which can be used to communicate with the related person about the patient's health
   */
  language: ICodeableConcept;

  /**
   * Language preference indicator
   */
  preferred?: boolean;
  /**
   * Extension for preferred
   */
  _preferred?: IElement;

}
