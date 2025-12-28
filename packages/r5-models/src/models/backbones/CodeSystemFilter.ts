import { BackboneElement } from '../base/BackboneElement.js';
import type {
  FilterOperatorType,
  ICodeSystemFilter,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CodeSystemFilter */
const CODE_SYSTEM_FILTER_PROPERTIES = [
  'code',
  '_code',
  'description',
  '_description',
  'operator',
  '_operator',
  'value',
  '_value',
] as const;

/**
 * CodeSystemFilter - Filter that can be used in a value set
 *
 * @see https://hl7.org/fhir/R5/codesystemfilter.html
 *
 * @example
 * const codeSystemFilter = new CodeSystemFilter({
 *   // ... properties
 * });
 */
export class CodeSystemFilter extends BackboneElement implements ICodeSystemFilter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code that identifies the filter */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** How or why the filter is used */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | child-of | descendent-leaf | exists */
  operator: FilterOperatorType[];

  /** Extension for operator */
  _operator?: IElement;

  /** What to use for the value */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICodeSystemFilter>) {
    super(data);
    if (data) {
      this.assignProps(data, CODE_SYSTEM_FILTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CodeSystemFilter from a JSON object
   */
  static fromJSON(json: ICodeSystemFilter): CodeSystemFilter {
    return new CodeSystemFilter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CodeSystemFilter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICodeSystemFilter>): CodeSystemFilter {
    return new CodeSystemFilter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CodeSystemFilter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICodeSystemFilter) => Partial<ICodeSystemFilter>): CodeSystemFilter {
    const currentData = this.toJSON();
    return new CodeSystemFilter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICodeSystemFilter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICodeSystemFilter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CODE_SYSTEM_FILTER_PROPERTIES);
    return result as ICodeSystemFilter;
  }

  /**
   * Create a deep clone of this CodeSystemFilter
   */
  clone(): CodeSystemFilter {
    return new CodeSystemFilter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CodeSystemFilter
   */
  toString(): string {
    const parts: string[] = ['CodeSystemFilter'];
    return parts.join(', ');
  }
}
