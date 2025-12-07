import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDeviceDefinitionUdiDeviceIdentifierMarketDistribution,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionUdiDeviceIdentifierMarketDistribution */
const DEVICE_DEFINITION_UDI_DEVICE_IDENTIFIER_MARKET_DISTRIBUTION_PROPERTIES = [
  'marketPeriod',
  'subJurisdiction',
  '_subJurisdiction',
] as const;

/**
 * DeviceDefinitionUdiDeviceIdentifierMarketDistribution - Indicates whether and when the device is available on the market
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionudideviceidentifiermarketdistribution.html
 *
 * @example
 * const deviceDefinitionUdiDeviceIdentifierMarketDistribution = new DeviceDefinitionUdiDeviceIdentifierMarketDistribution({
 *   // ... properties
 * });
 */
export class DeviceDefinitionUdiDeviceIdentifierMarketDistribution extends BackboneElement implements IDeviceDefinitionUdiDeviceIdentifierMarketDistribution {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Begin and end dates for the commercial distribution of the device */
  marketPeriod: IPeriod;

  /** National state or territory where the device is commercialized */
  subJurisdiction: string;

  /** Extension for subJurisdiction */
  _subJurisdiction?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionUdiDeviceIdentifierMarketDistribution>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_UDI_DEVICE_IDENTIFIER_MARKET_DISTRIBUTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionUdiDeviceIdentifierMarketDistribution from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionUdiDeviceIdentifierMarketDistribution): DeviceDefinitionUdiDeviceIdentifierMarketDistribution {
    return new DeviceDefinitionUdiDeviceIdentifierMarketDistribution(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionUdiDeviceIdentifierMarketDistribution with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionUdiDeviceIdentifierMarketDistribution>): DeviceDefinitionUdiDeviceIdentifierMarketDistribution {
    return new DeviceDefinitionUdiDeviceIdentifierMarketDistribution({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionUdiDeviceIdentifierMarketDistribution by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionUdiDeviceIdentifierMarketDistribution) => Partial<IDeviceDefinitionUdiDeviceIdentifierMarketDistribution>): DeviceDefinitionUdiDeviceIdentifierMarketDistribution {
    const currentData = this.toJSON();
    return new DeviceDefinitionUdiDeviceIdentifierMarketDistribution({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionUdiDeviceIdentifierMarketDistribution)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionUdiDeviceIdentifierMarketDistribution {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_UDI_DEVICE_IDENTIFIER_MARKET_DISTRIBUTION_PROPERTIES);
    return result as IDeviceDefinitionUdiDeviceIdentifierMarketDistribution;
  }

  /**
   * Create a deep clone of this DeviceDefinitionUdiDeviceIdentifierMarketDistribution
   */
  clone(): DeviceDefinitionUdiDeviceIdentifierMarketDistribution {
    return new DeviceDefinitionUdiDeviceIdentifierMarketDistribution(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionUdiDeviceIdentifierMarketDistribution
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionUdiDeviceIdentifierMarketDistribution'];
    return parts.join(', ');
  }
}
