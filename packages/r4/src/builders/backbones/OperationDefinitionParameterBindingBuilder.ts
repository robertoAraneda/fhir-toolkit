import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { OperationDefinitionParameterBinding } from '../../models/backbones/OperationDefinitionParameterBinding.js';
import type {
  BindingStrengthType,
  IOperationDefinitionParameterBinding,
} from '@fhir-toolkit/r4-types';

/**
 * OperationDefinitionParameterBindingBuilder - Fluent builder for OperationDefinitionParameterBinding backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const operationDefinitionParameterBinding = new OperationDefinitionParameterBindingBuilder()
 *   .setStrength(value)
 *   .build();
 */
export class OperationDefinitionParameterBindingBuilder extends BackboneElementBuilder<OperationDefinitionParameterBinding, IOperationDefinitionParameterBinding> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set strength
   * required | extensible | preferred | example
   */
  setStrength(strength: BindingStrengthType): this {
    this.data.strength = strength;
    return this;
  }

  /**
   * Set valueSet
   * Source of value set
   */
  setValueSet(valueSet: string): this {
    this.data.valueSet = valueSet;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OperationDefinitionParameterBinding instance
   */
  build(): OperationDefinitionParameterBinding {
    return new OperationDefinitionParameterBinding(this.data);
  }

  /**
   * Build and validate the OperationDefinitionParameterBinding instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OperationDefinitionParameterBinding> {
    const operationDefinitionParameterBinding = this.build();
    await operationDefinitionParameterBinding.validateOrThrow();
    return operationDefinitionParameterBinding;
  }
}
