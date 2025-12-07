import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ISubstanceSpecificationName,
  ISubstanceSpecificationNameOfficial,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationName */
const SUBSTANCE_SPECIFICATION_NAME_PROPERTIES = [
  'name',
  '_name',
  'type',
  'status',
  'preferred',
  '_preferred',
  'language',
  'domain',
  'jurisdiction',
  'synonym',
  'translation',
  'official',
  'source',
] as const;

/**
 * SubstanceSpecificationName - Names applicable to this substance
 *
 * @see https://hl7.org/fhir/R4/substancespecificationname.html
 *
 * @example
 * const substanceSpecificationName = new SubstanceSpecificationName({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationName extends BackboneElement implements ISubstanceSpecificationName {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The actual name */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Name type */
  type?: ICodeableConcept;

  /** The status of the name */
  status?: ICodeableConcept;

  /** If this is the preferred name for this substance */
  preferred?: boolean;

  /** Extension for preferred */
  _preferred?: IElement;

  /** Language of the name */
  language?: ICodeableConcept[];

  /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive */
  domain?: ICodeableConcept[];

  /** The jurisdiction where this name applies */
  jurisdiction?: ICodeableConcept[];

  /** A synonym of this name */
  synonym?: ISubstanceSpecificationName[];

  /** A translation for this name */
  translation?: ISubstanceSpecificationName[];

  /** Details of the official nature of this name */
  official?: ISubstanceSpecificationNameOfficial[];

  /** Supporting literature */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationName>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_NAME_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationName from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationName): SubstanceSpecificationName {
    return new SubstanceSpecificationName(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationName with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationName>): SubstanceSpecificationName {
    return new SubstanceSpecificationName({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationName by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationName) => Partial<ISubstanceSpecificationName>): SubstanceSpecificationName {
    const currentData = this.toJSON();
    return new SubstanceSpecificationName({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationName)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationName {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_NAME_PROPERTIES);
    return result as ISubstanceSpecificationName;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationName
   */
  clone(): SubstanceSpecificationName {
    return new SubstanceSpecificationName(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationName
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationName'];
    return parts.join(', ');
  }
}
