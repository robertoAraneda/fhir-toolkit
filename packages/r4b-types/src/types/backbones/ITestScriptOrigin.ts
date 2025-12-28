import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * TestScriptOrigin Interface
 * 
 * An abstract server representing a client or sender in a message exchange
 * 
 *
 * @see https://hl7.org/fhir/R4B/testscriptorigin.html
 */
export interface ITestScriptOrigin extends IBackboneElement {
  /**
   * The index of the abstract origin server starting at 1
   */
  index: number;
  /**
   * Extension for index
   */
  _index?: IElement;

  /**
   * FHIR-Client | FHIR-SDC-FormFiller
   */
  profile: ICoding;

}
