import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionGoal } from '../../models/backbones/PlanDefinitionGoal.js';
import type {
  ICodeableConcept,
  IPlanDefinitionGoal,
  IPlanDefinitionGoalTarget,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/**
 * PlanDefinitionGoalBuilder - Fluent builder for PlanDefinitionGoal backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionGoal = new PlanDefinitionGoalBuilder()
 *   .setCategory(value)
 *   .addAddresses({ ... })
 *   .build();
 */
export class PlanDefinitionGoalBuilder extends BackboneElementBuilder<PlanDefinitionGoal, IPlanDefinitionGoal> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * E.g. Treatment, dietary, behavioral
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set description
   * Code or text describing the goal
   */
  setDescription(description: ICodeableConcept): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set priority
   * high-priority | medium-priority | low-priority
   */
  setPriority(priority: ICodeableConcept): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set start
   * When goal pursuit begins
   */
  setStart(start: ICodeableConcept): this {
    this.data.start = start;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add addresses
   * What does the goal address
   */
  addAddresses(addresse: ICodeableConcept): this {
    return this.addToArray('addresses', addresse);
  }

  /**
   * Add documentation
   * Supporting documentation for the goal
   */
  addDocumentation(documentation: IRelatedArtifact): this {
    return this.addToArray('documentation', documentation);
  }

  /**
   * Add target
   * Target outcome for the goal
   */
  addTarget(target: IPlanDefinitionGoalTarget): this {
    return this.addToArray('target', target);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionGoal instance
   */
  build(): PlanDefinitionGoal {
    return new PlanDefinitionGoal(this.data);
  }

  /**
   * Build and validate the PlanDefinitionGoal instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionGoal> {
    const planDefinitionGoal = this.build();
    await planDefinitionGoal.validateOrThrow();
    return planDefinitionGoal;
  }
}
