import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IChargeItemDefinitionApplicability,
  IChargeItemDefinitionPropertyGroup,
  IChargeItemDefinitionPropertyGroupPriceComponent,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ChargeItemDefinitionPropertyGroup */
const CHARGE_ITEM_DEFINITION_PROPERTY_GROUP_PROPERTIES = [
  'applicability',
  'priceComponent',
] as const;

/**
 * ChargeItemDefinitionPropertyGroup - Group of properties which are applicable under the same conditions
 *
 * @see https://hl7.org/fhir/R4/chargeitemdefinitionpropertygroup.html
 *
 * @example
 * const chargeItemDefinitionPropertyGroup = new ChargeItemDefinitionPropertyGroup({
 *   // ... properties
 * });
 */
export class ChargeItemDefinitionPropertyGroup extends BackboneElement implements IChargeItemDefinitionPropertyGroup {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Conditions under which the priceComponent is applicable */
  applicability?: IChargeItemDefinitionApplicability[];

  /** Components of total line item price */
  priceComponent?: IChargeItemDefinitionPropertyGroupPriceComponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IChargeItemDefinitionPropertyGroup>) {
    super(data);
    if (data) {
      this.assignProps(data, CHARGE_ITEM_DEFINITION_PROPERTY_GROUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ChargeItemDefinitionPropertyGroup from a JSON object
   */
  static fromJSON(json: IChargeItemDefinitionPropertyGroup): ChargeItemDefinitionPropertyGroup {
    return new ChargeItemDefinitionPropertyGroup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ChargeItemDefinitionPropertyGroup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IChargeItemDefinitionPropertyGroup>): ChargeItemDefinitionPropertyGroup {
    return new ChargeItemDefinitionPropertyGroup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ChargeItemDefinitionPropertyGroup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IChargeItemDefinitionPropertyGroup) => Partial<IChargeItemDefinitionPropertyGroup>): ChargeItemDefinitionPropertyGroup {
    const currentData = this.toJSON();
    return new ChargeItemDefinitionPropertyGroup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IChargeItemDefinitionPropertyGroup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IChargeItemDefinitionPropertyGroup {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CHARGE_ITEM_DEFINITION_PROPERTY_GROUP_PROPERTIES);
    return result as IChargeItemDefinitionPropertyGroup;
  }

  /**
   * Create a deep clone of this ChargeItemDefinitionPropertyGroup
   */
  clone(): ChargeItemDefinitionPropertyGroup {
    return new ChargeItemDefinitionPropertyGroup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ChargeItemDefinitionPropertyGroup
   */
  toString(): string {
    const parts: string[] = ['ChargeItemDefinitionPropertyGroup'];
    return parts.join(', ');
  }
}
