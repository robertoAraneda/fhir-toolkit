import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IManufacturedItemDefinitionComponentConstituent,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ManufacturedItemDefinitionComponentConstituent */
const MANUFACTURED_ITEM_DEFINITION_COMPONENT_CONSTITUENT_PROPERTIES = [
  'amount',
  'location',
  'function',
  'hasIngredient',
] as const;

/**
 * ManufacturedItemDefinitionComponentConstituent - A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient)
 *
 * @see https://hl7.org/fhir/R5/manufactureditemdefinitioncomponentconstituent.html
 *
 * @example
 * const manufacturedItemDefinitionComponentConstituent = new ManufacturedItemDefinitionComponentConstituent({
 *   // ... properties
 * });
 */
export class ManufacturedItemDefinitionComponentConstituent extends BackboneElement implements IManufacturedItemDefinitionComponentConstituent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The measurable amount of the substance, expressable in different ways (e.g. by mass or volume) */
  amount?: IQuantity[];

  /** The physical location of the constituent/ingredient within the component */
  location?: ICodeableConcept[];

  /** The function of this constituent within the component e.g. binder */
  function?: ICodeableConcept[];

  /** The ingredient that is the constituent of the given component */
  hasIngredient?: ICodeableReference[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IManufacturedItemDefinitionComponentConstituent>) {
    super(data);
    if (data) {
      this.assignProps(data, MANUFACTURED_ITEM_DEFINITION_COMPONENT_CONSTITUENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ManufacturedItemDefinitionComponentConstituent from a JSON object
   */
  static fromJSON(json: IManufacturedItemDefinitionComponentConstituent): ManufacturedItemDefinitionComponentConstituent {
    return new ManufacturedItemDefinitionComponentConstituent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ManufacturedItemDefinitionComponentConstituent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IManufacturedItemDefinitionComponentConstituent>): ManufacturedItemDefinitionComponentConstituent {
    return new ManufacturedItemDefinitionComponentConstituent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ManufacturedItemDefinitionComponentConstituent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IManufacturedItemDefinitionComponentConstituent) => Partial<IManufacturedItemDefinitionComponentConstituent>): ManufacturedItemDefinitionComponentConstituent {
    const currentData = this.toJSON();
    return new ManufacturedItemDefinitionComponentConstituent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IManufacturedItemDefinitionComponentConstituent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IManufacturedItemDefinitionComponentConstituent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MANUFACTURED_ITEM_DEFINITION_COMPONENT_CONSTITUENT_PROPERTIES);
    return result as IManufacturedItemDefinitionComponentConstituent;
  }

  /**
   * Create a deep clone of this ManufacturedItemDefinitionComponentConstituent
   */
  clone(): ManufacturedItemDefinitionComponentConstituent {
    return new ManufacturedItemDefinitionComponentConstituent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ManufacturedItemDefinitionComponentConstituent
   */
  toString(): string {
    const parts: string[] = ['ManufacturedItemDefinitionComponentConstituent'];
    return parts.join(', ');
  }
}
