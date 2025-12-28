import type { IDomainResource, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ITestReportParticipant } from '../backbones/ITestReportParticipant.js';
import type { ITestReportSetup } from '../backbones/ITestReportSetup.js';
import type { ITestReportTeardown } from '../backbones/ITestReportTeardown.js';
import type { ITestReportTest } from '../backbones/ITestReportTest.js';
import type { TestReportResultType, TestReportStatusType } from '../../valuesets/index.js';

/**
 * TestReport Interface
 * 
 * A summary of information based on the results of executing a TestScript.
 * 
 *
 * @see https://hl7.org/fhir/R5/testreport.html
 */
export interface ITestReport extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'TestReport';

  /**
   * External identifier
   */
  identifier?: IIdentifier;

  /**
   * Informal name of the executed TestReport
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * completed | in-progress | waiting | stopped | entered-in-error
   */
  status: TestReportStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Canonical URL to the  version-specific TestScript that was executed to produce this TestReport
   */
  testScript: string;
  /**
   * Extension for testScript
   */
  _testScript?: IElement;

  /**
   * pass | fail | pending
   */
  result: TestReportResultType;
  /**
   * Extension for result
   */
  _result?: IElement;

  /**
   * The final score (percentage of tests passed) resulting from the execution of the TestScript
   */
  score?: number;
  /**
   * Extension for score
   */
  _score?: IElement;

  /**
   * Name of the tester producing this report (Organization or individual)
   */
  tester?: string;
  /**
   * Extension for tester
   */
  _tester?: IElement;

  /**
   * When the TestScript was executed and this TestReport was generated
   */
  issued?: string;
  /**
   * Extension for issued
   */
  _issued?: IElement;

  /**
   * A participant in the test execution, either the execution engine, a client, or a server
   */
  participant?: ITestReportParticipant[];

  /**
   * The results of the series of required setup operations before the tests were executed
   */
  setup?: ITestReportSetup;

  /**
   * A test executed from the test script
   */
  test?: ITestReportTest[];

  /**
   * The results of running the series of required clean up steps
   */
  teardown?: ITestReportTeardown;

}
