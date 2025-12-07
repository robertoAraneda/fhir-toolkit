import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IQuantity,
  ISubstanceAmountReferenceRange,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceAmountReferenceRange */
const SUBSTANCE_AMOUNT_REFERENCE_RANGE_PROPERTIES = [
  'lowLimit',
  'highLimit',
] as const;

/**
 * SubstanceAmountReferenceRange - Reference range of possible or expected values
 *
 * @see https://hl7.org/fhir/R4/substanceamountreferencerange.html
 *
 * @example
 * const substanceAmountReferenceRange = new SubstanceAmountReferenceRange({
 *   // ... properties
 * });
 */
export class SubstanceAmountReferenceRange extends BackboneElement implements ISubstanceAmountReferenceRange {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Lower limit possible or expected */
  lowLimit?: IQuantity;

  /** Upper limit possible or expected */
  highLimit?: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceAmountReferenceRange>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_AMOUNT_REFERENCE_RANGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceAmountReferenceRange from a JSON object
   */
  static fromJSON(json: ISubstanceAmountReferenceRange): SubstanceAmountReferenceRange {
    return new SubstanceAmountReferenceRange(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceAmountReferenceRange with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceAmountReferenceRange>): SubstanceAmountReferenceRange {
    return new SubstanceAmountReferenceRange({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceAmountReferenceRange by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceAmountReferenceRange) => Partial<ISubstanceAmountReferenceRange>): SubstanceAmountReferenceRange {
    const currentData = this.toJSON();
    return new SubstanceAmountReferenceRange({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceAmountReferenceRange)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceAmountReferenceRange {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_AMOUNT_REFERENCE_RANGE_PROPERTIES);
    return result as ISubstanceAmountReferenceRange;
  }

  /**
   * Create a deep clone of this SubstanceAmountReferenceRange
   */
  clone(): SubstanceAmountReferenceRange {
    return new SubstanceAmountReferenceRange(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceAmountReferenceRange
   */
  toString(): string {
    const parts: string[] = ['SubstanceAmountReferenceRange'];
    return parts.join(', ');
  }
}
