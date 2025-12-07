import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptTeardown } from '../../models/backbones/TestScriptTeardown.js';
import type {
  ITestScriptTeardown,
  ITestScriptTeardownAction,
} from '@fhir-toolkit/r4b-types';

/**
 * TestScriptTeardownBuilder - Fluent builder for TestScriptTeardown backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptTeardown = new TestScriptTeardownBuilder()
 *   .addAction({ ... })
 *   .build();
 */
export class TestScriptTeardownBuilder extends BackboneElementBuilder<TestScriptTeardown, ITestScriptTeardown> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add action
   * One or more teardown operations to perform
   */
  addAction(action: ITestScriptTeardownAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptTeardown instance
   */
  build(): TestScriptTeardown {
    return new TestScriptTeardown(this.data);
  }

  /**
   * Build and validate the TestScriptTeardown instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptTeardown> {
    const testScriptTeardown = this.build();
    await testScriptTeardown.validateOrThrow();
    return testScriptTeardown;
  }
}
