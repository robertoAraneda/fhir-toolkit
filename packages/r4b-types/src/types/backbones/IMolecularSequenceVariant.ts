import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * MolecularSequenceVariant Interface
 * 
 * Variant in sequence
 * 
 *
 * @see https://hl7.org/fhir/R4/molecularsequencevariant.html
 */
export interface IMolecularSequenceVariant extends IBackboneElement {
  /**
   * Start position of the variant on the  reference sequence
   */
  start?: number;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * End position of the variant on the reference sequence
   */
  end?: number;
  /**
   * Extension for end
   */
  _end?: IElement;

  /**
   * Allele that was observed
   */
  observedAllele?: string;
  /**
   * Extension for observedAllele
   */
  _observedAllele?: IElement;

  /**
   * Allele in the reference sequence
   */
  referenceAllele?: string;
  /**
   * Extension for referenceAllele
   */
  _referenceAllele?: IElement;

  /**
   * Extended CIGAR string for aligning the sequence with reference bases
   */
  cigar?: string;
  /**
   * Extension for cigar
   */
  _cigar?: IElement;

  /**
   * Pointer to observed variant information
   */
  variantPointer?: IReference<'Observation'>;

}
