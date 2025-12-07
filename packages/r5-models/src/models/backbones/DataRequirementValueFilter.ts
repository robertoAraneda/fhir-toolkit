import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDataRequirementValueFilter,
  IDuration,
  IElement,
  IPeriod,
  ValueFilterComparatorType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DataRequirementValueFilter */
const DATA_REQUIREMENT_VALUE_FILTER_PROPERTIES = [
  'path',
  '_path',
  'searchParam',
  '_searchParam',
  'comparator',
  '_comparator',
  'valueDateTime',
  '_valueDateTime',
  'valuePeriod',
  'valueDuration',
] as const;

/**
 * DataRequirementValueFilter - What values are expected
 *
 * @see https://hl7.org/fhir/R4/datarequirementvaluefilter.html
 *
 * @example
 * const dataRequirementValueFilter = new DataRequirementValueFilter({
 *   // ... properties
 * });
 */
export class DataRequirementValueFilter extends BackboneElement implements IDataRequirementValueFilter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** An attribute to filter on */
  path?: string;

  /** Extension for path */
  _path?: IElement;

  /** A parameter to search on */
  searchParam?: string;

  /** Extension for searchParam */
  _searchParam?: IElement;

  /** eq | gt | lt | ge | le | sa | eb */
  comparator?: ValueFilterComparatorType;

  /** Extension for comparator */
  _comparator?: IElement;

  /** The value of the filter, as a Period, DateTime, or Duration value */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** The value of the filter, as a Period, DateTime, or Duration value */
  valuePeriod?: IPeriod;

  /** The value of the filter, as a Period, DateTime, or Duration value */
  valueDuration?: IDuration;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDataRequirementValueFilter>) {
    super(data);
    if (data) {
      this.assignProps(data, DATA_REQUIREMENT_VALUE_FILTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DataRequirementValueFilter from a JSON object
   */
  static fromJSON(json: IDataRequirementValueFilter): DataRequirementValueFilter {
    return new DataRequirementValueFilter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DataRequirementValueFilter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDataRequirementValueFilter>): DataRequirementValueFilter {
    return new DataRequirementValueFilter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DataRequirementValueFilter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDataRequirementValueFilter) => Partial<IDataRequirementValueFilter>): DataRequirementValueFilter {
    const currentData = this.toJSON();
    return new DataRequirementValueFilter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDataRequirementValueFilter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDataRequirementValueFilter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DATA_REQUIREMENT_VALUE_FILTER_PROPERTIES);
    return result as IDataRequirementValueFilter;
  }

  /**
   * Create a deep clone of this DataRequirementValueFilter
   */
  clone(): DataRequirementValueFilter {
    return new DataRequirementValueFilter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DataRequirementValueFilter
   */
  toString(): string {
    const parts: string[] = ['DataRequirementValueFilter'];
    return parts.join(', ');
  }
}
