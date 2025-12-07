import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestPlanTestCaseDependency } from '../../models/backbones/TestPlanTestCaseDependency.js';
import type {
  IReference,
  ITestPlanTestCaseDependency,
} from '@fhir-toolkit/r5-types';

/**
 * TestPlanTestCaseDependencyBuilder - Fluent builder for TestPlanTestCaseDependency backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testPlanTestCaseDependency = new TestPlanTestCaseDependencyBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class TestPlanTestCaseDependencyBuilder extends BackboneElementBuilder<TestPlanTestCaseDependency, ITestPlanTestCaseDependency> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of the criteria
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set predecessor
   * Link to predecessor test plans
   */
  setPredecessor(predecessor: IReference): this {
    this.data.predecessor = predecessor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestPlanTestCaseDependency instance
   */
  build(): TestPlanTestCaseDependency {
    return new TestPlanTestCaseDependency(this.data);
  }

  /**
   * Build and validate the TestPlanTestCaseDependency instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestPlanTestCaseDependency> {
    const testPlanTestCaseDependency = this.build();
    await testPlanTestCaseDependency.validateOrThrow();
    return testPlanTestCaseDependency;
  }
}
