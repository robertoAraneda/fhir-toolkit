import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapConst } from '../../models/backbones/StructureMapConst.js';
import type {
  IStructureMapConst,
} from '@fhir-toolkit/r5-types';

/**
 * StructureMapConstBuilder - Fluent builder for StructureMapConst backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapConst = new StructureMapConstBuilder()
 *   .setName(value)
 *   .build();
 */
export class StructureMapConstBuilder extends BackboneElementBuilder<StructureMapConst, IStructureMapConst> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Constant name
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set value
   * FHIRPath exression - value of the constant
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapConst instance
   */
  build(): StructureMapConst {
    return new StructureMapConst(this.data);
  }

  /**
   * Build and validate the StructureMapConst instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapConst> {
    const structureMapConst = this.build();
    await structureMapConst.validateOrThrow();
    return structureMapConst;
  }
}
