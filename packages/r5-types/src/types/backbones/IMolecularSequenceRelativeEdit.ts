import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * MolecularSequenceRelativeEdit Interface
 * 
 * Changes in sequence from the starting sequence
 * 
 *
 * @see https://hl7.org/fhir/R5/molecularsequencerelativeedit.html
 */
export interface IMolecularSequenceRelativeEdit extends IBackboneElement {
  /**
   * Start position of the edit on the starting sequence
   */
  start?: number;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * End position of the edit on the starting sequence
   */
  end?: number;
  /**
   * Extension for end
   */
  _end?: IElement;

  /**
   * Allele that was observed
   */
  replacementSequence?: string;
  /**
   * Extension for replacementSequence
   */
  _replacementSequence?: IElement;

  /**
   * Allele in the starting sequence
   */
  replacedSequence?: string;
  /**
   * Extension for replacedSequence
   */
  _replacedSequence?: IElement;

}
