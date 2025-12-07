import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDataRequirementDateFilter,
  IDuration,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DataRequirementDateFilter */
const DATA_REQUIREMENT_DATE_FILTER_PROPERTIES = [
  'path',
  '_path',
  'searchParam',
  '_searchParam',
  'valueDateTime',
  '_valueDateTime',
  'valuePeriod',
  'valueDuration',
] as const;

/**
 * DataRequirementDateFilter - What dates/date ranges are expected
 *
 * @see https://hl7.org/fhir/R4/datarequirementdatefilter.html
 *
 * @example
 * const dataRequirementDateFilter = new DataRequirementDateFilter({
 *   // ... properties
 * });
 */
export class DataRequirementDateFilter extends BackboneElement implements IDataRequirementDateFilter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A date-valued attribute to filter on */
  path?: string;

  /** Extension for path */
  _path?: IElement;

  /** A date valued parameter to search on */
  searchParam?: string;

  /** Extension for searchParam */
  _searchParam?: IElement;

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

  constructor(data?: Partial<IDataRequirementDateFilter>) {
    super(data);
    if (data) {
      this.assignProps(data, DATA_REQUIREMENT_DATE_FILTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DataRequirementDateFilter from a JSON object
   */
  static fromJSON(json: IDataRequirementDateFilter): DataRequirementDateFilter {
    return new DataRequirementDateFilter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DataRequirementDateFilter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDataRequirementDateFilter>): DataRequirementDateFilter {
    return new DataRequirementDateFilter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DataRequirementDateFilter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDataRequirementDateFilter) => Partial<IDataRequirementDateFilter>): DataRequirementDateFilter {
    const currentData = this.toJSON();
    return new DataRequirementDateFilter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDataRequirementDateFilter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDataRequirementDateFilter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DATA_REQUIREMENT_DATE_FILTER_PROPERTIES);
    return result as IDataRequirementDateFilter;
  }

  /**
   * Create a deep clone of this DataRequirementDateFilter
   */
  clone(): DataRequirementDateFilter {
    return new DataRequirementDateFilter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DataRequirementDateFilter
   */
  toString(): string {
    const parts: string[] = ['DataRequirementDateFilter'];
    return parts.join(', ');
  }
}
