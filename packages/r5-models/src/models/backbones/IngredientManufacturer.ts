import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IIngredientManufacturer,
  IReference,
  IngredientManufacturerRoleType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to IngredientManufacturer */
const INGREDIENT_MANUFACTURER_PROPERTIES = [
  'role',
  '_role',
  'manufacturer',
] as const;

/**
 * IngredientManufacturer - An organization that manufactures this ingredient
 *
 * @see https://hl7.org/fhir/R5/ingredientmanufacturer.html
 *
 * @example
 * const ingredientManufacturer = new IngredientManufacturer({
 *   // ... properties
 * });
 */
export class IngredientManufacturer extends BackboneElement implements IIngredientManufacturer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** allowed | possible | actual */
  role?: IngredientManufacturerRoleType;

  /** Extension for role */
  _role?: IElement;

  /** An organization that manufactures this ingredient */
  manufacturer: IReference<'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IIngredientManufacturer>) {
    super(data);
    if (data) {
      this.assignProps(data, INGREDIENT_MANUFACTURER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create IngredientManufacturer from a JSON object
   */
  static fromJSON(json: IIngredientManufacturer): IngredientManufacturer {
    return new IngredientManufacturer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new IngredientManufacturer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IIngredientManufacturer>): IngredientManufacturer {
    return new IngredientManufacturer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new IngredientManufacturer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IIngredientManufacturer) => Partial<IIngredientManufacturer>): IngredientManufacturer {
    const currentData = this.toJSON();
    return new IngredientManufacturer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IIngredientManufacturer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IIngredientManufacturer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, INGREDIENT_MANUFACTURER_PROPERTIES);
    return result as IIngredientManufacturer;
  }

  /**
   * Create a deep clone of this IngredientManufacturer
   */
  clone(): IngredientManufacturer {
    return new IngredientManufacturer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the IngredientManufacturer
   */
  toString(): string {
    const parts: string[] = ['IngredientManufacturer'];
    return parts.join(', ');
  }
}
