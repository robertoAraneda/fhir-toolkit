import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestPlanTestCaseTestRun } from '../../models/backbones/TestPlanTestCaseTestRun.js';
import type {
  ITestPlanTestCaseTestRun,
  ITestPlanTestCaseTestRunScript,
} from '@fhir-toolkit/r5-types';

/**
 * TestPlanTestCaseTestRunBuilder - Fluent builder for TestPlanTestCaseTestRun backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testPlanTestCaseTestRun = new TestPlanTestCaseTestRunBuilder()
 *   .setNarrative(value)
 *   .build();
 */
export class TestPlanTestCaseTestRunBuilder extends BackboneElementBuilder<TestPlanTestCaseTestRun, ITestPlanTestCaseTestRun> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set narrative
   * The narrative description of the tests
   */
  setNarrative(narrative: string): this {
    this.data.narrative = narrative;
    return this;
  }

  /**
   * Set script
   * The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript
   */
  setScript(script: ITestPlanTestCaseTestRunScript): this {
    this.data.script = script;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestPlanTestCaseTestRun instance
   */
  build(): TestPlanTestCaseTestRun {
    return new TestPlanTestCaseTestRun(this.data);
  }

  /**
   * Build and validate the TestPlanTestCaseTestRun instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestPlanTestCaseTestRun> {
    const testPlanTestCaseTestRun = this.build();
    await testPlanTestCaseTestRun.validateOrThrow();
    return testPlanTestCaseTestRun;
  }
}
