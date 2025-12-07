import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IManufacturedItemDefinitionComponent,
  IManufacturedItemDefinitionComponentConstituent,
  IManufacturedItemDefinitionProperty,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ManufacturedItemDefinitionComponent */
const MANUFACTURED_ITEM_DEFINITION_COMPONENT_PROPERTIES = [
  'type',
  'function',
  'amount',
  'constituent',
  'property',
  'component',
] as const;

/**
 * ManufacturedItemDefinitionComponent - Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup
 *
 * @see https://hl7.org/fhir/R4/manufactureditemdefinitioncomponent.html
 *
 * @example
 * const manufacturedItemDefinitionComponent = new ManufacturedItemDefinitionComponent({
 *   // ... properties
 * });
 */
export class ManufacturedItemDefinitionComponent extends BackboneElement implements IManufacturedItemDefinitionComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Defining type of the component e.g. shell, layer, ink */
  type: ICodeableConcept;

  /** The function of this component within the item e.g. delivers active ingredient, masks taste */
  function?: ICodeableConcept[];

  /** The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume) */
  amount?: IQuantity[];

  /** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient) */
  constituent?: IManufacturedItemDefinitionComponentConstituent[];

  /** General characteristics of this component */
  property?: IManufacturedItemDefinitionProperty[];

  /** A component that this component contains or is made from */
  component?: IManufacturedItemDefinitionComponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IManufacturedItemDefinitionComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, MANUFACTURED_ITEM_DEFINITION_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ManufacturedItemDefinitionComponent from a JSON object
   */
  static fromJSON(json: IManufacturedItemDefinitionComponent): ManufacturedItemDefinitionComponent {
    return new ManufacturedItemDefinitionComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ManufacturedItemDefinitionComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IManufacturedItemDefinitionComponent>): ManufacturedItemDefinitionComponent {
    return new ManufacturedItemDefinitionComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ManufacturedItemDefinitionComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IManufacturedItemDefinitionComponent) => Partial<IManufacturedItemDefinitionComponent>): ManufacturedItemDefinitionComponent {
    const currentData = this.toJSON();
    return new ManufacturedItemDefinitionComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IManufacturedItemDefinitionComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IManufacturedItemDefinitionComponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MANUFACTURED_ITEM_DEFINITION_COMPONENT_PROPERTIES);
    return result as IManufacturedItemDefinitionComponent;
  }

  /**
   * Create a deep clone of this ManufacturedItemDefinitionComponent
   */
  clone(): ManufacturedItemDefinitionComponent {
    return new ManufacturedItemDefinitionComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ManufacturedItemDefinitionComponent
   */
  toString(): string {
    const parts: string[] = ['ManufacturedItemDefinitionComponent'];
    return parts.join(', ');
  }
}
