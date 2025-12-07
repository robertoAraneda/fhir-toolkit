import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestReportSetupActionOperation } from '../../models/backbones/TestReportSetupActionOperation.js';
import type {
  ITestReportSetupActionOperation,
  TestReportActionResultType,
} from '@fhir-toolkit/r5-types';

/**
 * TestReportSetupActionOperationBuilder - Fluent builder for TestReportSetupActionOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testReportSetupActionOperation = new TestReportSetupActionOperationBuilder()
 *   .setResult(value)
 *   .build();
 */
export class TestReportSetupActionOperationBuilder extends BackboneElementBuilder<TestReportSetupActionOperation, ITestReportSetupActionOperation> {
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
   * Build the TestReportSetupActionOperation instance
   */
  build(): TestReportSetupActionOperation {
    return new TestReportSetupActionOperation(this.data);
  }

  /**
   * Build and validate the TestReportSetupActionOperation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestReportSetupActionOperation> {
    const testReportSetupActionOperation = this.build();
    await testReportSetupActionOperation.validateOrThrow();
    return testReportSetupActionOperation;
  }
}
