import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IChargeItemDefinitionPropertyGroupPriceComponent,
  ICodeableConcept,
  IElement,
  IMoney,
  InvoicePriceComponentTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ChargeItemDefinitionPropertyGroupPriceComponent */
const CHARGE_ITEM_DEFINITION_PROPERTY_GROUP_PRICE_COMPONENT_PROPERTIES = [
  'type',
  '_type',
  'code',
  'factor',
  '_factor',
  'amount',
] as const;

/**
 * ChargeItemDefinitionPropertyGroupPriceComponent - Components of total line item price
 *
 * @see https://hl7.org/fhir/R4B/chargeitemdefinitionpropertygrouppricecomponent.html
 *
 * @example
 * const chargeItemDefinitionPropertyGroupPriceComponent = new ChargeItemDefinitionPropertyGroupPriceComponent({
 *   // ... properties
 * });
 */
export class ChargeItemDefinitionPropertyGroupPriceComponent extends BackboneElement implements IChargeItemDefinitionPropertyGroupPriceComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** base | surcharge | deduction | discount | tax | informational */
  type: InvoicePriceComponentTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Code identifying the specific component */
  code?: ICodeableConcept;

  /** Factor used for calculating this component */
  factor?: number;

  /** Extension for factor */
  _factor?: IElement;

  /** Monetary amount associated with this component */
  amount?: IMoney;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IChargeItemDefinitionPropertyGroupPriceComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, CHARGE_ITEM_DEFINITION_PROPERTY_GROUP_PRICE_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ChargeItemDefinitionPropertyGroupPriceComponent from a JSON object
   */
  static fromJSON(json: IChargeItemDefinitionPropertyGroupPriceComponent): ChargeItemDefinitionPropertyGroupPriceComponent {
    return new ChargeItemDefinitionPropertyGroupPriceComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ChargeItemDefinitionPropertyGroupPriceComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IChargeItemDefinitionPropertyGroupPriceComponent>): ChargeItemDefinitionPropertyGroupPriceComponent {
    return new ChargeItemDefinitionPropertyGroupPriceComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ChargeItemDefinitionPropertyGroupPriceComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IChargeItemDefinitionPropertyGroupPriceComponent) => Partial<IChargeItemDefinitionPropertyGroupPriceComponent>): ChargeItemDefinitionPropertyGroupPriceComponent {
    const currentData = this.toJSON();
    return new ChargeItemDefinitionPropertyGroupPriceComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IChargeItemDefinitionPropertyGroupPriceComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IChargeItemDefinitionPropertyGroupPriceComponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CHARGE_ITEM_DEFINITION_PROPERTY_GROUP_PRICE_COMPONENT_PROPERTIES);
    return result as IChargeItemDefinitionPropertyGroupPriceComponent;
  }

  /**
   * Create a deep clone of this ChargeItemDefinitionPropertyGroupPriceComponent
   */
  clone(): ChargeItemDefinitionPropertyGroupPriceComponent {
    return new ChargeItemDefinitionPropertyGroupPriceComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ChargeItemDefinitionPropertyGroupPriceComponent
   */
  toString(): string {
    const parts: string[] = ['ChargeItemDefinitionPropertyGroupPriceComponent'];
    return parts.join(', ');
  }
}
