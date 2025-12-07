import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IIdentifier,
  ISubstanceNucleicAcidSubunitSugar,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceNucleicAcidSubunitSugar */
const SUBSTANCE_NUCLEIC_ACID_SUBUNIT_SUGAR_PROPERTIES = [
  'identifier',
  'name',
  '_name',
  'residueSite',
  '_residueSite',
] as const;

/**
 * SubstanceNucleicAcidSubunitSugar - 5.3.6.8.1 Sugar ID (Mandatory)
 *
 * @see https://hl7.org/fhir/R4/substancenucleicacidsubunitsugar.html
 *
 * @example
 * const substanceNucleicAcidSubunitSugar = new SubstanceNucleicAcidSubunitSugar({
 *   // ... properties
 * });
 */
export class SubstanceNucleicAcidSubunitSugar extends BackboneElement implements ISubstanceNucleicAcidSubunitSugar {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The Substance ID of the sugar or sugar-like component that make up the nucleotide */
  identifier?: IIdentifier;

  /** The name of the sugar or sugar-like component that make up the nucleotide */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above */
  residueSite?: string;

  /** Extension for residueSite */
  _residueSite?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceNucleicAcidSubunitSugar>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_NUCLEIC_ACID_SUBUNIT_SUGAR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceNucleicAcidSubunitSugar from a JSON object
   */
  static fromJSON(json: ISubstanceNucleicAcidSubunitSugar): SubstanceNucleicAcidSubunitSugar {
    return new SubstanceNucleicAcidSubunitSugar(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceNucleicAcidSubunitSugar with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceNucleicAcidSubunitSugar>): SubstanceNucleicAcidSubunitSugar {
    return new SubstanceNucleicAcidSubunitSugar({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceNucleicAcidSubunitSugar by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceNucleicAcidSubunitSugar) => Partial<ISubstanceNucleicAcidSubunitSugar>): SubstanceNucleicAcidSubunitSugar {
    const currentData = this.toJSON();
    return new SubstanceNucleicAcidSubunitSugar({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceNucleicAcidSubunitSugar)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceNucleicAcidSubunitSugar {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_NUCLEIC_ACID_SUBUNIT_SUGAR_PROPERTIES);
    return result as ISubstanceNucleicAcidSubunitSugar;
  }

  /**
   * Create a deep clone of this SubstanceNucleicAcidSubunitSugar
   */
  clone(): SubstanceNucleicAcidSubunitSugar {
    return new SubstanceNucleicAcidSubunitSugar(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceNucleicAcidSubunitSugar
   */
  toString(): string {
    const parts: string[] = ['SubstanceNucleicAcidSubunitSugar'];
    return parts.join(', ');
  }
}
