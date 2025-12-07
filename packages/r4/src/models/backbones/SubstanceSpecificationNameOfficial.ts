import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceSpecificationNameOfficial,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationNameOfficial */
const SUBSTANCE_SPECIFICATION_NAME_OFFICIAL_PROPERTIES = [
  'authority',
  'status',
  'date',
  '_date',
] as const;

/**
 * SubstanceSpecificationNameOfficial - Details of the official nature of this name
 *
 * @see https://hl7.org/fhir/R4/substancespecificationnameofficial.html
 *
 * @example
 * const substanceSpecificationNameOfficial = new SubstanceSpecificationNameOfficial({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationNameOfficial extends BackboneElement implements ISubstanceSpecificationNameOfficial {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Which authority uses this official name */
  authority?: ICodeableConcept;

  /** The status of the official name */
  status?: ICodeableConcept;

  /** Date of official name change */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationNameOfficial>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_NAME_OFFICIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationNameOfficial from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationNameOfficial): SubstanceSpecificationNameOfficial {
    return new SubstanceSpecificationNameOfficial(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationNameOfficial with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationNameOfficial>): SubstanceSpecificationNameOfficial {
    return new SubstanceSpecificationNameOfficial({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationNameOfficial by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationNameOfficial) => Partial<ISubstanceSpecificationNameOfficial>): SubstanceSpecificationNameOfficial {
    const currentData = this.toJSON();
    return new SubstanceSpecificationNameOfficial({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationNameOfficial)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationNameOfficial {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_NAME_OFFICIAL_PROPERTIES);
    return result as ISubstanceSpecificationNameOfficial;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationNameOfficial
   */
  clone(): SubstanceSpecificationNameOfficial {
    return new SubstanceSpecificationNameOfficial(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationNameOfficial
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationNameOfficial'];
    return parts.join(', ');
  }
}
