import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionBinding } from '../../models/backbones/ElementDefinitionBinding.js';
import type {
  BindingStrengthType,
  IElementDefinitionBinding,
  IElementDefinitionBindingAdditional,
} from '@fhir-toolkit/r5-types';

/**
 * ElementDefinitionBindingBuilder - Fluent builder for ElementDefinitionBinding backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionBinding = new ElementDefinitionBindingBuilder()
 *   .setStrength(value)
 *   .addAdditional({ ... })
 *   .build();
 */
export class ElementDefinitionBindingBuilder extends BackboneElementBuilder<ElementDefinitionBinding, IElementDefinitionBinding> {
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
   * Set description
   * Intended use of codes in the bound value set
   */
  setDescription(description: string): this {
    this.data.description = description;
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
  // Array Properties
  // ============================================================================

  /**
   * Add additional
   * Additional Bindings - more rules about the binding
   */
  addAdditional(additional: IElementDefinitionBindingAdditional): this {
    return this.addToArray('additional', additional);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionBinding instance
   */
  build(): ElementDefinitionBinding {
    return new ElementDefinitionBinding(this.data);
  }

  /**
   * Build and validate the ElementDefinitionBinding instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionBinding> {
    const elementDefinitionBinding = this.build();
    await elementDefinitionBinding.validateOrThrow();
    return elementDefinitionBinding;
  }
}
