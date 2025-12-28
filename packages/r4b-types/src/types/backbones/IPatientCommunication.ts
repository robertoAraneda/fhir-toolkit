import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * PatientCommunication Interface
 * 
 * A language which may be used to communicate with the patient about his or her health
 * 
 *
 * @see https://hl7.org/fhir/R4B/patientcommunication.html
 */
export interface IPatientCommunication extends IBackboneElement {
  /**
   * The language which can be used to communicate with the patient about his or her health
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
