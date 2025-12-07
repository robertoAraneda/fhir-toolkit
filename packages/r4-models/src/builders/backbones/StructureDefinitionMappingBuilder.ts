import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureDefinitionMapping } from '../../models/backbones/StructureDefinitionMapping.js';
import type {
  IStructureDefinitionMapping,
} from '@fhir-toolkit/r4-types';

/**
 * StructureDefinitionMappingBuilder - Fluent builder for StructureDefinitionMapping backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureDefinitionMapping = new StructureDefinitionMappingBuilder()
 *   .setIdentity(value)
 *   .build();
 */
export class StructureDefinitionMappingBuilder extends BackboneElementBuilder<StructureDefinitionMapping, IStructureDefinitionMapping> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identity
   * Internal id when this mapping is used
   */
  setIdentity(identity: string): this {
    this.data.identity = identity;
    return this;
  }

  /**
   * Set uri
   * Identifies what this mapping refers to
   */
  setUri(uri: string): this {
    this.data.uri = uri;
    return this;
  }

  /**
   * Set name
   * Names what this mapping refers to
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set comment
   * Versions, Issues, Scope limitations etc.
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureDefinitionMapping instance
   */
  build(): StructureDefinitionMapping {
    return new StructureDefinitionMapping(this.data);
  }

  /**
   * Build and validate the StructureDefinitionMapping instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureDefinitionMapping> {
    const structureDefinitionMapping = this.build();
    await structureDefinitionMapping.validateOrThrow();
    return structureDefinitionMapping;
  }
}
