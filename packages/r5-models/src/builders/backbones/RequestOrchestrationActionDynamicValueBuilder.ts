import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestOrchestrationActionDynamicValue } from '../../models/backbones/RequestOrchestrationActionDynamicValue.js';
import type {
  IExpression,
  IRequestOrchestrationActionDynamicValue,
} from '@fhir-toolkit/r5-types';

/**
 * RequestOrchestrationActionDynamicValueBuilder - Fluent builder for RequestOrchestrationActionDynamicValue backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestOrchestrationActionDynamicValue = new RequestOrchestrationActionDynamicValueBuilder()
 *   .setPath(value)
 *   .build();
 */
export class RequestOrchestrationActionDynamicValueBuilder extends BackboneElementBuilder<RequestOrchestrationActionDynamicValue, IRequestOrchestrationActionDynamicValue> {
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
   * Build the RequestOrchestrationActionDynamicValue instance
   */
  build(): RequestOrchestrationActionDynamicValue {
    return new RequestOrchestrationActionDynamicValue(this.data);
  }

  /**
   * Build and validate the RequestOrchestrationActionDynamicValue instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestOrchestrationActionDynamicValue> {
    const requestOrchestrationActionDynamicValue = this.build();
    await requestOrchestrationActionDynamicValue.validateOrThrow();
    return requestOrchestrationActionDynamicValue;
  }
}
