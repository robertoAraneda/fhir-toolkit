import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * MolecularSequenceStructureVariantOuter Interface
 * 
 * Structural variant outer
 * 
 *
 * @see https://hl7.org/fhir/R4B/molecularsequencestructurevariantouter.html
 */
export interface IMolecularSequenceStructureVariantOuter extends IBackboneElement {
  /**
   * Structural variant outer start
   */
  start?: number;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * Structural variant outer end
   */
  end?: number;
  /**
   * Extension for end
   */
  _end?: IElement;

}
