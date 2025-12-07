import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureDefinitionSnapshot } from '../../models/backbones/StructureDefinitionSnapshot.js';
import type {
  IElementDefinition,
  IStructureDefinitionSnapshot,
} from '@fhir-toolkit/r5-types';

/**
 * StructureDefinitionSnapshotBuilder - Fluent builder for StructureDefinitionSnapshot backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureDefinitionSnapshot = new StructureDefinitionSnapshotBuilder()
 *   .addElement({ ... })
 *   .build();
 */
export class StructureDefinitionSnapshotBuilder extends BackboneElementBuilder<StructureDefinitionSnapshot, IStructureDefinitionSnapshot> {
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
   * Build the StructureDefinitionSnapshot instance
   */
  build(): StructureDefinitionSnapshot {
    return new StructureDefinitionSnapshot(this.data);
  }

  /**
   * Build and validate the StructureDefinitionSnapshot instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureDefinitionSnapshot> {
    const structureDefinitionSnapshot = this.build();
    await structureDefinitionSnapshot.validateOrThrow();
    return structureDefinitionSnapshot;
  }
}
