import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceNucleicAcid,
  ISubstanceNucleicAcidSubunit,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceNucleicAcid */
const SUBSTANCE_NUCLEIC_ACID_PROPERTIES = [
  'sequenceType',
  'numberOfSubunits',
  '_numberOfSubunits',
  'areaOfHybridisation',
  '_areaOfHybridisation',
  'oligoNucleotideType',
  'subunit',
] as const;

/**
 * SubstanceNucleicAcid - Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 *
 * @see https://hl7.org/fhir/R5/substancenucleicacid.html
 *
 * @example
 * const substanceNucleicAcid = new SubstanceNucleicAcid({
 *   // ... properties
 * });
 */
export class SubstanceNucleicAcid extends DomainResource implements ISubstanceNucleicAcid {
  readonly resourceType = 'SubstanceNucleicAcid' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of the sequence shall be specified based on a controlled vocabulary */
  sequenceType?: ICodeableConcept;

  /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit */
  numberOfSubunits?: number;

  /** Extension for numberOfSubunits */
  _numberOfSubunits?: IElement;

  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” */
  areaOfHybridisation?: string;

  /** Extension for areaOfHybridisation */
  _areaOfHybridisation?: IElement;

  /** (TBC) */
  oligoNucleotideType?: ICodeableConcept;

  /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times */
  subunit?: ISubstanceNucleicAcidSubunit[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISubstanceNucleicAcid>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_NUCLEIC_ACID_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceNucleicAcid from a JSON object
   */
  static fromJSON(json: ISubstanceNucleicAcid): SubstanceNucleicAcid {
    return new SubstanceNucleicAcid(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceNucleicAcid with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceNucleicAcid>): SubstanceNucleicAcid {
    return new SubstanceNucleicAcid({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceNucleicAcid by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceNucleicAcid) => Partial<ISubstanceNucleicAcid>): SubstanceNucleicAcid {
    const currentData = this.toJSON();
    return new SubstanceNucleicAcid({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceNucleicAcid)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceNucleicAcid {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSTANCE_NUCLEIC_ACID_PROPERTIES);
    return result as ISubstanceNucleicAcid;
  }

  /**
   * Create a deep clone of this SubstanceNucleicAcid
   */
  clone(): SubstanceNucleicAcid {
    return new SubstanceNucleicAcid(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceNucleicAcid
   */
  toString(): string {
    const parts: string[] = ['SubstanceNucleicAcid'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
