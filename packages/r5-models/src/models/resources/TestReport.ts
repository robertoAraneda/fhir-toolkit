import { DomainResource } from '../base/DomainResource.js';
import type {
  IElement,
  IIdentifier,
  ITestReport,
  ITestReportParticipant,
  ITestReportSetup,
  ITestReportTeardown,
  ITestReportTest,
  TestReportResultType,
  TestReportStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestReport */
const TEST_REPORT_PROPERTIES = [
  'identifier',
  'name',
  '_name',
  'status',
  '_status',
  'testScript',
  '_testScript',
  'result',
  '_result',
  'score',
  '_score',
  'tester',
  '_tester',
  'issued',
  '_issued',
  'participant',
  'setup',
  'test',
  'teardown',
] as const;

/**
 * TestReport - A summary of information based on the results of executing a TestScript.
 *
 * @see https://hl7.org/fhir/R5/testreport.html
 *
 * @example
 * const testReport = new TestReport({
 *   // ... properties
 * });
 */
export class TestReport extends DomainResource implements ITestReport {
  readonly resourceType = 'TestReport' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier */
  identifier?: IIdentifier;

  /** Informal name of the executed TestReport */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** completed | in-progress | waiting | stopped | entered-in-error */
  status: TestReportStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Canonical URL to the  version-specific TestScript that was executed to produce this TestReport */
  testScript: string;

  /** Extension for testScript */
  _testScript?: IElement;

  /** pass | fail | pending */
  result: TestReportResultType;

  /** Extension for result */
  _result?: IElement;

  /** The final score (percentage of tests passed) resulting from the execution of the TestScript */
  score?: number;

  /** Extension for score */
  _score?: IElement;

  /** Name of the tester producing this report (Organization or individual) */
  tester?: string;

  /** Extension for tester */
  _tester?: IElement;

  /** When the TestScript was executed and this TestReport was generated */
  issued?: string;

  /** Extension for issued */
  _issued?: IElement;

  /** A participant in the test execution, either the execution engine, a client, or a server */
  participant?: ITestReportParticipant[];

  /** The results of the series of required setup operations before the tests were executed */
  setup?: ITestReportSetup;

  /** A test executed from the test script */
  test?: ITestReportTest[];

  /** The results of running the series of required clean up steps */
  teardown?: ITestReportTeardown;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ITestReport>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReport from a JSON object
   */
  static fromJSON(json: ITestReport): TestReport {
    return new TestReport(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReport with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReport>): TestReport {
    return new TestReport({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReport by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReport) => Partial<ITestReport>): TestReport {
    const currentData = this.toJSON();
    return new TestReport({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReport)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReport {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, TEST_REPORT_PROPERTIES);
    return result as ITestReport;
  }

  /**
   * Create a deep clone of this TestReport
   */
  clone(): TestReport {
    return new TestReport(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReport
   */
  toString(): string {
    const parts: string[] = ['TestReport'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
