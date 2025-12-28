import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDeviceDefinitionUdiDeviceIdentifier,
  IDeviceDefinitionUdiDeviceIdentifierMarketDistribution,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionUdiDeviceIdentifier */
const DEVICE_DEFINITION_UDI_DEVICE_IDENTIFIER_PROPERTIES = [
  'deviceIdentifier',
  '_deviceIdentifier',
  'issuer',
  '_issuer',
  'jurisdiction',
  '_jurisdiction',
  'marketDistribution',
] as const;

/**
 * DeviceDefinitionUdiDeviceIdentifier - Unique Device Identifier (UDI) Barcode string
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionudideviceidentifier.html
 *
 * @example
 * const deviceDefinitionUdiDeviceIdentifier = new DeviceDefinitionUdiDeviceIdentifier({
 *   // ... properties
 * });
 */
export class DeviceDefinitionUdiDeviceIdentifier extends BackboneElement implements IDeviceDefinitionUdiDeviceIdentifier {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdiction provided in the DeviceDefinition.udiDeviceIdentifier */
  deviceIdentifier: string;

  /** Extension for deviceIdentifier */
  _deviceIdentifier?: IElement;

  /** The organization that assigns the identifier algorithm */
  issuer: string;

  /** Extension for issuer */
  _issuer?: IElement;

  /** The jurisdiction to which the deviceIdentifier applies */
  jurisdiction: string;

  /** Extension for jurisdiction */
  _jurisdiction?: IElement;

  /** Indicates whether and when the device is available on the market */
  marketDistribution?: IDeviceDefinitionUdiDeviceIdentifierMarketDistribution[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionUdiDeviceIdentifier>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_UDI_DEVICE_IDENTIFIER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionUdiDeviceIdentifier from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionUdiDeviceIdentifier): DeviceDefinitionUdiDeviceIdentifier {
    return new DeviceDefinitionUdiDeviceIdentifier(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionUdiDeviceIdentifier with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionUdiDeviceIdentifier>): DeviceDefinitionUdiDeviceIdentifier {
    return new DeviceDefinitionUdiDeviceIdentifier({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionUdiDeviceIdentifier by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionUdiDeviceIdentifier) => Partial<IDeviceDefinitionUdiDeviceIdentifier>): DeviceDefinitionUdiDeviceIdentifier {
    const currentData = this.toJSON();
    return new DeviceDefinitionUdiDeviceIdentifier({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionUdiDeviceIdentifier)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionUdiDeviceIdentifier {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_UDI_DEVICE_IDENTIFIER_PROPERTIES);
    return result as IDeviceDefinitionUdiDeviceIdentifier;
  }

  /**
   * Create a deep clone of this DeviceDefinitionUdiDeviceIdentifier
   */
  clone(): DeviceDefinitionUdiDeviceIdentifier {
    return new DeviceDefinitionUdiDeviceIdentifier(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionUdiDeviceIdentifier
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionUdiDeviceIdentifier'];
    return parts.join(', ');
  }
}
