import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ActivityDefinitionDynamicValue } from '../../models/backbones/ActivityDefinitionDynamicValue.js';
import type {
  IActivityDefinitionDynamicValue,
  IExpression,
} from '@fhir-toolkit/r4b-types';

/**
 * ActivityDefinitionDynamicValueBuilder - Fluent builder for ActivityDefinitionDynamicValue backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const activityDefinitionDynamicValue = new ActivityDefinitionDynamicValueBuilder()
 *   .setPath(value)
 *   .build();
 */
export class ActivityDefinitionDynamicValueBuilder extends BackboneElementBuilder<ActivityDefinitionDynamicValue, IActivityDefinitionDynamicValue> {
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
   * Build the ActivityDefinitionDynamicValue instance
   */
  build(): ActivityDefinitionDynamicValue {
    return new ActivityDefinitionDynamicValue(this.data);
  }

  /**
   * Build and validate the ActivityDefinitionDynamicValue instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ActivityDefinitionDynamicValue> {
    const activityDefinitionDynamicValue = this.build();
    await activityDefinitionDynamicValue.validateOrThrow();
    return activityDefinitionDynamicValue;
  }
}
