import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * PersonCommunication Interface
 * 
 * A language which may be used to communicate with the person about his or her health
 * 
 *
 * @see https://hl7.org/fhir/R5/personcommunication.html
 */
export interface IPersonCommunication extends IBackboneElement {
  /**
   * The language which can be used to communicate with the person about his or her health
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
