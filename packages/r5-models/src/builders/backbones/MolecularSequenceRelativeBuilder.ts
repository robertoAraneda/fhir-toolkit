import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MolecularSequenceRelative } from '../../models/backbones/MolecularSequenceRelative.js';
import type {
  ICodeableConcept,
  IMolecularSequenceRelative,
  IMolecularSequenceRelativeEdit,
  IMolecularSequenceRelativeStartingSequence,
  IRange,
} from '@fhir-toolkit/r5-types';

/**
 * MolecularSequenceRelativeBuilder - Fluent builder for MolecularSequenceRelative backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const molecularSequenceRelative = new MolecularSequenceRelativeBuilder()
 *   .setCoordinateSystem(value)
 *   .addEdit({ ... })
 *   .build();
 */
export class MolecularSequenceRelativeBuilder extends BackboneElementBuilder<MolecularSequenceRelative, IMolecularSequenceRelative> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set coordinateSystem
   * Ways of identifying nucleotides or amino acids within a sequence
   */
  setCoordinateSystem(coordinateSystem: ICodeableConcept): this {
    this.data.coordinateSystem = coordinateSystem;
    return this;
  }

  /**
   * Set ordinalPosition
   * Indicates the order in which the sequence should be considered when putting multiple 'relative' elements together
   */
  setOrdinalPosition(ordinalPosition: number): this {
    this.data.ordinalPosition = ordinalPosition;
    return this;
  }

  /**
   * Set sequenceRange
   * Indicates the nucleotide range in the composed sequence when multiple 'relative' elements are used together
   */
  setSequenceRange(sequenceRange: IRange): this {
    this.data.sequenceRange = sequenceRange;
    return this;
  }

  /**
   * Set startingSequence
   * A sequence used as starting sequence
   */
  setStartingSequence(startingSequence: IMolecularSequenceRelativeStartingSequence): this {
    this.data.startingSequence = startingSequence;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add edit
   * Changes in sequence from the starting sequence
   */
  addEdit(edit: IMolecularSequenceRelativeEdit): this {
    return this.addToArray('edit', edit);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MolecularSequenceRelative instance
   */
  build(): MolecularSequenceRelative {
    return new MolecularSequenceRelative(this.data);
  }

  /**
   * Build and validate the MolecularSequenceRelative instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MolecularSequenceRelative> {
    const molecularSequenceRelative = this.build();
    await molecularSequenceRelative.validateOrThrow();
    return molecularSequenceRelative;
  }
}
