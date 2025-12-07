import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioInstance } from '../../models/backbones/ExampleScenarioInstance.js';
import type {
  IExampleScenarioInstance,
  IExampleScenarioInstanceContainedInstance,
  IExampleScenarioInstanceVersion,
} from '@fhir-toolkit/r4b-types';

/**
 * ExampleScenarioInstanceBuilder - Fluent builder for ExampleScenarioInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioInstance = new ExampleScenarioInstanceBuilder()
 *   .setResourceId(value)
 *   .addVersion({ ... })
 *   .build();
 */
export class ExampleScenarioInstanceBuilder extends BackboneElementBuilder<ExampleScenarioInstance, IExampleScenarioInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set resourceId
   * The id of the resource for referencing
   */
  setResourceId(resourceId: string): this {
    this.data.resourceId = resourceId;
    return this;
  }

  /**
   * Set resourceType
   * The type of the resource
   */
  setResourceType(resourceType: string): this {
    this.data.resourceType = resourceType;
    return this;
  }

  /**
   * Set name
   * A short name for the resource instance
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Human-friendly description of the resource instance
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add version
   * A specific version of the resource
   */
  addVersion(version: IExampleScenarioInstanceVersion): this {
    return this.addToArray('version', version);
  }

  /**
   * Add containedInstance
   * Resources contained in the instance
   */
  addContainedInstance(containedInstance: IExampleScenarioInstanceContainedInstance): this {
    return this.addToArray('containedInstance', containedInstance);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioInstance instance
   */
  build(): ExampleScenarioInstance {
    return new ExampleScenarioInstance(this.data);
  }

  /**
   * Build and validate the ExampleScenarioInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioInstance> {
    const exampleScenarioInstance = this.build();
    await exampleScenarioInstance.validateOrThrow();
    return exampleScenarioInstance;
  }
}
