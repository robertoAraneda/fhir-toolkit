import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportSetupActionAssert } from '../../models/backbones/TestReportSetupActionAssert.js';
import type {
  ITestReportSetupActionAssert,
  TestReportActionResultType,
} from '@fhir-toolkit/r4b-types';

/**
 * TestReportSetupActionAssertBuilder - Fluent builder for TestReportSetupActionAssert backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportSetupActionAssert = new TestReportSetupActionAssertBuilder()
 *   .setResult(value)
 *   .build();
 */
export class TestReportSetupActionAssertBuilder extends BackboneElementBuilder<TestReportSetupActionAssert, ITestReportSetupActionAssert> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set result
   * pass | skip | fail | warning | error
   */
  setResult(result: TestReportActionResultType): this {
    this.data.result = result;
    return this;
  }

  /**
   * Set message
   * A message associated with the result
   */
  setMessage(message: string): this {
    this.data.message = message;
    return this;
  }

  /**
   * Set detail
   * A link to further details on the result
   */
  setDetail(detail: string): this {
    this.data.detail = detail;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestReportSetupActionAssert instance
   */
  build(): TestReportSetupActionAssert {
    return new TestReportSetupActionAssert(this.data);
  }

  /**
   * Build and validate the TestReportSetupActionAssert instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportSetupActionAssert> {
    const testReportSetupActionAssert = this.build();
    await testReportSetupActionAssert.validateOrThrow();
    return testReportSetupActionAssert;
  }
}
