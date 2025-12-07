import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioInstanceContainedInstance } from '../../models/backbones/ExampleScenarioInstanceContainedInstance.js';
import type {
  IExampleScenarioInstanceContainedInstance,
} from '@fhir-toolkit/r4-types';

/**
 * ExampleScenarioInstanceContainedInstanceBuilder - Fluent builder for ExampleScenarioInstanceContainedInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioInstanceContainedInstance = new ExampleScenarioInstanceContainedInstanceBuilder()
 *   .setResourceId(value)
 *   .build();
 */
export class ExampleScenarioInstanceContainedInstanceBuilder extends BackboneElementBuilder<ExampleScenarioInstanceContainedInstance, IExampleScenarioInstanceContainedInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set resourceId
   * Each resource contained in the instance
   */
  setResourceId(resourceId: string): this {
    this.data.resourceId = resourceId;
    return this;
  }

  /**
   * Set versionId
   * A specific version of a resource contained in the instance
   */
  setVersionId(versionId: string): this {
    this.data.versionId = versionId;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioInstanceContainedInstance instance
   */
  build(): ExampleScenarioInstanceContainedInstance {
    return new ExampleScenarioInstanceContainedInstance(this.data);
  }

  /**
   * Build and validate the ExampleScenarioInstanceContainedInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioInstanceContainedInstance> {
    const exampleScenarioInstanceContainedInstance = this.build();
    await exampleScenarioInstanceContainedInstance.validateOrThrow();
    return exampleScenarioInstanceContainedInstance;
  }
}
