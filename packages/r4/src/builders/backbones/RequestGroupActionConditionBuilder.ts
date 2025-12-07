import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RequestGroupActionCondition } from '../../models/backbones/RequestGroupActionCondition.js';
import type {
  ActionConditionKindType,
  IExpression,
  IRequestGroupActionCondition,
} from '@fhir-toolkit/r4-types';

/**
 * RequestGroupActionConditionBuilder - Fluent builder for RequestGroupActionCondition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const requestGroupActionCondition = new RequestGroupActionConditionBuilder()
 *   .setKind(value)
 *   .build();
 */
export class RequestGroupActionConditionBuilder extends BackboneElementBuilder<RequestGroupActionCondition, IRequestGroupActionCondition> {
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
   * Build the RequestGroupActionCondition instance
   */
  build(): RequestGroupActionCondition {
    return new RequestGroupActionCondition(this.data);
  }

  /**
   * Build and validate the RequestGroupActionCondition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RequestGroupActionCondition> {
    const requestGroupActionCondition = this.build();
    await requestGroupActionCondition.validateOrThrow();
    return requestGroupActionCondition;
  }
}
