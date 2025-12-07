import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDeviceUdiCarrier,
  IElement,
  UDIEntryTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceUdiCarrier */
const DEVICE_UDI_CARRIER_PROPERTIES = [
  'deviceIdentifier',
  '_deviceIdentifier',
  'issuer',
  '_issuer',
  'jurisdiction',
  '_jurisdiction',
  'carrierAIDC',
  '_carrierAIDC',
  'carrierHRF',
  '_carrierHRF',
  'entryType',
  '_entryType',
] as const;

/**
 * DeviceUdiCarrier - Unique Device Identifier (UDI) Barcode string
 *
 * @see https://hl7.org/fhir/R4/deviceudicarrier.html
 *
 * @example
 * const deviceUdiCarrier = new DeviceUdiCarrier({
 *   // ... properties
 * });
 */
export class DeviceUdiCarrier extends BackboneElement implements IDeviceUdiCarrier {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Mandatory fixed portion of UDI */
  deviceIdentifier: string;

  /** Extension for deviceIdentifier */
  _deviceIdentifier?: IElement;

  /** UDI Issuing Organization */
  issuer: string;

  /** Extension for issuer */
  _issuer?: IElement;

  /** Regional UDI authority */
  jurisdiction?: string;

  /** Extension for jurisdiction */
  _jurisdiction?: IElement;

  /** UDI Machine Readable Barcode String */
  carrierAIDC?: string;

  /** Extension for carrierAIDC */
  _carrierAIDC?: IElement;

  /** UDI Human Readable Barcode String */
  carrierHRF?: string;

  /** Extension for carrierHRF */
  _carrierHRF?: IElement;

  /** barcode | rfid | manual | card | self-reported | electronic-transmission | unknown */
  entryType?: UDIEntryTypeType;

  /** Extension for entryType */
  _entryType?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceUdiCarrier>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_UDI_CARRIER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceUdiCarrier from a JSON object
   */
  static fromJSON(json: IDeviceUdiCarrier): DeviceUdiCarrier {
    return new DeviceUdiCarrier(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceUdiCarrier with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceUdiCarrier>): DeviceUdiCarrier {
    return new DeviceUdiCarrier({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceUdiCarrier by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceUdiCarrier) => Partial<IDeviceUdiCarrier>): DeviceUdiCarrier {
    const currentData = this.toJSON();
    return new DeviceUdiCarrier({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceUdiCarrier)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceUdiCarrier {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_UDI_CARRIER_PROPERTIES);
    return result as IDeviceUdiCarrier;
  }

  /**
   * Create a deep clone of this DeviceUdiCarrier
   */
  clone(): DeviceUdiCarrier {
    return new DeviceUdiCarrier(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceUdiCarrier
   */
  toString(): string {
    const parts: string[] = ['DeviceUdiCarrier'];
    return parts.join(', ');
  }
}
