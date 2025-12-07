import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceStructureVariantOuter } from '../../models/backbones/MolecularSequenceStructureVariantOuter.js';
import type {
  IMolecularSequenceStructureVariantOuter,
} from '@fhir-toolkit/r4-types';

/**
 * MolecularSequenceStructureVariantOuterBuilder - Fluent builder for MolecularSequenceStructureVariantOuter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceStructureVariantOuter = new MolecularSequenceStructureVariantOuterBuilder()
 *   .setStart(value)
 *   .build();
 */
export class MolecularSequenceStructureVariantOuterBuilder extends BackboneElementBuilder<MolecularSequenceStructureVariantOuter, IMolecularSequenceStructureVariantOuter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set start
   * Structural variant outer start
   */
  setStart(start: number): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * Structural variant outer end
   */
  setEnd(end: number): this {
    this.data.end = end;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceStructureVariantOuter instance
   */
  build(): MolecularSequenceStructureVariantOuter {
    return new MolecularSequenceStructureVariantOuter(this.data);
  }

  /**
   * Build and validate the MolecularSequenceStructureVariantOuter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceStructureVariantOuter> {
    const molecularSequenceStructureVariantOuter = this.build();
    await molecularSequenceStructureVariantOuter.validateOrThrow();
    return molecularSequenceStructureVariantOuter;
  }
}
