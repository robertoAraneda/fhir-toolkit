import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IMolecularSequenceRelativeEdit } from './IMolecularSequenceRelativeEdit.js';
import type { IMolecularSequenceRelativeStartingSequence } from './IMolecularSequenceRelativeStartingSequence.js';

/**
 * MolecularSequenceRelative Interface
 * 
 * A sequence defined relative to another sequence
 * 
 *
 * @see https://hl7.org/fhir/R5/molecularsequencerelative.html
 */
export interface IMolecularSequenceRelative extends IBackboneElement {
  /**
   * Ways of identifying nucleotides or amino acids within a sequence
   */
  coordinateSystem: ICodeableConcept;

  /**
   * Indicates the order in which the sequence should be considered when putting multiple 'relative' elements together
   */
  ordinalPosition?: number;
  /**
   * Extension for ordinalPosition
   */
  _ordinalPosition?: IElement;

  /**
   * Indicates the nucleotide range in the composed sequence when multiple 'relative' elements are used together
   */
  sequenceRange?: IRange;

  /**
   * A sequence used as starting sequence
   */
  startingSequence?: IMolecularSequenceRelativeStartingSequence;

  /**
   * Changes in sequence from the starting sequence
   */
  edit?: IMolecularSequenceRelativeEdit[];

}
