import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IIdentifier,
  ISubstanceNucleicAcidSubunitLinkage,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceNucleicAcidSubunitLinkage */
const SUBSTANCE_NUCLEIC_ACID_SUBUNIT_LINKAGE_PROPERTIES = [
  'connectivity',
  '_connectivity',
  'identifier',
  'name',
  '_name',
  'residueSite',
  '_residueSite',
] as const;

/**
 * SubstanceNucleicAcidSubunitLinkage - The linkages between sugar residues will also be captured
 *
 * @see https://hl7.org/fhir/R4/substancenucleicacidsubunitlinkage.html
 *
 * @example
 * const substanceNucleicAcidSubunitLinkage = new SubstanceNucleicAcidSubunitLinkage({
 *   // ... properties
 * });
 */
export class SubstanceNucleicAcidSubunitLinkage extends BackboneElement implements ISubstanceNucleicAcidSubunitLinkage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified */
  connectivity?: string;

  /** Extension for connectivity */
  _connectivity?: IElement;

  /** Each linkage will be registered as a fragment and have an ID */
  identifier?: IIdentifier;

  /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Residues shall be captured as described in 5.3.6.8.3 */
  residueSite?: string;

  /** Extension for residueSite */
  _residueSite?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceNucleicAcidSubunitLinkage>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_NUCLEIC_ACID_SUBUNIT_LINKAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceNucleicAcidSubunitLinkage from a JSON object
   */
  static fromJSON(json: ISubstanceNucleicAcidSubunitLinkage): SubstanceNucleicAcidSubunitLinkage {
    return new SubstanceNucleicAcidSubunitLinkage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceNucleicAcidSubunitLinkage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceNucleicAcidSubunitLinkage>): SubstanceNucleicAcidSubunitLinkage {
    return new SubstanceNucleicAcidSubunitLinkage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceNucleicAcidSubunitLinkage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceNucleicAcidSubunitLinkage) => Partial<ISubstanceNucleicAcidSubunitLinkage>): SubstanceNucleicAcidSubunitLinkage {
    const currentData = this.toJSON();
    return new SubstanceNucleicAcidSubunitLinkage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceNucleicAcidSubunitLinkage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceNucleicAcidSubunitLinkage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_NUCLEIC_ACID_SUBUNIT_LINKAGE_PROPERTIES);
    return result as ISubstanceNucleicAcidSubunitLinkage;
  }

  /**
   * Create a deep clone of this SubstanceNucleicAcidSubunitLinkage
   */
  clone(): SubstanceNucleicAcidSubunitLinkage {
    return new SubstanceNucleicAcidSubunitLinkage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceNucleicAcidSubunitLinkage
   */
  toString(): string {
    const parts: string[] = ['SubstanceNucleicAcidSubunitLinkage'];
    return parts.join(', ');
  }
}
