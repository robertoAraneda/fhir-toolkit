import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportTeardownAction } from '../../models/backbones/TestReportTeardownAction.js';
import type {
  ITestReportSetupActionOperation,
  ITestReportTeardownAction,
} from '@fhir-toolkit/r4b-types';

/**
 * TestReportTeardownActionBuilder - Fluent builder for TestReportTeardownAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportTeardownAction = new TestReportTeardownActionBuilder()
 *   .setOperation(value)
 *   .build();
 */
export class TestReportTeardownActionBuilder extends BackboneElementBuilder<TestReportTeardownAction, ITestReportTeardownAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set operation
   * The teardown operation performed
   */
  setOperation(operation: ITestReportSetupActionOperation): this {
    this.data.operation = operation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportTeardownAction instance
   */
  build(): TestReportTeardownAction {
    return new TestReportTeardownAction(this.data);
  }

  /**
   * Build and validate the TestReportTeardownAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportTeardownAction> {
    const testReportTeardownAction = this.build();
    await testReportTeardownAction.validateOrThrow();
    return testReportTeardownAction;
  }
}
