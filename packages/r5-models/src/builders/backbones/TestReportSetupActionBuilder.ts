import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportSetupAction } from '../../models/backbones/TestReportSetupAction.js';
import type {
  ITestReportSetupAction,
  ITestReportSetupActionAssert,
  ITestReportSetupActionOperation,
} from '@fhir-toolkit/r5-types';

/**
 * TestReportSetupActionBuilder - Fluent builder for TestReportSetupAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportSetupAction = new TestReportSetupActionBuilder()
 *   .setOperation(value)
 *   .build();
 */
export class TestReportSetupActionBuilder extends BackboneElementBuilder<TestReportSetupAction, ITestReportSetupAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set operation
   * The operation to perform
   */
  setOperation(operation: ITestReportSetupActionOperation): this {
    this.data.operation = operation;
    return this;
  }

  /**
   * Set assert
   * The assertion to perform
   */
  setAssert(assert: ITestReportSetupActionAssert): this {
    this.data.assert = assert;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportSetupAction instance
   */
  build(): TestReportSetupAction {
    return new TestReportSetupAction(this.data);
  }

  /**
   * Build and validate the TestReportSetupAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportSetupAction> {
    const testReportSetupAction = this.build();
    await testReportSetupAction.validateOrThrow();
    return testReportSetupAction;
  }
}
