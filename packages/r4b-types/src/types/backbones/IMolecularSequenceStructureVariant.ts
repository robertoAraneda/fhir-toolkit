import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMolecularSequenceStructureVariantInner } from './IMolecularSequenceStructureVariantInner.js';
import type { IMolecularSequenceStructureVariantOuter } from './IMolecularSequenceStructureVariantOuter.js';

/**
 * MolecularSequenceStructureVariant Interface
 * 
 * Structural variant
 * 
 *
 * @see https://hl7.org/fhir/R4B/molecularsequencestructurevariant.html
 */
export interface IMolecularSequenceStructureVariant extends IBackboneElement {
  /**
   * Structural variant change type
   */
  variantType?: ICodeableConcept;

  /**
   * Does the structural variant have base pair resolution breakpoints?
   */
  exact?: boolean;
  /**
   * Extension for exact
   */
  _exact?: IElement;

  /**
   * Structural variant length
   */
  length?: number;
  /**
   * Extension for length
   */
  _length?: IElement;

  /**
   * Structural variant outer
   */
  outer?: IMolecularSequenceStructureVariantOuter;

  /**
   * Structural variant inner
   */
  inner?: IMolecularSequenceStructureVariantInner;

}
