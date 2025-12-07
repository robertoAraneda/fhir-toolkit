import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportSetup } from '../../models/backbones/TestReportSetup.js';
import type {
  ITestReportSetup,
  ITestReportSetupAction,
} from '@fhir-toolkit/r4b-types';

/**
 * TestReportSetupBuilder - Fluent builder for TestReportSetup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportSetup = new TestReportSetupBuilder()
 *   .addAction({ ... })
 *   .build();
 */
export class TestReportSetupBuilder extends BackboneElementBuilder<TestReportSetup, ITestReportSetup> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add action
   * A setup operation or assert that was executed
   */
  addAction(action: ITestReportSetupAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportSetup instance
   */
  build(): TestReportSetup {
    return new TestReportSetup(this.data);
  }

  /**
   * Build and validate the TestReportSetup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportSetup> {
    const testReportSetup = this.build();
    await testReportSetup.validateOrThrow();
    return testReportSetup;
  }
}
