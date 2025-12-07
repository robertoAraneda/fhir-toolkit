import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioInstanceContainedInstance } from '../../models/backbones/ExampleScenarioInstanceContainedInstance.js';
import type {
  IExampleScenarioInstanceContainedInstance,
} from '@fhir-toolkit/r5-types';

/**
 * ExampleScenarioInstanceContainedInstanceBuilder - Fluent builder for ExampleScenarioInstanceContainedInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioInstanceContainedInstance = new ExampleScenarioInstanceContainedInstanceBuilder()
 *   .setInstanceReference(value)
 *   .build();
 */
export class ExampleScenarioInstanceContainedInstanceBuilder extends BackboneElementBuilder<ExampleScenarioInstanceContainedInstance, IExampleScenarioInstanceContainedInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set instanceReference
   * Key of contained instance
   */
  setInstanceReference(instanceReference: string): this {
    this.data.instanceReference = instanceReference;
    return this;
  }

  /**
   * Set versionReference
   * Key of contained instance version
   */
  setVersionReference(versionReference: string): this {
    this.data.versionReference = versionReference;
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
