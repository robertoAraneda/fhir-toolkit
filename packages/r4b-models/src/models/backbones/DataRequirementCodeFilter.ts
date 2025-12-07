import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IDataRequirementCodeFilter,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DataRequirementCodeFilter */
const DATA_REQUIREMENT_CODE_FILTER_PROPERTIES = [
  'path',
  '_path',
  'searchParam',
  '_searchParam',
  'valueSet',
  '_valueSet',
  'code',
] as const;

/**
 * DataRequirementCodeFilter - What codes are expected
 *
 * @see https://hl7.org/fhir/R4/datarequirementcodefilter.html
 *
 * @example
 * const dataRequirementCodeFilter = new DataRequirementCodeFilter({
 *   // ... properties
 * });
 */
export class DataRequirementCodeFilter extends BackboneElement implements IDataRequirementCodeFilter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A code-valued attribute to filter on */
  path?: string;

  /** Extension for path */
  _path?: IElement;

  /** A coded (token) parameter to search on */
  searchParam?: string;

  /** Extension for searchParam */
  _searchParam?: IElement;

  /** Valueset for the filter */
  valueSet?: string;

  /** Extension for valueSet */
  _valueSet?: IElement;

  /** What code is expected */
  code?: ICoding[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDataRequirementCodeFilter>) {
    super(data);
    if (data) {
      this.assignProps(data, DATA_REQUIREMENT_CODE_FILTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DataRequirementCodeFilter from a JSON object
   */
  static fromJSON(json: IDataRequirementCodeFilter): DataRequirementCodeFilter {
    return new DataRequirementCodeFilter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DataRequirementCodeFilter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDataRequirementCodeFilter>): DataRequirementCodeFilter {
    return new DataRequirementCodeFilter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DataRequirementCodeFilter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDataRequirementCodeFilter) => Partial<IDataRequirementCodeFilter>): DataRequirementCodeFilter {
    const currentData = this.toJSON();
    return new DataRequirementCodeFilter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDataRequirementCodeFilter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDataRequirementCodeFilter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DATA_REQUIREMENT_CODE_FILTER_PROPERTIES);
    return result as IDataRequirementCodeFilter;
  }

  /**
   * Create a deep clone of this DataRequirementCodeFilter
   */
  clone(): DataRequirementCodeFilter {
    return new DataRequirementCodeFilter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DataRequirementCodeFilter
   */
  toString(): string {
    const parts: string[] = ['DataRequirementCodeFilter'];
    return parts.join(', ');
  }
}
