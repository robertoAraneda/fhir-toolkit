import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptTeardownAction } from '../../models/backbones/TestScriptTeardownAction.js';
import type {
  ITestScriptSetupActionOperation,
  ITestScriptTeardownAction,
} from '@fhir-toolkit/r4-types';

/**
 * TestScriptTeardownActionBuilder - Fluent builder for TestScriptTeardownAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptTeardownAction = new TestScriptTeardownActionBuilder()
 *   .setOperation(value)
 *   .build();
 */
export class TestScriptTeardownActionBuilder extends BackboneElementBuilder<TestScriptTeardownAction, ITestScriptTeardownAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set operation
   * The teardown operation to perform
   */
  setOperation(operation: ITestScriptSetupActionOperation): this {
    this.data.operation = operation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptTeardownAction instance
   */
  build(): TestScriptTeardownAction {
    return new TestScriptTeardownAction(this.data);
  }

  /**
   * Build and validate the TestScriptTeardownAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptTeardownAction> {
    const testScriptTeardownAction = this.build();
    await testScriptTeardownAction.validateOrThrow();
    return testScriptTeardownAction;
  }
}
