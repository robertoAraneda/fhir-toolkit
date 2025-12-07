import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptTestAction } from '../../models/backbones/TestScriptTestAction.js';
import type {
  ITestScriptSetupActionAssert,
  ITestScriptSetupActionOperation,
  ITestScriptTestAction,
} from '@fhir-toolkit/r4-types';

/**
 * TestScriptTestActionBuilder - Fluent builder for TestScriptTestAction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptTestAction = new TestScriptTestActionBuilder()
 *   .setOperation(value)
 *   .build();
 */
export class TestScriptTestActionBuilder extends BackboneElementBuilder<TestScriptTestAction, ITestScriptTestAction> {
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
   * The setup assertion to perform
   */
  setAssert(assert: ITestScriptSetupActionAssert): this {
    this.data.assert = assert;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptTestAction instance
   */
  build(): TestScriptTestAction {
    return new TestScriptTestAction(this.data);
  }

  /**
   * Build and validate the TestScriptTestAction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptTestAction> {
    const testScriptTestAction = this.build();
    await testScriptTestAction.validateOrThrow();
    return testScriptTestAction;
  }
}
