import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  IElement,
  IIdentifier,
  ISubstanceProteinSubunit,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceProteinSubunit */
const SUBSTANCE_PROTEIN_SUBUNIT_PROPERTIES = [
  'subunit',
  '_subunit',
  'sequence',
  '_sequence',
  'length',
  '_length',
  'sequenceAttachment',
  'nTerminalModificationId',
  'nTerminalModification',
  '_nTerminalModification',
  'cTerminalModificationId',
  'cTerminalModification',
  '_cTerminalModification',
] as const;

/**
 * SubstanceProteinSubunit - This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times
 *
 * @see https://hl7.org/fhir/R4/substanceproteinsubunit.html
 *
 * @example
 * const substanceProteinSubunit = new SubstanceProteinSubunit({
 *   // ... properties
 * });
 */
export class SubstanceProteinSubunit extends BackboneElement implements ISubstanceProteinSubunit {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
  subunit?: number;

  /** Extension for subunit */
  _subunit?: IElement;

  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence */
  sequence?: string;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Length of linear sequences of amino acids contained in the subunit */
  length?: number;

  /** Extension for length */
  _length?: IElement;

  /** The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence */
  sequenceAttachment?: IAttachment;

  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID */
  nTerminalModificationId?: IIdentifier;

  /** The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified */
  nTerminalModification?: string;

  /** Extension for nTerminalModification */
  _nTerminalModification?: IElement;

  /** Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID */
  cTerminalModificationId?: IIdentifier;

  /** The modification at the C-terminal shall be specified */
  cTerminalModification?: string;

  /** Extension for cTerminalModification */
  _cTerminalModification?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceProteinSubunit>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_PROTEIN_SUBUNIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceProteinSubunit from a JSON object
   */
  static fromJSON(json: ISubstanceProteinSubunit): SubstanceProteinSubunit {
    return new SubstanceProteinSubunit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceProteinSubunit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceProteinSubunit>): SubstanceProteinSubunit {
    return new SubstanceProteinSubunit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceProteinSubunit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceProteinSubunit) => Partial<ISubstanceProteinSubunit>): SubstanceProteinSubunit {
    const currentData = this.toJSON();
    return new SubstanceProteinSubunit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceProteinSubunit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceProteinSubunit {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_PROTEIN_SUBUNIT_PROPERTIES);
    return result as ISubstanceProteinSubunit;
  }

  /**
   * Create a deep clone of this SubstanceProteinSubunit
   */
  clone(): SubstanceProteinSubunit {
    return new SubstanceProteinSubunit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceProteinSubunit
   */
  toString(): string {
    const parts: string[] = ['SubstanceProteinSubunit'];
    return parts.join(', ');
  }
}
