import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestPlanDependency } from '../../models/backbones/TestPlanDependency.js';
import type {
  IReference,
  ITestPlanDependency,
} from '@fhir-toolkit/r5-types';

/**
 * TestPlanDependencyBuilder - Fluent builder for TestPlanDependency backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testPlanDependency = new TestPlanDependencyBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class TestPlanDependencyBuilder extends BackboneElementBuilder<TestPlanDependency, ITestPlanDependency> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Description of the dependency criterium
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
   * Build the TestPlanDependency instance
   */
  build(): TestPlanDependency {
    return new TestPlanDependency(this.data);
  }

  /**
   * Build and validate the TestPlanDependency instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestPlanDependency> {
    const testPlanDependency = this.build();
    await testPlanDependency.validateOrThrow();
    return testPlanDependency;
  }
}
