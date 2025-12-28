import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableReference,
  IDeviceDefinitionChargeItem,
  IPeriod,
  IQuantity,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionChargeItem */
const DEVICE_DEFINITION_CHARGE_ITEM_PROPERTIES = [
  'chargeItemCode',
  'count',
  'effectivePeriod',
  'useContext',
] as const;

/**
 * DeviceDefinitionChargeItem - Billing code or reference associated with the device
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionchargeitem.html
 *
 * @example
 * const deviceDefinitionChargeItem = new DeviceDefinitionChargeItem({
 *   // ... properties
 * });
 */
export class DeviceDefinitionChargeItem extends BackboneElement implements IDeviceDefinitionChargeItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The code or reference for the charge item */
  chargeItemCode: ICodeableReference;

  /** Coefficient applicable to the billing code */
  count: IQuantity;

  /** A specific time period in which this charge item applies */
  effectivePeriod?: IPeriod;

  /** The context to which this charge item applies */
  useContext?: IUsageContext[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionChargeItem>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_CHARGE_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionChargeItem from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionChargeItem): DeviceDefinitionChargeItem {
    return new DeviceDefinitionChargeItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionChargeItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionChargeItem>): DeviceDefinitionChargeItem {
    return new DeviceDefinitionChargeItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionChargeItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionChargeItem) => Partial<IDeviceDefinitionChargeItem>): DeviceDefinitionChargeItem {
    const currentData = this.toJSON();
    return new DeviceDefinitionChargeItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionChargeItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionChargeItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_CHARGE_ITEM_PROPERTIES);
    return result as IDeviceDefinitionChargeItem;
  }

  /**
   * Create a deep clone of this DeviceDefinitionChargeItem
   */
  clone(): DeviceDefinitionChargeItem {
    return new DeviceDefinitionChargeItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionChargeItem
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionChargeItem'];
    return parts.join(', ');
  }
}
