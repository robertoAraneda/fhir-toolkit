import type { IBackboneElement, IElement } from '../../base/index.js';
import type { TestReportParticipantTypeType } from '../../valuesets/index.js';

/**
 * TestReportParticipant Interface
 * 
 * A participant in the test execution, either the execution engine, a client, or a server
 * 
 *
 * @see https://hl7.org/fhir/R4/testreportparticipant.html
 */
export interface ITestReportParticipant extends IBackboneElement {
  /**
   * test-engine | client | server
   */
  type: TestReportParticipantTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The uri of the participant. An absolute URL is preferred
   */
  uri: string;
  /**
   * Extension for uri
   */
  _uri?: IElement;

  /**
   * The display name of the participant
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

}
