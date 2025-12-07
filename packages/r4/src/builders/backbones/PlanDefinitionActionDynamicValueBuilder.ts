import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActionDynamicValue } from '../../models/backbones/PlanDefinitionActionDynamicValue.js';
import type {
  IExpression,
  IPlanDefinitionActionDynamicValue,
} from '@fhir-toolkit/r4-types';

/**
 * PlanDefinitionActionDynamicValueBuilder - Fluent builder for PlanDefinitionActionDynamicValue backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActionDynamicValue = new PlanDefinitionActionDynamicValueBuilder()
 *   .setPath(value)
 *   .build();
 */
export class PlanDefinitionActionDynamicValueBuilder extends BackboneElementBuilder<PlanDefinitionActionDynamicValue, IPlanDefinitionActionDynamicValue> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set path
   * The path to the element to be set dynamically
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set expression
   * An expression that provides the dynamic value for the customization
   */
  setExpression(expression: IExpression): this {
    this.data.expression = expression;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionActionDynamicValue instance
   */
  build(): PlanDefinitionActionDynamicValue {
    return new PlanDefinitionActionDynamicValue(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActionDynamicValue instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActionDynamicValue> {
    const planDefinitionActionDynamicValue = this.build();
    await planDefinitionActionDynamicValue.validateOrThrow();
    return planDefinitionActionDynamicValue;
  }
}
