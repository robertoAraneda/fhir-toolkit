import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * MolecularSequenceStructureVariantInner Interface
 * 
 * Structural variant inner
 * 
 *
 * @see https://hl7.org/fhir/R4B/molecularsequencestructurevariantinner.html
 */
export interface IMolecularSequenceStructureVariantInner extends IBackboneElement {
  /**
   * Structural variant inner start
   */
  start?: number;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * Structural variant inner end
   */
  end?: number;
  /**
   * Extension for end
   */
  _end?: IElement;

}
