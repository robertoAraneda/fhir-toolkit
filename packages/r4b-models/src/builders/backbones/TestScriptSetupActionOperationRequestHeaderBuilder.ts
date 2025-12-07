import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptSetupActionOperationRequestHeader } from '../../models/backbones/TestScriptSetupActionOperationRequestHeader.js';
import type {
  ITestScriptSetupActionOperationRequestHeader,
} from '@fhir-toolkit/r4b-types';

/**
 * TestScriptSetupActionOperationRequestHeaderBuilder - Fluent builder for TestScriptSetupActionOperationRequestHeader backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptSetupActionOperationRequestHeader = new TestScriptSetupActionOperationRequestHeaderBuilder()
 *   .setField(value)
 *   .build();
 */
export class TestScriptSetupActionOperationRequestHeaderBuilder extends BackboneElementBuilder<TestScriptSetupActionOperationRequestHeader, ITestScriptSetupActionOperationRequestHeader> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set field
   * HTTP header field name
   */
  setField(field: string): this {
    this.data.field = field;
    return this;
  }

  /**
   * Set value
   * HTTP headerfield value
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptSetupActionOperationRequestHeader instance
   */
  build(): TestScriptSetupActionOperationRequestHeader {
    return new TestScriptSetupActionOperationRequestHeader(this.data);
  }

  /**
   * Build and validate the TestScriptSetupActionOperationRequestHeader instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptSetupActionOperationRequestHeader> {
    const testScriptSetupActionOperationRequestHeader = this.build();
    await testScriptSetupActionOperationRequestHeader.validateOrThrow();
    return testScriptSetupActionOperationRequestHeader;
  }
}
