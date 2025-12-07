import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { OperationDefinitionOverload } from '../../models/backbones/OperationDefinitionOverload.js';
import type {
  IOperationDefinitionOverload,
} from '@fhir-toolkit/r5-types';

/**
 * OperationDefinitionOverloadBuilder - Fluent builder for OperationDefinitionOverload backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const operationDefinitionOverload = new OperationDefinitionOverloadBuilder()
 *   .setComment(value)
 *   .addParameterName({ ... })
 *   .build();
 */
export class OperationDefinitionOverloadBuilder extends BackboneElementBuilder<OperationDefinitionOverload, IOperationDefinitionOverload> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set comment
   * Comments to go on overload
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add parameterName
   * Name of parameter to include in overload
   */
  addParameterName(parameterName: string): this {
    return this.addToArray('parameterName', parameterName);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OperationDefinitionOverload instance
   */
  build(): OperationDefinitionOverload {
    return new OperationDefinitionOverload(this.data);
  }

  /**
   * Build and validate the OperationDefinitionOverload instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OperationDefinitionOverload> {
    const operationDefinitionOverload = this.build();
    await operationDefinitionOverload.validateOrThrow();
    return operationDefinitionOverload;
  }
}
