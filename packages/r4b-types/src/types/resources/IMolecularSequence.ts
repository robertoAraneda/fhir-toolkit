import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMolecularSequenceQuality } from '../backbones/IMolecularSequenceQuality.js';
import type { IMolecularSequenceReferenceSeq } from '../backbones/IMolecularSequenceReferenceSeq.js';
import type { IMolecularSequenceRepository } from '../backbones/IMolecularSequenceRepository.js';
import type { IMolecularSequenceStructureVariant } from '../backbones/IMolecularSequenceStructureVariant.js';
import type { IMolecularSequenceVariant } from '../backbones/IMolecularSequenceVariant.js';
import type { SequenceTypeType } from '../../valuesets/index.js';

/**
 * MolecularSequence Interface
 * 
 * Raw data describing a biological sequence.
 * 
 *
 * @see https://hl7.org/fhir/R4/molecularsequence.html
 */
export interface IMolecularSequence extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MolecularSequence';

  /**
   * Unique ID for this particular sequence. This is a FHIR-defined id
   */
  identifier?: IIdentifier[];

  /**
   * aa | dna | rna
   */
  type?: SequenceTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end)
   */
  coordinateSystem: number;
  /**
   * Extension for coordinateSystem
   */
  _coordinateSystem?: IElement;

  /**
   * Who and/or what this is about
   */
  patient?: IReference<'Patient'>;

  /**
   * Specimen used for sequencing
   */
  specimen?: IReference<'Specimen'>;

  /**
   * The method for sequencing
   */
  device?: IReference<'Device'>;

  /**
   * Who should be responsible for test result
   */
  performer?: IReference<'Organization'>;

  /**
   * The number of copies of the sequence of interest.  (RNASeq)
   */
  quantity?: IQuantity;

  /**
   * A sequence used as reference
   */
  referenceSeq?: IMolecularSequenceReferenceSeq;

  /**
   * Variant in sequence
   */
  variant?: IMolecularSequenceVariant[];

  /**
   * Sequence that was observed
   */
  observedSeq?: string;
  /**
   * Extension for observedSeq
   */
  _observedSeq?: IElement;

  /**
   * An set of value as quality of sequence
   */
  quality?: IMolecularSequenceQuality[];

  /**
   * Average number of reads representing a given nucleotide in the reconstructed sequence
   */
  readCoverage?: number;
  /**
   * Extension for readCoverage
   */
  _readCoverage?: IElement;

  /**
   * External repository which contains detailed report related with observedSeq in this resource
   */
  repository?: IMolecularSequenceRepository[];

  /**
   * Pointer to next atomic sequence
   */
  pointer?: IReference<'MolecularSequence'>[];

  /**
   * Structural variant
   */
  structureVariant?: IMolecularSequenceStructureVariant[];

}
