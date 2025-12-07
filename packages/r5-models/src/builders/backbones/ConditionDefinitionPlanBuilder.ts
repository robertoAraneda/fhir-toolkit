import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConditionDefinitionPlan } from '../../models/backbones/ConditionDefinitionPlan.js';
import type {
  ICodeableConcept,
  IConditionDefinitionPlan,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ConditionDefinitionPlanBuilder - Fluent builder for ConditionDefinitionPlan backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionDefinitionPlan = new ConditionDefinitionPlanBuilder()
 *   .setRole(value)
 *   .build();
 */
export class ConditionDefinitionPlanBuilder extends BackboneElementBuilder<ConditionDefinitionPlan, IConditionDefinitionPlan> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * Use for the plan
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set reference
   * The actual plan
   */
  setReference(reference: IReference<'PlanDefinition'>): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionDefinitionPlan instance
   */
  build(): ConditionDefinitionPlan {
    return new ConditionDefinitionPlan(this.data);
  }

  /**
   * Build and validate the ConditionDefinitionPlan instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionDefinitionPlan> {
    const conditionDefinitionPlan = this.build();
    await conditionDefinitionPlan.validateOrThrow();
    return conditionDefinitionPlan;
  }
}
