import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportTeardown } from '../../models/backbones/TestReportTeardown.js';
import type {
  ITestReportTeardown,
  ITestReportTeardownAction,
} from '@fhir-toolkit/r5-types';

/**
 * TestReportTeardownBuilder - Fluent builder for TestReportTeardown backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportTeardown = new TestReportTeardownBuilder()
 *   .addAction({ ... })
 *   .build();
 */
export class TestReportTeardownBuilder extends BackboneElementBuilder<TestReportTeardown, ITestReportTeardown> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add action
   * One or more teardown operations performed
   */
  addAction(action: ITestReportTeardownAction): this {
    return this.addToArray('action', action);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportTeardown instance
   */
  build(): TestReportTeardown {
    return new TestReportTeardown(this.data);
  }

  /**
   * Build and validate the TestReportTeardown instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportTeardown> {
    const testReportTeardown = this.build();
    await testReportTeardown.validateOrThrow();
    return testReportTeardown;
  }
}
