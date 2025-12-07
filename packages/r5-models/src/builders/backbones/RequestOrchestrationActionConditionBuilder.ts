import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestOrchestrationActionCondition } from '../../models/backbones/RequestOrchestrationActionCondition.js';
import type {
  ActionConditionKindType,
  IExpression,
  IRequestOrchestrationActionCondition,
} from '@fhir-toolkit/r5-types';

/**
 * RequestOrchestrationActionConditionBuilder - Fluent builder for RequestOrchestrationActionCondition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestOrchestrationActionCondition = new RequestOrchestrationActionConditionBuilder()
 *   .setKind(value)
 *   .build();
 */
export class RequestOrchestrationActionConditionBuilder extends BackboneElementBuilder<RequestOrchestrationActionCondition, IRequestOrchestrationActionCondition> {
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
   * Build the RequestOrchestrationActionCondition instance
   */
  build(): RequestOrchestrationActionCondition {
    return new RequestOrchestrationActionCondition(this.data);
  }

  /**
   * Build and validate the RequestOrchestrationActionCondition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestOrchestrationActionCondition> {
    const requestOrchestrationActionCondition = this.build();
    await requestOrchestrationActionCondition.validateOrThrow();
    return requestOrchestrationActionCondition;
  }
}
