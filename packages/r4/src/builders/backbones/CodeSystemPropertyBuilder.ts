import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CodeSystemProperty } from '../../models/backbones/CodeSystemProperty.js';
import type {
  ICodeSystemProperty,
  PropertyTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * CodeSystemPropertyBuilder - Fluent builder for CodeSystemProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const codeSystemProperty = new CodeSystemPropertyBuilder()
 *   .setCode(value)
 *   .build();
 */
export class CodeSystemPropertyBuilder extends BackboneElementBuilder<CodeSystemProperty, ICodeSystemProperty> {
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

  /**
   * Set description
   * Why the property is defined, and/or what it conveys
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * code | Coding | string | integer | boolean | dateTime | decimal
   */
  setType(type: PropertyTypeType): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CodeSystemProperty instance
   */
  build(): CodeSystemProperty {
    return new CodeSystemProperty(this.data);
  }

  /**
   * Build and validate the CodeSystemProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CodeSystemProperty> {
    const codeSystemProperty = this.build();
    await codeSystemProperty.validateOrThrow();
    return codeSystemProperty;
  }
}
