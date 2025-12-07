import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConceptMapProperty } from '../../models/backbones/ConceptMapProperty.js';
import type {
  ConceptMapPropertyTypeType,
  IConceptMapProperty,
} from '@fhir-toolkit/r5-types';

/**
 * ConceptMapPropertyBuilder - Fluent builder for ConceptMapProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conceptMapProperty = new ConceptMapPropertyBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ConceptMapPropertyBuilder extends BackboneElementBuilder<ConceptMapProperty, IConceptMapProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Identifies the property on the mappings, and when referred to in the $translate operation
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
   * Coding | string | integer | boolean | dateTime | decimal | code
   */
  setType(type: ConceptMapPropertyTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set system
   * The CodeSystem from which code values come
   */
  setSystem(system: string): this {
    this.data.system = system;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConceptMapProperty instance
   */
  build(): ConceptMapProperty {
    return new ConceptMapProperty(this.data);
  }

  /**
   * Build and validate the ConceptMapProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConceptMapProperty> {
    const conceptMapProperty = this.build();
    await conceptMapProperty.validateOrThrow();
    return conceptMapProperty;
  }
}
