import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestPlanTestCase } from '../../models/backbones/TestPlanTestCase.js';
import type {
  IReference,
  ITestPlanTestCase,
  ITestPlanTestCaseAssertion,
  ITestPlanTestCaseDependency,
  ITestPlanTestCaseTestData,
  ITestPlanTestCaseTestRun,
} from '@fhir-toolkit/r5-types';

/**
 * TestPlanTestCaseBuilder - Fluent builder for TestPlanTestCase backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testPlanTestCase = new TestPlanTestCaseBuilder()
 *   .setSequence(value)
 *   .addScope({ ... })
 *   .build();
 */
export class TestPlanTestCaseBuilder extends BackboneElementBuilder<TestPlanTestCase, ITestPlanTestCase> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Sequence of test case in the test plan
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add scope
   * The scope or artifact covered by the case
   */
  addScope(scope: IReference): this {
    return this.addToArray('scope', scope);
  }

  /**
   * Add dependency
   * Required criteria to execute the test case
   */
  addDependency(dependency: ITestPlanTestCaseDependency): this {
    return this.addToArray('dependency', dependency);
  }

  /**
   * Add testRun
   * The actual test to be executed
   */
  addTestRun(testRun: ITestPlanTestCaseTestRun): this {
    return this.addToArray('testRun', testRun);
  }

  /**
   * Add testData
   * The test data used in the test case
   */
  addTestData(testData: ITestPlanTestCaseTestData): this {
    return this.addToArray('testData', testData);
  }

  /**
   * Add assertion
   * Test assertions or expectations
   */
  addAssertion(assertion: ITestPlanTestCaseAssertion): this {
    return this.addToArray('assertion', assertion);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestPlanTestCase instance
   */
  build(): TestPlanTestCase {
    return new TestPlanTestCase(this.data);
  }

  /**
   * Build and validate the TestPlanTestCase instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestPlanTestCase> {
    const testPlanTestCase = this.build();
    await testPlanTestCase.validateOrThrow();
    return testPlanTestCase;
  }
}
