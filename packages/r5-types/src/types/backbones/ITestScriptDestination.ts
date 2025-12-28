import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * TestScriptDestination Interface
 * 
 * An abstract server representing a destination or receiver in a message exchange
 * 
 *
 * @see https://hl7.org/fhir/R5/testscriptdestination.html
 */
export interface ITestScriptDestination extends IBackboneElement {
  /**
   * The index of the abstract destination server starting at 1
   */
  index: number;
  /**
   * Extension for index
   */
  _index?: IElement;

  /**
   * FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor
   */
  profile: ICoding;

  /**
   * The url path of the destination server
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

}
