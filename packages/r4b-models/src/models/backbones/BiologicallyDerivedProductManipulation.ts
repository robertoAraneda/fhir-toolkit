import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBiologicallyDerivedProductManipulation,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to BiologicallyDerivedProductManipulation */
const BIOLOGICALLY_DERIVED_PRODUCT_MANIPULATION_PROPERTIES = [
  'description',
  '_description',
  'timeDateTime',
  '_timeDateTime',
  'timePeriod',
] as const;

/**
 * BiologicallyDerivedProductManipulation - Any manipulation of product post-collection
 *
 * @see https://hl7.org/fhir/R4B/biologicallyderivedproductmanipulation.html
 *
 * @example
 * const biologicallyDerivedProductManipulation = new BiologicallyDerivedProductManipulation({
 *   // ... properties
 * });
 */
export class BiologicallyDerivedProductManipulation extends BackboneElement implements IBiologicallyDerivedProductManipulation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of manipulation */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Time of manipulation */
  timeDateTime?: string;

  /** Extension for timeDateTime */
  _timeDateTime?: IElement;

  /** Time of manipulation */
  timePeriod?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBiologicallyDerivedProductManipulation>) {
    super(data);
    if (data) {
      this.assignProps(data, BIOLOGICALLY_DERIVED_PRODUCT_MANIPULATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BiologicallyDerivedProductManipulation from a JSON object
   */
  static fromJSON(json: IBiologicallyDerivedProductManipulation): BiologicallyDerivedProductManipulation {
    return new BiologicallyDerivedProductManipulation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BiologicallyDerivedProductManipulation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBiologicallyDerivedProductManipulation>): BiologicallyDerivedProductManipulation {
    return new BiologicallyDerivedProductManipulation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BiologicallyDerivedProductManipulation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBiologicallyDerivedProductManipulation) => Partial<IBiologicallyDerivedProductManipulation>): BiologicallyDerivedProductManipulation {
    const currentData = this.toJSON();
    return new BiologicallyDerivedProductManipulation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBiologicallyDerivedProductManipulation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBiologicallyDerivedProductManipulation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BIOLOGICALLY_DERIVED_PRODUCT_MANIPULATION_PROPERTIES);
    return result as IBiologicallyDerivedProductManipulation;
  }

  /**
   * Create a deep clone of this BiologicallyDerivedProductManipulation
   */
  clone(): BiologicallyDerivedProductManipulation {
    return new BiologicallyDerivedProductManipulation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BiologicallyDerivedProductManipulation
   */
  toString(): string {
    const parts: string[] = ['BiologicallyDerivedProductManipulation'];
    return parts.join(', ');
  }
}
