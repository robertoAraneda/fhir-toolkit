import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapAdditionalAttribute } from '../../models/backbones/ConceptMapAdditionalAttribute.js';
import type {
  ConceptMapAttributeTypeType,
  IConceptMapAdditionalAttribute,
} from '@fhir-toolkit/r5-types';

/**
 * ConceptMapAdditionalAttributeBuilder - Fluent builder for ConceptMapAdditionalAttribute backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapAdditionalAttribute = new ConceptMapAdditionalAttributeBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ConceptMapAdditionalAttributeBuilder extends BackboneElementBuilder<ConceptMapAdditionalAttribute, IConceptMapAdditionalAttribute> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Identifies this additional attribute through this resource
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set uri
   * Formal identifier for the data element referred to in this attribte
   */
  setUri(uri: string): this {
    this.data.uri = uri;
    return this;
  }

  /**
   * Set description
   * Why the additional attribute is defined, and/or what the data element it refers to is
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * code | Coding | string | boolean | Quantity
   */
  setType(type: ConceptMapAttributeTypeType): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapAdditionalAttribute instance
   */
  build(): ConceptMapAdditionalAttribute {
    return new ConceptMapAdditionalAttribute(this.data);
  }

  /**
   * Build and validate the ConceptMapAdditionalAttribute instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapAdditionalAttribute> {
    const conceptMapAdditionalAttribute = this.build();
    await conceptMapAdditionalAttribute.validateOrThrow();
    return conceptMapAdditionalAttribute;
  }
}
