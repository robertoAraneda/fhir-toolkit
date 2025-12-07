import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestPlanTestCaseTestData } from '../../models/backbones/TestPlanTestCaseTestData.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICoding,
  IReference,
  ITestPlanTestCaseTestData,
} from '@fhir-toolkit/r5-types';

/**
 * TestPlanTestCaseTestDataBuilder - Fluent builder for TestPlanTestCaseTestData backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testPlanTestCaseTestData = new TestPlanTestCaseTestDataBuilder()
 *   .setType(value)
 *   .build();
 */
export class TestPlanTestCaseTestDataBuilder extends BackboneElementBuilder<TestPlanTestCaseTestData, ITestPlanTestCaseTestData> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of test data description, e.g. 'synthea'
   */
  setType(type: ICoding): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set content
   * The actual test resources when they exist
   */
  setContent(content: IReference): this {
    this.data.content = content;
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
    const key = `source${type}` as keyof ITestPlanTestCaseTestData;
    const otherKeys: (keyof ITestPlanTestCaseTestData)[] = [];
    if (type !== 'String') {
      otherKeys.push('sourceString' as keyof ITestPlanTestCaseTestData);
      otherKeys.push('_sourceString' as keyof ITestPlanTestCaseTestData);
    }
    if (type !== 'Reference') {
      otherKeys.push('sourceReference' as keyof ITestPlanTestCaseTestData);
      otherKeys.push('_sourceReference' as keyof ITestPlanTestCaseTestData);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestPlanTestCaseTestData instance
   */
  build(): TestPlanTestCaseTestData {
    return new TestPlanTestCaseTestData(this.data);
  }

  /**
   * Build and validate the TestPlanTestCaseTestData instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestPlanTestCaseTestData> {
    const testPlanTestCaseTestData = this.build();
    await testPlanTestCaseTestData.validateOrThrow();
    return testPlanTestCaseTestData;
  }
}
