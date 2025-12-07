import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceSourceMaterialOrganismAuthor,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSourceMaterialOrganismAuthor */
const SUBSTANCE_SOURCE_MATERIAL_ORGANISM_AUTHOR_PROPERTIES = [
  'authorType',
  'authorDescription',
  '_authorDescription',
] as const;

/**
 * SubstanceSourceMaterialOrganismAuthor - 4.9.13.6.1 Author type (Conditional)
 *
 * @see https://hl7.org/fhir/R4/substancesourcematerialorganismauthor.html
 *
 * @example
 * const substanceSourceMaterialOrganismAuthor = new SubstanceSourceMaterialOrganismAuthor({
 *   // ... properties
 * });
 */
export class SubstanceSourceMaterialOrganismAuthor extends BackboneElement implements ISubstanceSourceMaterialOrganismAuthor {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name */
  authorType?: ICodeableConcept;

  /** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank) */
  authorDescription?: string;

  /** Extension for authorDescription */
  _authorDescription?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSourceMaterialOrganismAuthor>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SOURCE_MATERIAL_ORGANISM_AUTHOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSourceMaterialOrganismAuthor from a JSON object
   */
  static fromJSON(json: ISubstanceSourceMaterialOrganismAuthor): SubstanceSourceMaterialOrganismAuthor {
    return new SubstanceSourceMaterialOrganismAuthor(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSourceMaterialOrganismAuthor with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSourceMaterialOrganismAuthor>): SubstanceSourceMaterialOrganismAuthor {
    return new SubstanceSourceMaterialOrganismAuthor({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSourceMaterialOrganismAuthor by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSourceMaterialOrganismAuthor) => Partial<ISubstanceSourceMaterialOrganismAuthor>): SubstanceSourceMaterialOrganismAuthor {
    const currentData = this.toJSON();
    return new SubstanceSourceMaterialOrganismAuthor({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSourceMaterialOrganismAuthor)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSourceMaterialOrganismAuthor {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SOURCE_MATERIAL_ORGANISM_AUTHOR_PROPERTIES);
    return result as ISubstanceSourceMaterialOrganismAuthor;
  }

  /**
   * Create a deep clone of this SubstanceSourceMaterialOrganismAuthor
   */
  clone(): SubstanceSourceMaterialOrganismAuthor {
    return new SubstanceSourceMaterialOrganismAuthor(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSourceMaterialOrganismAuthor
   */
  toString(): string {
    const parts: string[] = ['SubstanceSourceMaterialOrganismAuthor'];
    return parts.join(', ');
  }
}
