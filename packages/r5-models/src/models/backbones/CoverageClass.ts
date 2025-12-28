import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageClass,
  IElement,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageClass */
const COVERAGE_CLASS_PROPERTIES = [
  'type',
  'value',
  'name',
  '_name',
] as const;

/**
 * CoverageClass - Additional coverage classifications
 *
 * @see https://hl7.org/fhir/R5/coverageclass.html
 *
 * @example
 * const coverageClass = new CoverageClass({
 *   // ... properties
 * });
 */
export class CoverageClass extends BackboneElement implements ICoverageClass {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of class such as 'group' or 'plan' */
  type: ICodeableConcept;

  /** Value associated with the type */
  value: IIdentifier;

  /** Human readable description of the type and value */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageClass>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_CLASS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageClass from a JSON object
   */
  static fromJSON(json: ICoverageClass): CoverageClass {
    return new CoverageClass(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageClass with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageClass>): CoverageClass {
    return new CoverageClass({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageClass by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageClass) => Partial<ICoverageClass>): CoverageClass {
    const currentData = this.toJSON();
    return new CoverageClass({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageClass)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageClass {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_CLASS_PROPERTIES);
    return result as ICoverageClass;
  }

  /**
   * Create a deep clone of this CoverageClass
   */
  clone(): CoverageClass {
    return new CoverageClass(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageClass
   */
  toString(): string {
    const parts: string[] = ['CoverageClass'];
    return parts.join(', ');
  }
}
