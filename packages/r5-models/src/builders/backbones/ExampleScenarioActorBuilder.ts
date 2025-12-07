import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioActor } from '../../models/backbones/ExampleScenarioActor.js';
import type {
  ExampleScenarioActorTypeType,
  IExampleScenarioActor,
} from '@fhir-toolkit/r5-types';

/**
 * ExampleScenarioActorBuilder - Fluent builder for ExampleScenarioActor backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioActor = new ExampleScenarioActorBuilder()
 *   .setKey(value)
 *   .build();
 */
export class ExampleScenarioActorBuilder extends BackboneElementBuilder<ExampleScenarioActor, IExampleScenarioActor> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set key
   * ID or acronym of the actor
   */
  setKey(key: string): this {
    this.data.key = key;
    return this;
  }

  /**
   * Set type
   * person | system
   */
  setType(type: ExampleScenarioActorTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set title
   * Label for actor when rendering
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set description
   * Details about actor
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExampleScenarioActor instance
   */
  build(): ExampleScenarioActor {
    return new ExampleScenarioActor(this.data);
  }

  /**
   * Build and validate the ExampleScenarioActor instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExampleScenarioActor> {
    const exampleScenarioActor = this.build();
    await exampleScenarioActor.validateOrThrow();
    return exampleScenarioActor;
  }
}
