import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapStructure } from '../../models/backbones/StructureMapStructure.js';
import type {
  IStructureMapStructure,
  StructureMapModelModeType,
} from '@fhir-toolkit/r4b-types';

/**
 * StructureMapStructureBuilder - Fluent builder for StructureMapStructure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapStructure = new StructureMapStructureBuilder()
 *   .setUrl(value)
 *   .build();
 */
export class StructureMapStructureBuilder extends BackboneElementBuilder<StructureMapStructure, IStructureMapStructure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set url
   * Canonical reference to structure definition
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set mode
   * source | queried | target | produced
   */
  setMode(mode: StructureMapModelModeType): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set alias
   * Name for type in this map
   */
  setAlias(alias: string): this {
    this.data.alias = alias;
    return this;
  }

  /**
   * Set documentation
   * Documentation on use of structure
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapStructure instance
   */
  build(): StructureMapStructure {
    return new StructureMapStructure(this.data);
  }

  /**
   * Build and validate the StructureMapStructure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapStructure> {
    const structureMapStructure = this.build();
    await structureMapStructure.validateOrThrow();
    return structureMapStructure;
  }
}
