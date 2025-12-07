import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  ISubstanceNucleicAcidSubunit,
  ISubstanceNucleicAcidSubunitLinkage,
  ISubstanceNucleicAcidSubunitSugar,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceNucleicAcidSubunit */
const SUBSTANCE_NUCLEIC_ACID_SUBUNIT_PROPERTIES = [
  'subunit',
  '_subunit',
  'sequence',
  '_sequence',
  'length',
  '_length',
  'sequenceAttachment',
  'fivePrime',
  'threePrime',
  'linkage',
  'sugar',
] as const;

/**
 * SubstanceNucleicAcidSubunit - Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
 *
 * @see https://hl7.org/fhir/R4/substancenucleicacidsubunit.html
 *
 * @example
 * const substanceNucleicAcidSubunit = new SubstanceNucleicAcidSubunit({
 *   // ... properties
 * });
 */
export class SubstanceNucleicAcidSubunit extends BackboneElement implements ISubstanceNucleicAcidSubunit {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
  subunit?: number;

  /** Extension for subunit */
  _subunit?: IElement;

  /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured */
  sequence?: string;

  /** Extension for sequence */
  _sequence?: IElement;

  /** The length of the sequence shall be captured */
  length?: number;

  /** Extension for length */
  _length?: IElement;

  /** (TBC) */
  sequenceAttachment?: IAttachment;

  /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant */
  fivePrime?: ICodeableConcept;

  /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant */
  threePrime?: ICodeableConcept;

  /** The linkages between sugar residues will also be captured */
  linkage?: ISubstanceNucleicAcidSubunitLinkage[];

  /** 5.3.6.8.1 Sugar ID (Mandatory) */
  sugar?: ISubstanceNucleicAcidSubunitSugar[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceNucleicAcidSubunit>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_NUCLEIC_ACID_SUBUNIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceNucleicAcidSubunit from a JSON object
   */
  static fromJSON(json: ISubstanceNucleicAcidSubunit): SubstanceNucleicAcidSubunit {
    return new SubstanceNucleicAcidSubunit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceNucleicAcidSubunit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceNucleicAcidSubunit>): SubstanceNucleicAcidSubunit {
    return new SubstanceNucleicAcidSubunit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceNucleicAcidSubunit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceNucleicAcidSubunit) => Partial<ISubstanceNucleicAcidSubunit>): SubstanceNucleicAcidSubunit {
    const currentData = this.toJSON();
    return new SubstanceNucleicAcidSubunit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceNucleicAcidSubunit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceNucleicAcidSubunit {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_NUCLEIC_ACID_SUBUNIT_PROPERTIES);
    return result as ISubstanceNucleicAcidSubunit;
  }

  /**
   * Create a deep clone of this SubstanceNucleicAcidSubunit
   */
  clone(): SubstanceNucleicAcidSubunit {
    return new SubstanceNucleicAcidSubunit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceNucleicAcidSubunit
   */
  toString(): string {
    const parts: string[] = ['SubstanceNucleicAcidSubunit'];
    return parts.join(', ');
  }
}
