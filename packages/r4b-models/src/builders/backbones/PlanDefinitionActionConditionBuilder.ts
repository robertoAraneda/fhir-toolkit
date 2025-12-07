import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActionCondition } from '../../models/backbones/PlanDefinitionActionCondition.js';
import type {
  ActionConditionKindType,
  IExpression,
  IPlanDefinitionActionCondition,
} from '@fhir-toolkit/r4b-types';

/**
 * PlanDefinitionActionConditionBuilder - Fluent builder for PlanDefinitionActionCondition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActionCondition = new PlanDefinitionActionConditionBuilder()
 *   .setKind(value)
 *   .build();
 */
export class PlanDefinitionActionConditionBuilder extends BackboneElementBuilder<PlanDefinitionActionCondition, IPlanDefinitionActionCondition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set kind
   * applicability | start | stop
   */
  setKind(kind: ActionConditionKindType): this {
    this.data.kind = kind;
    return this;
  }

  /**
   * Set expression
   * Boolean-valued expression
   */
  setExpression(expression: IExpression): this {
    this.data.expression = expression;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionActionCondition instance
   */
  build(): PlanDefinitionActionCondition {
    return new PlanDefinitionActionCondition(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActionCondition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActionCondition> {
    const planDefinitionActionCondition = this.build();
    await planDefinitionActionCondition.validateOrThrow();
    return planDefinitionActionCondition;
  }
}
