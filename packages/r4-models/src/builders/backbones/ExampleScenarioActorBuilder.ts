import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExampleScenarioActor } from '../../models/backbones/ExampleScenarioActor.js';
import type {
  ExampleScenarioActorTypeType,
  IExampleScenarioActor,
} from '@fhir-toolkit/r4-types';

/**
 * ExampleScenarioActorBuilder - Fluent builder for ExampleScenarioActor backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const exampleScenarioActor = new ExampleScenarioActorBuilder()
 *   .setActorId(value)
 *   .build();
 */
export class ExampleScenarioActorBuilder extends BackboneElementBuilder<ExampleScenarioActor, IExampleScenarioActor> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set actorId
   * ID or acronym of the actor
   */
  setActorId(actorId: string): this {
    this.data.actorId = actorId;
    return this;
  }

  /**
   * Set type
   * person | entity
   */
  setType(type: ExampleScenarioActorTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set name
   * The name of the actor as shown in the page
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * The description of the actor
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
