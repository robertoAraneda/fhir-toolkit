import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IIngredient,
  IIngredientManufacturer,
  IIngredientSubstance,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Ingredient */
const INGREDIENT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'for',
  'role',
  'function',
  'group',
  'allergenicIndicator',
  '_allergenicIndicator',
  'comment',
  '_comment',
  'manufacturer',
  'substance',
] as const;

/**
 * Ingredient - An ingredient of a manufactured item or pharmaceutical product.
 *
 * @see https://hl7.org/fhir/R4/ingredient.html
 *
 * @example
 * const ingredient = new Ingredient({
 *   // ... properties
 * });
 */
export class Ingredient extends DomainResource implements IIngredient {
  readonly resourceType = 'Ingredient' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier or code by which the ingredient can be referenced */
  identifier?: IIdentifier;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The product which this ingredient is a constituent part of */
  for?: IReference<'MedicinalProductDefinition' | 'AdministrableProductDefinition' | 'ManufacturedItemDefinition'>[];

  /** Purpose of the ingredient within the product, e.g. active, inactive */
  role: ICodeableConcept;

  /** Precise action within the drug product, e.g. antioxidant, alkalizing agent */
  function?: ICodeableConcept[];

  /** A classification of the ingredient according to where in the physical item it tends to be used, such the outer shell of a tablet, inner body or ink */
  group?: ICodeableConcept;

  /** If the ingredient is a known or suspected allergen */
  allergenicIndicator?: boolean;

  /** Extension for allergenicIndicator */
  _allergenicIndicator?: IElement;

  /** A place for providing any notes that are relevant to the component, e.g. removed during process, adjusted for loss on drying */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** An organization that manufactures this ingredient */
  manufacturer?: IIngredientManufacturer[];

  /** The substance that comprises this ingredient */
  substance: IIngredientSubstance;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IIngredient>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, INGREDIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Ingredient from a JSON object
   */
  static fromJSON(json: IIngredient): Ingredient {
    return new Ingredient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Ingredient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IIngredient>): Ingredient {
    return new Ingredient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Ingredient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IIngredient) => Partial<IIngredient>): Ingredient {
    const currentData = this.toJSON();
    return new Ingredient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IIngredient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IIngredient {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, INGREDIENT_PROPERTIES);
    return result as IIngredient;
  }

  /**
   * Create a deep clone of this Ingredient
   */
  clone(): Ingredient {
    return new Ingredient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Ingredient
   */
  toString(): string {
    const parts: string[] = ['Ingredient'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
