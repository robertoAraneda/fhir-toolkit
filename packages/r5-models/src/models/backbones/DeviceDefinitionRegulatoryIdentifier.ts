import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DeviceDefinitionRegulatoryIdentifierTypeType,
  IDeviceDefinitionRegulatoryIdentifier,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionRegulatoryIdentifier */
const DEVICE_DEFINITION_REGULATORY_IDENTIFIER_PROPERTIES = [
  'type',
  '_type',
  'deviceIdentifier',
  '_deviceIdentifier',
  'issuer',
  '_issuer',
  'jurisdiction',
  '_jurisdiction',
] as const;

/**
 * DeviceDefinitionRegulatoryIdentifier - Regulatory identifier(s) associated with this device
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionregulatoryidentifier.html
 *
 * @example
 * const deviceDefinitionRegulatoryIdentifier = new DeviceDefinitionRegulatoryIdentifier({
 *   // ... properties
 * });
 */
export class DeviceDefinitionRegulatoryIdentifier extends BackboneElement implements IDeviceDefinitionRegulatoryIdentifier {

  // ============================================================================
  // Properties
  // ============================================================================

  /** basic | master | license */
  type: DeviceDefinitionRegulatoryIdentifierTypeType;

  /** Extension for type */
  _type?: IElement;

  /** The identifier itself */
  deviceIdentifier: string;

  /** Extension for deviceIdentifier */
  _deviceIdentifier?: IElement;

  /** The organization that issued this identifier */
  issuer: string;

  /** Extension for issuer */
  _issuer?: IElement;

  /** The jurisdiction to which the deviceIdentifier applies */
  jurisdiction: string;

  /** Extension for jurisdiction */
  _jurisdiction?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionRegulatoryIdentifier>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_REGULATORY_IDENTIFIER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionRegulatoryIdentifier from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionRegulatoryIdentifier): DeviceDefinitionRegulatoryIdentifier {
    return new DeviceDefinitionRegulatoryIdentifier(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionRegulatoryIdentifier with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionRegulatoryIdentifier>): DeviceDefinitionRegulatoryIdentifier {
    return new DeviceDefinitionRegulatoryIdentifier({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionRegulatoryIdentifier by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionRegulatoryIdentifier) => Partial<IDeviceDefinitionRegulatoryIdentifier>): DeviceDefinitionRegulatoryIdentifier {
    const currentData = this.toJSON();
    return new DeviceDefinitionRegulatoryIdentifier({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionRegulatoryIdentifier)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionRegulatoryIdentifier {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_REGULATORY_IDENTIFIER_PROPERTIES);
    return result as IDeviceDefinitionRegulatoryIdentifier;
  }

  /**
   * Create a deep clone of this DeviceDefinitionRegulatoryIdentifier
   */
  clone(): DeviceDefinitionRegulatoryIdentifier {
    return new DeviceDefinitionRegulatoryIdentifier(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionRegulatoryIdentifier
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionRegulatoryIdentifier'];
    return parts.join(', ');
  }
}
