import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureDefinitionDifferential } from '../../models/backbones/StructureDefinitionDifferential.js';
import type {
  IElementDefinition,
  IStructureDefinitionDifferential,
} from '@fhir-toolkit/r4b-types';

/**
 * StructureDefinitionDifferentialBuilder - Fluent builder for StructureDefinitionDifferential backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureDefinitionDifferential = new StructureDefinitionDifferentialBuilder()
 *   .addElement({ ... })
 *   .build();
 */
export class StructureDefinitionDifferentialBuilder extends BackboneElementBuilder<StructureDefinitionDifferential, IStructureDefinitionDifferential> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add element
   * Definition of elements in the resource (if no StructureDefinition)
   */
  addElement(element: IElementDefinition): this {
    return this.addToArray('element', element);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureDefinitionDifferential instance
   */
  build(): StructureDefinitionDifferential {
    return new StructureDefinitionDifferential(this.data);
  }

  /**
   * Build and validate the StructureDefinitionDifferential instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureDefinitionDifferential> {
    const structureDefinitionDifferential = this.build();
    await structureDefinitionDifferential.validateOrThrow();
    return structureDefinitionDifferential;
  }
}
