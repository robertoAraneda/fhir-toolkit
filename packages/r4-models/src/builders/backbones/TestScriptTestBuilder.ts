import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptTest } from '../../models/backbones/TestScriptTest.js';
import type {
  ITestScriptTest,
  ITestScriptTestAction,
} from '@fhir-toolkit/r4-types';

/**
 * TestScriptTestBuilder - Fluent builder for TestScriptTest backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptTest = new TestScriptTestBuilder()
 *   .setName(value)
 *   .addAction({ ... })
 *   .build();
 */
export class TestScriptTestBuilder extends BackboneElementBuilder<TestScriptTest, ITestScriptTest> {
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
   * A test operation or assert to perform
   */
  addAction(action: ITestScriptTestAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptTest instance
   */
  build(): TestScriptTest {
    return new TestScriptTest(this.data);
  }

  /**
   * Build and validate the TestScriptTest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptTest> {
    const testScriptTest = this.build();
    await testScriptTest.validateOrThrow();
    return testScriptTest;
  }
}
