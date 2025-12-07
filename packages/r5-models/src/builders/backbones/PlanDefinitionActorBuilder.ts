import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActor } from '../../models/backbones/PlanDefinitionActor.js';
import type {
  IPlanDefinitionActor,
  IPlanDefinitionActorOption,
} from '@fhir-toolkit/r5-types';

/**
 * PlanDefinitionActorBuilder - Fluent builder for PlanDefinitionActor backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActor = new PlanDefinitionActorBuilder()
 *   .setTitle(value)
 *   .addOption({ ... })
 *   .build();
 */
export class PlanDefinitionActorBuilder extends BackboneElementBuilder<PlanDefinitionActor, IPlanDefinitionActor> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set title
   * User-visible title
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  /**
   * Set description
   * Describes the actor
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add option
   * Who or what can be this actor
   */
  addOption(option: IPlanDefinitionActorOption): this {
    return this.addToArray('option', option);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionActor instance
   */
  build(): PlanDefinitionActor {
    return new PlanDefinitionActor(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActor instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActor> {
    const planDefinitionActor = this.build();
    await planDefinitionActor.validateOrThrow();
    return planDefinitionActor;
  }
}
