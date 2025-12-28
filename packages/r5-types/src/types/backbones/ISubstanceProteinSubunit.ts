import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * SubstanceProteinSubunit Interface
 * 
 * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
 * 
 *
 * @see https://hl7.org/fhir/R5/substanceproteinsubunit.html
 */
export interface ISubstanceProteinSubunit extends IBackboneElement {
  /**
   * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts
   */
  subunit?: number;
  /**
   * Extension for subunit
   */
  _subunit?: IElement;

  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence
   */
  sequence?: string;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Length of linear sequences of amino acids contained in the subunit
   */
  length?: number;
  /**
   * Extension for length
   */
  _length?: IElement;

  /**
   * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence
   */
  sequenceAttachment?: IAttachment;

  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID
   */
  nTerminalModificationId?: IIdentifier;

  /**
   * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified
   */
  nTerminalModification?: string;
  /**
   * Extension for nTerminalModification
   */
  _nTerminalModification?: IElement;

  /**
   * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID
   */
  cTerminalModificationId?: IIdentifier;

  /**
   * The modification at the C-terminal shall be specified
   */
  cTerminalModification?: string;
  /**
   * Extension for cTerminalModification
   */
  _cTerminalModification?: IElement;

}
