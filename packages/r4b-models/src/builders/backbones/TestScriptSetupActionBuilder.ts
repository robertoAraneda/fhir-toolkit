import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptSetupAction } from '../../models/backbones/TestScriptSetupAction.js';
import type {
  ITestScriptSetupAction,
  ITestScriptSetupActionAssert,
  ITestScriptSetupActionOperation,
} from '@fhir-toolkit/r4b-types';

/**
 * TestScriptSetupActionBuilder - Fluent builder for TestScriptSetupAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptSetupAction = new TestScriptSetupActionBuilder()
 *   .setOperation(value)
 *   .build();
 */
export class TestScriptSetupActionBuilder extends BackboneElementBuilder<TestScriptSetupAction, ITestScriptSetupAction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set operation
   * The setup operation to perform
   */
  setOperation(operation: ITestScriptSetupActionOperation): this {
    this.data.operation = operation;
    return this;
  }

  /**
   * Set assert
   * The assertion to perform
   */
  setAssert(assert: ITestScriptSetupActionAssert): this {
    this.data.assert = assert;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptSetupAction instance
   */
  build(): TestScriptSetupAction {
    return new TestScriptSetupAction(this.data);
  }

  /**
   * Build and validate the TestScriptSetupAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptSetupAction> {
    const testScriptSetupAction = this.build();
    await testScriptSetupAction.validateOrThrow();
    return testScriptSetupAction;
  }
}
