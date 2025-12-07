import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { ISubstanceNucleicAcidSubunitLinkage } from './ISubstanceNucleicAcidSubunitLinkage.js';
import type { ISubstanceNucleicAcidSubunitSugar } from './ISubstanceNucleicAcidSubunitSugar.js';

/**
 * SubstanceNucleicAcidSubunit Interface
 * 
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
 * 
 *
 * @see https://hl7.org/fhir/R4/substancenucleicacidsubunit.html
 */
export interface ISubstanceNucleicAcidSubunit extends IBackboneElement {
  /**
   * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts
   */
  subunit?: number;
  /**
   * Extension for subunit
   */
  _subunit?: IElement;

  /**
   * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured
   */
  sequence?: string;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * The length of the sequence shall be captured
   */
  length?: number;
  /**
   * Extension for length
   */
  _length?: IElement;

  /**
   * (TBC)
   */
  sequenceAttachment?: IAttachment;

  /**
   * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant
   */
  fivePrime?: ICodeableConcept;

  /**
   * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant
   */
  threePrime?: ICodeableConcept;

  /**
   * The linkages between sugar residues will also be captured
   */
  linkage?: ISubstanceNucleicAcidSubunitLinkage[];

  /**
   * 5.3.6.8.1 Sugar ID (Mandatory)
   */
  sugar?: ISubstanceNucleicAcidSubunitSugar[];

}
