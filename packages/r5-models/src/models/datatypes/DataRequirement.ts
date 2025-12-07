import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IDataRequirement,
  IDataRequirementCodeFilter,
  IDataRequirementDateFilter,
  IDataRequirementSort,
  IDataRequirementValueFilter,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DataRequirement */
const DATA_REQUIREMENT_PROPERTIES = [
  'type',
  '_type',
  'profile',
  '_profile',
  'subjectCodeableConcept',
  'subjectReference',
  'mustSupport',
  '_mustSupport',
  'codeFilter',
  'dateFilter',
  'valueFilter',
  'limit',
  '_limit',
  'sort',
] as const;

/**
 * DataRequirement - Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 *
 * @see https://hl7.org/fhir/R4/datarequirement.html
 *
 * @example
 * const dataRequirement = new DataRequirement({
 *   // ... properties
 * });
 */
export class DataRequirement extends Element implements IDataRequirement {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of the required data */
  type: string;

  /** Extension for type */
  _type?: IElement;

  /** The profile of the required data */
  profile?: string[];

  /** Extension for profile */
  _profile?: IElement;

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subjectCodeableConcept?: ICodeableConcept;

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subjectReference?: IReference;

  /** Indicates specific structure elements that are referenced by the knowledge module */
  mustSupport?: string[];

  /** Extension for mustSupport */
  _mustSupport?: IElement;

  /** What codes are expected */
  codeFilter?: IDataRequirementCodeFilter[];

  /** What dates/date ranges are expected */
  dateFilter?: IDataRequirementDateFilter[];

  /** What values are expected */
  valueFilter?: IDataRequirementValueFilter[];

  /** Number of results */
  limit?: number;

  /** Extension for limit */
  _limit?: IElement;

  /** Order of the results */
  sort?: IDataRequirementSort[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDataRequirement>) {
    super(data);
    if (data) {
      this.assignProps(data, DATA_REQUIREMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DataRequirement from a JSON object
   */
  static fromJSON(json: IDataRequirement): DataRequirement {
    return new DataRequirement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DataRequirement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDataRequirement>): DataRequirement {
    return new DataRequirement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DataRequirement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDataRequirement) => Partial<IDataRequirement>): DataRequirement {
    const currentData = this.toJSON();
    return new DataRequirement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDataRequirement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDataRequirement {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, DATA_REQUIREMENT_PROPERTIES);
    return result as IDataRequirement;
  }

  /**
   * Create a deep clone of this DataRequirement
   */
  clone(): DataRequirement {
    return new DataRequirement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DataRequirement
   */
  toString(): string {
    const parts: string[] = ['DataRequirement'];
    return parts.join(', ');
  }
}
