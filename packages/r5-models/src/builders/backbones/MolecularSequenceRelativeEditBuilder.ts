import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceRelativeEdit } from '../../models/backbones/MolecularSequenceRelativeEdit.js';
import type {
  IMolecularSequenceRelativeEdit,
} from '@fhir-toolkit/r5-types';

/**
 * MolecularSequenceRelativeEditBuilder - Fluent builder for MolecularSequenceRelativeEdit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceRelativeEdit = new MolecularSequenceRelativeEditBuilder()
 *   .setStart(value)
 *   .build();
 */
export class MolecularSequenceRelativeEditBuilder extends BackboneElementBuilder<MolecularSequenceRelativeEdit, IMolecularSequenceRelativeEdit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set start
   * Start position of the edit on the starting sequence
   */
  setStart(start: number): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * End position of the edit on the starting sequence
   */
  setEnd(end: number): this {
    this.data.end = end;
    return this;
  }

  /**
   * Set replacementSequence
   * Allele that was observed
   */
  setReplacementSequence(replacementSequence: string): this {
    this.data.replacementSequence = replacementSequence;
    return this;
  }

  /**
   * Set replacedSequence
   * Allele in the starting sequence
   */
  setReplacedSequence(replacedSequence: string): this {
    this.data.replacedSequence = replacedSequence;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceRelativeEdit instance
   */
  build(): MolecularSequenceRelativeEdit {
    return new MolecularSequenceRelativeEdit(this.data);
  }

  /**
   * Build and validate the MolecularSequenceRelativeEdit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceRelativeEdit> {
    const molecularSequenceRelativeEdit = this.build();
    await molecularSequenceRelativeEdit.validateOrThrow();
    return molecularSequenceRelativeEdit;
  }
}
