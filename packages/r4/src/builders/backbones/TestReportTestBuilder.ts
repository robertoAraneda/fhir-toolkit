import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportTest } from '../../models/backbones/TestReportTest.js';
import type {
  ITestReportTest,
  ITestReportTestAction,
} from '@fhir-toolkit/r4-types';

/**
 * TestReportTestBuilder - Fluent builder for TestReportTest backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportTest = new TestReportTestBuilder()
 *   .setName(value)
 *   .addAction({ ... })
 *   .build();
 */
export class TestReportTestBuilder extends BackboneElementBuilder<TestReportTest, ITestReportTest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Tracking/logging name of this test
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Tracking/reporting short description of the test
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add action
   * A test operation or assert that was performed
   */
  addAction(action: ITestReportTestAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportTest instance
   */
  build(): TestReportTest {
    return new TestReportTest(this.data);
  }

  /**
   * Build and validate the TestReportTest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportTest> {
    const testReportTest = this.build();
    await testReportTest.validateOrThrow();
    return testReportTest;
  }
}
