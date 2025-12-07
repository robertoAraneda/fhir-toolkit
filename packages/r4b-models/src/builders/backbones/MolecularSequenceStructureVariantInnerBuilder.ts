import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceStructureVariantInner } from '../../models/backbones/MolecularSequenceStructureVariantInner.js';
import type {
  IMolecularSequenceStructureVariantInner,
} from '@fhir-toolkit/r4b-types';

/**
 * MolecularSequenceStructureVariantInnerBuilder - Fluent builder for MolecularSequenceStructureVariantInner backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceStructureVariantInner = new MolecularSequenceStructureVariantInnerBuilder()
 *   .setStart(value)
 *   .build();
 */
export class MolecularSequenceStructureVariantInnerBuilder extends BackboneElementBuilder<MolecularSequenceStructureVariantInner, IMolecularSequenceStructureVariantInner> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set start
   * Structural variant inner start
   */
  setStart(start: number): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * Structural variant inner end
   */
  setEnd(end: number): this {
    this.data.end = end;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceStructureVariantInner instance
   */
  build(): MolecularSequenceStructureVariantInner {
    return new MolecularSequenceStructureVariantInner(this.data);
  }

  /**
   * Build and validate the MolecularSequenceStructureVariantInner instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceStructureVariantInner> {
    const molecularSequenceStructureVariantInner = this.build();
    await molecularSequenceStructureVariantInner.validateOrThrow();
    return molecularSequenceStructureVariantInner;
  }
}
