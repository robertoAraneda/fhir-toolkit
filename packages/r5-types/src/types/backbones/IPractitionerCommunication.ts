import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * PractitionerCommunication Interface
 * 
 * A language which may be used to communicate with the practitioner
 * 
 *
 * @see https://hl7.org/fhir/R5/practitionercommunication.html
 */
export interface IPractitionerCommunication extends IBackboneElement {
  /**
   * The language code used to communicate with the practitioner
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
