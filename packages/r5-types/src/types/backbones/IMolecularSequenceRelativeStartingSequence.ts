import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { OrientationTypeType, StrandTypeType } from '../../valuesets/index.js';

/**
 * MolecularSequenceRelativeStartingSequence Interface
 * 
 * A sequence used as starting sequence
 * 
 *
 * @see https://hl7.org/fhir/R4/molecularsequencerelativestartingsequence.html
 */
export interface IMolecularSequenceRelativeStartingSequence extends IBackboneElement {
  /**
   * The genome assembly used for starting sequence, e.g. GRCh38
   */
  genomeAssembly?: ICodeableConcept;

  /**
   * Chromosome Identifier
   */
  chromosome?: ICodeableConcept;

  /**
   * The reference sequence that represents the starting sequence
   */
  sequenceCodeableConcept?: ICodeableConcept;

  /**
   * The reference sequence that represents the starting sequence
   */
  sequenceString?: string;
  /**
   * Extension for sequenceString
   */
  _sequenceString?: IElement;

  /**
   * The reference sequence that represents the starting sequence
   */
  sequenceReference?: IReference;

  /**
   * Start position of the window on the starting sequence
   */
  windowStart?: number;
  /**
   * Extension for windowStart
   */
  _windowStart?: IElement;

  /**
   * End position of the window on the starting sequence
   */
  windowEnd?: number;
  /**
   * Extension for windowEnd
   */
  _windowEnd?: IElement;

  /**
   * sense | antisense
   */
  orientation?: OrientationTypeType;
  /**
   * Extension for orientation
   */
  _orientation?: IElement;

  /**
   * watson | crick
   */
  strand?: StrandTypeType;
  /**
   * Extension for strand
   */
  _strand?: IElement;

}
