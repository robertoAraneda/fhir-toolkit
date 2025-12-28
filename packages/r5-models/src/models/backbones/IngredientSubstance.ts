import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  IIngredientSubstance,
  IIngredientSubstanceStrength,
} from '@fhir-toolkit/r5-types';

/** Properties specific to IngredientSubstance */
const INGREDIENT_SUBSTANCE_PROPERTIES = [
  'code',
  'strength',
] as const;

/**
 * IngredientSubstance - The substance that comprises this ingredient
 *
 * @see https://hl7.org/fhir/R5/ingredientsubstance.html
 *
 * @example
 * const ingredientSubstance = new IngredientSubstance({
 *   // ... properties
 * });
 */
export class IngredientSubstance extends BackboneElement implements IIngredientSubstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A code or full resource that represents the ingredient substance */
  code: ICodeableReference;

  /** The quantity of substance, per presentation, or per volume or mass, and type of quantity */
  strength?: IIngredientSubstanceStrength[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IIngredientSubstance>) {
    super(data);
    if (data) {
      this.assignProps(data, INGREDIENT_SUBSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create IngredientSubstance from a JSON object
   */
  static fromJSON(json: IIngredientSubstance): IngredientSubstance {
    return new IngredientSubstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new IngredientSubstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IIngredientSubstance>): IngredientSubstance {
    return new IngredientSubstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new IngredientSubstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IIngredientSubstance) => Partial<IIngredientSubstance>): IngredientSubstance {
    const currentData = this.toJSON();
    return new IngredientSubstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IIngredientSubstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IIngredientSubstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INGREDIENT_SUBSTANCE_PROPERTIES);
    return result as IIngredientSubstance;
  }

  /**
   * Create a deep clone of this IngredientSubstance
   */
  clone(): IngredientSubstance {
    return new IngredientSubstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the IngredientSubstance
   */
  toString(): string {
    const parts: string[] = ['IngredientSubstance'];
    return parts.join(', ');
  }
}
