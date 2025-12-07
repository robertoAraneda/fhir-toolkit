import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptSetup } from '../../models/backbones/TestScriptSetup.js';
import type {
  ITestScriptSetup,
  ITestScriptSetupAction,
} from '@fhir-toolkit/r4-types';

/**
 * TestScriptSetupBuilder - Fluent builder for TestScriptSetup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptSetup = new TestScriptSetupBuilder()
 *   .addAction({ ... })
 *   .build();
 */
export class TestScriptSetupBuilder extends BackboneElementBuilder<TestScriptSetup, ITestScriptSetup> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add action
   * A setup operation or assert to perform
   */
  addAction(action: ITestScriptSetupAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptSetup instance
   */
  build(): TestScriptSetup {
    return new TestScriptSetup(this.data);
  }

  /**
   * Build and validate the TestScriptSetup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptSetup> {
    const testScriptSetup = this.build();
    await testScriptSetup.validateOrThrow();
    return testScriptSetup;
  }
}
