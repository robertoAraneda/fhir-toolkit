import { BackboneElement } from '../base/BackboneElement.js';
import type {
  FilterOperatorType,
  IElement,
  IValueSetComposeIncludeFilter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSetComposeIncludeFilter */
const VALUE_SET_COMPOSE_INCLUDE_FILTER_PROPERTIES = [
  'property',
  '_property',
  'op',
  '_op',
  'value',
  '_value',
] as const;

/**
 * ValueSetComposeIncludeFilter - Select codes/concepts by their properties (including relationships)
 *
 * @see https://hl7.org/fhir/R4/valuesetcomposeincludefilter.html
 *
 * @example
 * const valueSetComposeIncludeFilter = new ValueSetComposeIncludeFilter({
 *   // ... properties
 * });
 */
export class ValueSetComposeIncludeFilter extends BackboneElement implements IValueSetComposeIncludeFilter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A property/filter defined by the code system */
  property: string;

  /** Extension for property */
  _property?: IElement;

  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists */
  op: FilterOperatorType;

  /** Extension for op */
  _op?: IElement;

  /** Code from the system, or regex criteria, or boolean value for exists */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSetComposeIncludeFilter>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_COMPOSE_INCLUDE_FILTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSetComposeIncludeFilter from a JSON object
   */
  static fromJSON(json: IValueSetComposeIncludeFilter): ValueSetComposeIncludeFilter {
    return new ValueSetComposeIncludeFilter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSetComposeIncludeFilter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSetComposeIncludeFilter>): ValueSetComposeIncludeFilter {
    return new ValueSetComposeIncludeFilter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSetComposeIncludeFilter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSetComposeIncludeFilter) => Partial<IValueSetComposeIncludeFilter>): ValueSetComposeIncludeFilter {
    const currentData = this.toJSON();
    return new ValueSetComposeIncludeFilter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSetComposeIncludeFilter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSetComposeIncludeFilter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, VALUE_SET_COMPOSE_INCLUDE_FILTER_PROPERTIES);
    return result as IValueSetComposeIncludeFilter;
  }

  /**
   * Create a deep clone of this ValueSetComposeIncludeFilter
   */
  clone(): ValueSetComposeIncludeFilter {
    return new ValueSetComposeIncludeFilter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSetComposeIncludeFilter
   */
  toString(): string {
    const parts: string[] = ['ValueSetComposeIncludeFilter'];
    return parts.join(', ');
  }
}
