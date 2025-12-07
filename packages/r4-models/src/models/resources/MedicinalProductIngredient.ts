import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IMedicinalProductIngredient,
  IMedicinalProductIngredientSpecifiedSubstance,
  IMedicinalProductIngredientSubstance,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductIngredient */
const MEDICINAL_PRODUCT_INGREDIENT_PROPERTIES = [
  'identifier',
  'role',
  'allergenicIndicator',
  '_allergenicIndicator',
  'manufacturer',
  'specifiedSubstance',
  'substance',
] as const;

/**
 * MedicinalProductIngredient - An ingredient of a manufactured item or pharmaceutical product.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductingredient.html
 *
 * @example
 * const medicinalProductIngredient = new MedicinalProductIngredient({
 *   // ... properties
 * });
 */
export class MedicinalProductIngredient extends DomainResource implements IMedicinalProductIngredient {
  readonly resourceType = 'MedicinalProductIngredient' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifier for the ingredient */
  identifier?: IIdentifier;

  /** Ingredient role e.g. Active ingredient, excipient */
  role: ICodeableConcept;

  /** If the ingredient is a known or suspected allergen */
  allergenicIndicator?: boolean;

  /** Extension for allergenicIndicator */
  _allergenicIndicator?: IElement;

  /** Manufacturer of this Ingredient */
  manufacturer?: IReference<'Organization'>[];

  /** A specified substance that comprises this ingredient */
  specifiedSubstance?: IMedicinalProductIngredientSpecifiedSubstance[];

  /** The ingredient substance */
  substance?: IMedicinalProductIngredientSubstance;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicinalProductIngredient>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INGREDIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductIngredient from a JSON object
   */
  static fromJSON(json: IMedicinalProductIngredient): MedicinalProductIngredient {
    return new MedicinalProductIngredient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductIngredient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductIngredient>): MedicinalProductIngredient {
    return new MedicinalProductIngredient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductIngredient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductIngredient) => Partial<IMedicinalProductIngredient>): MedicinalProductIngredient {
    const currentData = this.toJSON();
    return new MedicinalProductIngredient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductIngredient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductIngredient {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INGREDIENT_PROPERTIES);
    return result as IMedicinalProductIngredient;
  }

  /**
   * Create a deep clone of this MedicinalProductIngredient
   */
  clone(): MedicinalProductIngredient {
    return new MedicinalProductIngredient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductIngredient
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductIngredient'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
