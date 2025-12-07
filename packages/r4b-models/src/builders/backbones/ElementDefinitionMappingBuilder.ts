import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ElementDefinitionMapping } from '../../models/backbones/ElementDefinitionMapping.js';
import type {
  IElementDefinitionMapping,
} from '@fhir-toolkit/r4b-types';

/**
 * ElementDefinitionMappingBuilder - Fluent builder for ElementDefinitionMapping backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const elementDefinitionMapping = new ElementDefinitionMappingBuilder()
 *   .setIdentity(value)
 *   .build();
 */
export class ElementDefinitionMappingBuilder extends BackboneElementBuilder<ElementDefinitionMapping, IElementDefinitionMapping> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identity
   * Reference to mapping declaration
   */
  setIdentity(identity: string): this {
    this.data.identity = identity;
    return this;
  }

  /**
   * Set language
   * Computable language of mapping
   */
  setLanguage(language: string): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set map
   * Details of the mapping
   */
  setMap(map: string): this {
    this.data.map = map;
    return this;
  }

  /**
   * Set comment
   * Comments about the mapping or its use
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ElementDefinitionMapping instance
   */
  build(): ElementDefinitionMapping {
    return new ElementDefinitionMapping(this.data);
  }

  /**
   * Build and validate the ElementDefinitionMapping instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ElementDefinitionMapping> {
    const elementDefinitionMapping = this.build();
    await elementDefinitionMapping.validateOrThrow();
    return elementDefinitionMapping;
  }
}
