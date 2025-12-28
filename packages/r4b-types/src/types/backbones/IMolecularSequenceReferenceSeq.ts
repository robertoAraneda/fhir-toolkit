import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { OrientationTypeType, StrandTypeType } from '../../valuesets/index.js';

/**
 * MolecularSequenceReferenceSeq Interface
 * 
 * A sequence used as reference
 * 
 *
 * @see https://hl7.org/fhir/R4B/molecularsequencereferenceseq.html
 */
export interface IMolecularSequenceReferenceSeq extends IBackboneElement {
  /**
   * Chromosome containing genetic finding
   */
  chromosome?: ICodeableConcept;

  /**
   * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'
   */
  genomeBuild?: string;
  /**
   * Extension for genomeBuild
   */
  _genomeBuild?: IElement;

  /**
   * sense | antisense
   */
  orientation?: OrientationTypeType;
  /**
   * Extension for orientation
   */
  _orientation?: IElement;

  /**
   * Reference identifier
   */
  referenceSeqId?: ICodeableConcept;

  /**
   * A pointer to another MolecularSequence entity as reference sequence
   */
  referenceSeqPointer?: IReference<'MolecularSequence'>;

  /**
   * A string to represent reference sequence
   */
  referenceSeqString?: string;
  /**
   * Extension for referenceSeqString
   */
  _referenceSeqString?: IElement;

  /**
   * watson | crick
   */
  strand?: StrandTypeType;
  /**
   * Extension for strand
   */
  _strand?: IElement;

  /**
   * Start position of the window on the  reference sequence
   */
  windowStart?: number;
  /**
   * Extension for windowStart
   */
  _windowStart?: IElement;

  /**
   * End position of the window on the reference sequence
   */
  windowEnd?: number;
  /**
   * Extension for windowEnd
   */
  _windowEnd?: IElement;

}
