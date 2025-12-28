import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceProtein,
  ISubstanceProteinSubunit,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceProtein */
const SUBSTANCE_PROTEIN_PROPERTIES = [
  'sequenceType',
  'numberOfSubunits',
  '_numberOfSubunits',
  'disulfideLinkage',
  '_disulfideLinkage',
  'subunit',
] as const;

/**
 * SubstanceProtein - A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 *
 * @see https://hl7.org/fhir/R5/substanceprotein.html
 *
 * @example
 * const substanceProtein = new SubstanceProtein({
 *   // ... properties
 * });
 */
export class SubstanceProtein extends DomainResource implements ISubstanceProtein {
  readonly resourceType = 'SubstanceProtein' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence */
  sequenceType?: ICodeableConcept;

  /** Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable */
  numberOfSubunits?: number;

  /** Extension for numberOfSubunits */
  _numberOfSubunits?: IElement;

  /** The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions */
  disulfideLinkage?: string[];

  /** Extension for disulfideLinkage */
  _disulfideLinkage?: IElement;

  /** This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times */
  subunit?: ISubstanceProteinSubunit[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISubstanceProtein>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_PROTEIN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceProtein from a JSON object
   */
  static fromJSON(json: ISubstanceProtein): SubstanceProtein {
    return new SubstanceProtein(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceProtein with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceProtein>): SubstanceProtein {
    return new SubstanceProtein({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceProtein by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceProtein) => Partial<ISubstanceProtein>): SubstanceProtein {
    const currentData = this.toJSON();
    return new SubstanceProtein({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceProtein)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceProtein {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSTANCE_PROTEIN_PROPERTIES);
    return result as ISubstanceProtein;
  }

  /**
   * Create a deep clone of this SubstanceProtein
   */
  clone(): SubstanceProtein {
    return new SubstanceProtein(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceProtein
   */
  toString(): string {
    const parts: string[] = ['SubstanceProtein'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
