import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportTestAction } from '../../models/backbones/TestReportTestAction.js';
import type {
  ITestReportSetupActionAssert,
  ITestReportSetupActionOperation,
  ITestReportTestAction,
} from '@fhir-toolkit/r4b-types';

/**
 * TestReportTestActionBuilder - Fluent builder for TestReportTestAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportTestAction = new TestReportTestActionBuilder()
 *   .setOperation(value)
 *   .build();
 */
export class TestReportTestActionBuilder extends BackboneElementBuilder<TestReportTestAction, ITestReportTestAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set operation
   * The operation performed
   */
  setOperation(operation: ITestReportSetupActionOperation): this {
    this.data.operation = operation;
    return this;
  }

  /**
   * Set assert
   * The assertion performed
   */
  setAssert(assert: ITestReportSetupActionAssert): this {
    this.data.assert = assert;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportTestAction instance
   */
  build(): TestReportTestAction {
    return new TestReportTestAction(this.data);
  }

  /**
   * Build and validate the TestReportTestAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportTestAction> {
    const testReportTestAction = this.build();
    await testReportTestAction.validateOrThrow();
    return testReportTestAction;
  }
}
