import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDataRequirementSort,
  IElement,
  SortDirectionType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DataRequirementSort */
const DATA_REQUIREMENT_SORT_PROPERTIES = [
  'path',
  '_path',
  'direction',
  '_direction',
] as const;

/**
 * DataRequirementSort - Order of the results
 *
 * @see https://hl7.org/fhir/R4B/datarequirementsort.html
 *
 * @example
 * const dataRequirementSort = new DataRequirementSort({
 *   // ... properties
 * });
 */
export class DataRequirementSort extends BackboneElement implements IDataRequirementSort {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The name of the attribute to perform the sort */
  path: string;

  /** Extension for path */
  _path?: IElement;

  /** ascending | descending */
  direction: SortDirectionType;

  /** Extension for direction */
  _direction?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDataRequirementSort>) {
    super(data);
    if (data) {
      this.assignProps(data, DATA_REQUIREMENT_SORT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DataRequirementSort from a JSON object
   */
  static fromJSON(json: IDataRequirementSort): DataRequirementSort {
    return new DataRequirementSort(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DataRequirementSort with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDataRequirementSort>): DataRequirementSort {
    return new DataRequirementSort({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DataRequirementSort by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDataRequirementSort) => Partial<IDataRequirementSort>): DataRequirementSort {
    const currentData = this.toJSON();
    return new DataRequirementSort({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDataRequirementSort)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDataRequirementSort {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DATA_REQUIREMENT_SORT_PROPERTIES);
    return result as IDataRequirementSort;
  }

  /**
   * Create a deep clone of this DataRequirementSort
   */
  clone(): DataRequirementSort {
    return new DataRequirementSort(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DataRequirementSort
   */
  toString(): string {
    const parts: string[] = ['DataRequirementSort'];
    return parts.join(', ');
  }
}
