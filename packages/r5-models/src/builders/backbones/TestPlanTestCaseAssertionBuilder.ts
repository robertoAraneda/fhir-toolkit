import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestPlanTestCaseAssertion } from '../../models/backbones/TestPlanTestCaseAssertion.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  ITestPlanTestCaseAssertion,
} from '@fhir-toolkit/r5-types';

/**
 * TestPlanTestCaseAssertionBuilder - Fluent builder for TestPlanTestCaseAssertion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testPlanTestCaseAssertion = new TestPlanTestCaseAssertionBuilder()
 *   .addType({ ... })
 *   .build();
 */
export class TestPlanTestCaseAssertionBuilder extends BackboneElementBuilder<TestPlanTestCaseAssertion, ITestPlanTestCaseAssertion> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Assertion type - for example 'informative' or 'required' 
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add object
   * The focus or object of the assertion
   */
  addObject(object: ICodeableReference): this {
    return this.addToArray('object', object);
  }

  /**
   * Add result
   * The actual result assertion
   */
  addResult(result: ICodeableReference): this {
    return this.addToArray('result', result);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestPlanTestCaseAssertion instance
   */
  build(): TestPlanTestCaseAssertion {
    return new TestPlanTestCaseAssertion(this.data);
  }

  /**
   * Build and validate the TestPlanTestCaseAssertion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestPlanTestCaseAssertion> {
    const testPlanTestCaseAssertion = this.build();
    await testPlanTestCaseAssertion.validateOrThrow();
    return testPlanTestCaseAssertion;
  }
}
