import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptVariable } from '../../models/backbones/TestScriptVariable.js';
import type {
  ITestScriptVariable,
} from '@fhir-toolkit/r4b-types';

/**
 * TestScriptVariableBuilder - Fluent builder for TestScriptVariable backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptVariable = new TestScriptVariableBuilder()
 *   .setName(value)
 *   .build();
 */
export class TestScriptVariableBuilder extends BackboneElementBuilder<TestScriptVariable, ITestScriptVariable> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Descriptive name for this variable
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set defaultValue
   * Default, hard-coded, or user-defined value for this variable
   */
  setDefaultValue(defaultValue: string): this {
    this.data.defaultValue = defaultValue;
    return this;
  }

  /**
   * Set description
   * Natural language description of the variable
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set expression
   * The FHIRPath expression against the fixture body
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
    return this;
  }

  /**
   * Set headerField
   * HTTP header field name for source
   */
  setHeaderField(headerField: string): this {
    this.data.headerField = headerField;
    return this;
  }

  /**
   * Set hint
   * Hint help text for default value to enter
   */
  setHint(hint: string): this {
    this.data.hint = hint;
    return this;
  }

  /**
   * Set path
   * XPath or JSONPath against the fixture body
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set sourceId
   * Fixture Id of source expression or headerField within this variable
   */
  setSourceId(sourceId: string): this {
    this.data.sourceId = sourceId;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptVariable instance
   */
  build(): TestScriptVariable {
    return new TestScriptVariable(this.data);
  }

  /**
   * Build and validate the TestScriptVariable instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptVariable> {
    const testScriptVariable = this.build();
    await testScriptVariable.validateOrThrow();
    return testScriptVariable;
  }
}
