import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  IElement,
  IQuantity,
  IRange,
  ISubstanceAmount,
  ISubstanceAmountReferenceRange,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceAmount */
const SUBSTANCE_AMOUNT_PROPERTIES = [
  'amountQuantity',
  'amountRange',
  'amountString',
  '_amountString',
  'amountType',
  'amountText',
  '_amountText',
  'referenceRange',
] as const;

/**
 * SubstanceAmount - Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 *
 * @see https://hl7.org/fhir/R4/substanceamount.html
 *
 * @example
 * const substanceAmount = new SubstanceAmount({
 *   // ... properties
 * });
 */
export class SubstanceAmount extends Element implements ISubstanceAmount {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amountQuantity?: IQuantity;

  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amountRange?: IRange;

  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amountString?: string;

  /** Extension for amountString */
  _amountString?: IElement;

  /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements */
  amountType?: ICodeableConcept;

  /** A textual comment on a numeric value */
  amountText?: string;

  /** Extension for amountText */
  _amountText?: IElement;

  /** Reference range of possible or expected values */
  referenceRange?: ISubstanceAmountReferenceRange;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceAmount>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_AMOUNT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceAmount from a JSON object
   */
  static fromJSON(json: ISubstanceAmount): SubstanceAmount {
    return new SubstanceAmount(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceAmount with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceAmount>): SubstanceAmount {
    return new SubstanceAmount({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceAmount by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceAmount) => Partial<ISubstanceAmount>): SubstanceAmount {
    const currentData = this.toJSON();
    return new SubstanceAmount({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceAmount)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceAmount {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_AMOUNT_PROPERTIES);
    return result as ISubstanceAmount;
  }

  /**
   * Create a deep clone of this SubstanceAmount
   */
  clone(): SubstanceAmount {
    return new SubstanceAmount(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceAmount
   */
  toString(): string {
    const parts: string[] = ['SubstanceAmount'];
    return parts.join(', ');
  }
}
