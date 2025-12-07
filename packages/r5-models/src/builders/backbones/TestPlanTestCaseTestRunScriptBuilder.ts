import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestPlanTestCaseTestRunScript } from '../../models/backbones/TestPlanTestCaseTestRunScript.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IReference,
  ITestPlanTestCaseTestRunScript,
} from '@fhir-toolkit/r5-types';

/**
 * TestPlanTestCaseTestRunScriptBuilder - Fluent builder for TestPlanTestCaseTestRunScript backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testPlanTestCaseTestRunScript = new TestPlanTestCaseTestRunScriptBuilder()
 *   .setLanguage(value)
 *   .build();
 */
export class TestPlanTestCaseTestRunScriptBuilder extends BackboneElementBuilder<TestPlanTestCaseTestRunScript, ITestPlanTestCaseTestRunScript> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set language
   * The language for the test cases e.g. 'gherkin', 'testscript'
   */
  setLanguage(language: ICodeableConcept): this {
    this.data.language = language;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set source choice type (sourceString, sourceReference)
   * @param type - 'String' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSource('String', value)
   */
  setSource<T extends 'String' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `source${type}` as keyof ITestPlanTestCaseTestRunScript;
    const otherKeys: (keyof ITestPlanTestCaseTestRunScript)[] = [];
    if (type !== 'String') {
      otherKeys.push('sourceString' as keyof ITestPlanTestCaseTestRunScript);
      otherKeys.push('_sourceString' as keyof ITestPlanTestCaseTestRunScript);
    }
    if (type !== 'Reference') {
      otherKeys.push('sourceReference' as keyof ITestPlanTestCaseTestRunScript);
      otherKeys.push('_sourceReference' as keyof ITestPlanTestCaseTestRunScript);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestPlanTestCaseTestRunScript instance
   */
  build(): TestPlanTestCaseTestRunScript {
    return new TestPlanTestCaseTestRunScript(this.data);
  }

  /**
   * Build and validate the TestPlanTestCaseTestRunScript instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestPlanTestCaseTestRunScript> {
    const testPlanTestCaseTestRunScript = this.build();
    await testPlanTestCaseTestRunScript.validateOrThrow();
    return testPlanTestCaseTestRunScript;
  }
}
