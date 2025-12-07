import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetExpansionProperty } from '../../models/backbones/ValueSetExpansionProperty.js';
import type {
  IValueSetExpansionProperty,
} from '@fhir-toolkit/r5-types';

/**
 * ValueSetExpansionPropertyBuilder - Fluent builder for ValueSetExpansionProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetExpansionProperty = new ValueSetExpansionPropertyBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ValueSetExpansionPropertyBuilder extends BackboneElementBuilder<ValueSetExpansionProperty, IValueSetExpansionProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Identifies the property on the concepts, and when referred to in operations
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set uri
   * Formal identifier for the property
   */
  setUri(uri: string): this {
    this.data.uri = uri;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetExpansionProperty instance
   */
  build(): ValueSetExpansionProperty {
    return new ValueSetExpansionProperty(this.data);
  }

  /**
   * Build and validate the ValueSetExpansionProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetExpansionProperty> {
    const valueSetExpansionProperty = this.build();
    await valueSetExpansionProperty.validateOrThrow();
    return valueSetExpansionProperty;
  }
}
