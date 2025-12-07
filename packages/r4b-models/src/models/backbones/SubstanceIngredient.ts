import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IRatio,
  IReference,
  ISubstanceIngredient,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubstanceIngredient */
const SUBSTANCE_INGREDIENT_PROPERTIES = [
  'quantity',
  'substanceCodeableConcept',
  'substanceReference',
] as const;

/**
 * SubstanceIngredient - Composition information about the substance
 *
 * @see https://hl7.org/fhir/R4/substanceingredient.html
 *
 * @example
 * const substanceIngredient = new SubstanceIngredient({
 *   // ... properties
 * });
 */
export class SubstanceIngredient extends BackboneElement implements ISubstanceIngredient {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Optional amount (concentration) */
  quantity?: IRatio;

  /** A component of the substance */
  substanceCodeableConcept?: ICodeableConcept;

  /** A component of the substance */
  substanceReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceIngredient>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_INGREDIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceIngredient from a JSON object
   */
  static fromJSON(json: ISubstanceIngredient): SubstanceIngredient {
    return new SubstanceIngredient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceIngredient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceIngredient>): SubstanceIngredient {
    return new SubstanceIngredient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceIngredient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceIngredient) => Partial<ISubstanceIngredient>): SubstanceIngredient {
    const currentData = this.toJSON();
    return new SubstanceIngredient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceIngredient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceIngredient {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_INGREDIENT_PROPERTIES);
    return result as ISubstanceIngredient;
  }

  /**
   * Create a deep clone of this SubstanceIngredient
   */
  clone(): SubstanceIngredient {
    return new SubstanceIngredient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceIngredient
   */
  toString(): string {
    const parts: string[] = ['SubstanceIngredient'];
    return parts.join(', ');
  }
}
