import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIngredientSubstanceStrengthReferenceStrength,
  IRatio,
  IRatioRange,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to IngredientSubstanceStrengthReferenceStrength */
const INGREDIENT_SUBSTANCE_STRENGTH_REFERENCE_STRENGTH_PROPERTIES = [
  'substance',
  'strengthRatio',
  'strengthRatioRange',
  'measurementPoint',
  '_measurementPoint',
  'country',
] as const;

/**
 * IngredientSubstanceStrengthReferenceStrength - Strength expressed in terms of a reference substance
 *
 * @see https://hl7.org/fhir/R4B/ingredientsubstancestrengthreferencestrength.html
 *
 * @example
 * const ingredientSubstanceStrengthReferenceStrength = new IngredientSubstanceStrengthReferenceStrength({
 *   // ... properties
 * });
 */
export class IngredientSubstanceStrengthReferenceStrength extends BackboneElement implements IIngredientSubstanceStrengthReferenceStrength {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Relevant reference substance */
  substance?: ICodeableReference;

  /** Strength expressed in terms of a reference substance */
  strengthRatio?: IRatio;

  /** Strength expressed in terms of a reference substance */
  strengthRatioRange?: IRatioRange;

  /** When strength is measured at a particular point or distance */
  measurementPoint?: string;

  /** Extension for measurementPoint */
  _measurementPoint?: IElement;

  /** Where the strength range applies */
  country?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IIngredientSubstanceStrengthReferenceStrength>) {
    super(data);
    if (data) {
      this.assignProps(data, INGREDIENT_SUBSTANCE_STRENGTH_REFERENCE_STRENGTH_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create IngredientSubstanceStrengthReferenceStrength from a JSON object
   */
  static fromJSON(json: IIngredientSubstanceStrengthReferenceStrength): IngredientSubstanceStrengthReferenceStrength {
    return new IngredientSubstanceStrengthReferenceStrength(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new IngredientSubstanceStrengthReferenceStrength with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IIngredientSubstanceStrengthReferenceStrength>): IngredientSubstanceStrengthReferenceStrength {
    return new IngredientSubstanceStrengthReferenceStrength({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new IngredientSubstanceStrengthReferenceStrength by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IIngredientSubstanceStrengthReferenceStrength) => Partial<IIngredientSubstanceStrengthReferenceStrength>): IngredientSubstanceStrengthReferenceStrength {
    const currentData = this.toJSON();
    return new IngredientSubstanceStrengthReferenceStrength({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IIngredientSubstanceStrengthReferenceStrength)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IIngredientSubstanceStrengthReferenceStrength {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INGREDIENT_SUBSTANCE_STRENGTH_REFERENCE_STRENGTH_PROPERTIES);
    return result as IIngredientSubstanceStrengthReferenceStrength;
  }

  /**
   * Create a deep clone of this IngredientSubstanceStrengthReferenceStrength
   */
  clone(): IngredientSubstanceStrengthReferenceStrength {
    return new IngredientSubstanceStrengthReferenceStrength(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the IngredientSubstanceStrengthReferenceStrength
   */
  toString(): string {
    const parts: string[] = ['IngredientSubstanceStrengthReferenceStrength'];
    return parts.join(', ');
  }
}
