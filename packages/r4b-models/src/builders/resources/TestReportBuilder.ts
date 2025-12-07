import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { TestReport } from '../../models/resources/TestReport.js';
import type {
  IIdentifier,
  IReference,
  ITestReport,
  ITestReportParticipant,
  ITestReportSetup,
  ITestReportTeardown,
  ITestReportTest,
  TestReportResultType,
  TestReportStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * TestReportBuilder - Fluent builder for TestReport resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReport = new TestReportBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addParticipant({ ... })
 *   .build();
 */
export class TestReportBuilder extends DomainResourceBuilder<TestReport, ITestReport> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * External identifier
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set name
   * Informal name of the executed TestScript
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set status
   * completed | in-progress | waiting | stopped | entered-in-error
   */
  setStatus(status: TestReportStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set testScript
   * Reference to the  version-specific TestScript that was executed to produce this TestReport
   */
  setTestScript(testScript: IReference<'TestScript'>): this {
    this.data.testScript = testScript;
    return this;
  }

  /**
   * Set result
   * pass | fail | pending
   */
  setResult(result: TestReportResultType): this {
    this.data.result = result;
    return this;
  }

  /**
   * Set score
   * The final score (percentage of tests passed) resulting from the execution of the TestScript
   */
  setScore(score: number): this {
    this.data.score = score;
    return this;
  }

  /**
   * Set tester
   * Name of the tester producing this report (Organization or individual)
   */
  setTester(tester: string): this {
    this.data.tester = tester;
    return this;
  }

  /**
   * Set issued
   * When the TestScript was executed and this TestReport was generated
   */
  setIssued(issued: string): this {
    this.data.issued = issued;
    return this;
  }

  /**
   * Set setup
   * The results of the series of required setup operations before the tests were executed
   */
  setSetup(setup: ITestReportSetup): this {
    this.data.setup = setup;
    return this;
  }

  /**
   * Set teardown
   * The results of running the series of required clean up steps
   */
  setTeardown(teardown: ITestReportTeardown): this {
    this.data.teardown = teardown;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add participant
   * A participant in the test execution, either the execution engine, a client, or a server
   */
  addParticipant(participant: ITestReportParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add test
   * A test executed from the test script
   */
  addTest(test: ITestReportTest): this {
    return this.addToArray('test', test);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReport instance
   */
  build(): TestReport {
    return new TestReport(this.data);
  }

  /**
   * Build and validate the TestReport instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReport> {
    const testReport = this.build();
    await testReport.validateOrThrow();
    return testReport;
  }
}
