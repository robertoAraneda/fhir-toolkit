import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionPackaging,
  IDeviceDefinitionPackagingDistributor,
  IDeviceDefinitionUdiDeviceIdentifier,
  IElement,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionPackaging */
const DEVICE_DEFINITION_PACKAGING_PROPERTIES = [
  'identifier',
  'type',
  'count',
  '_count',
  'distributor',
  'udiDeviceIdentifier',
  'packaging',
] as const;

/**
 * DeviceDefinitionPackaging - Information about the packaging of the device, i.e. how the device is packaged
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionpackaging.html
 *
 * @example
 * const deviceDefinitionPackaging = new DeviceDefinitionPackaging({
 *   // ... properties
 * });
 */
export class DeviceDefinitionPackaging extends BackboneElement implements IDeviceDefinitionPackaging {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier of the packaged medication */
  identifier?: IIdentifier;

  /** A code that defines the specific type of packaging */
  type?: ICodeableConcept;

  /** The number of items contained in the package (devices or sub-packages) */
  count?: number;

  /** Extension for count */
  _count?: IElement;

  /** An organization that distributes the packaged device */
  distributor?: IDeviceDefinitionPackagingDistributor[];

  /** Unique Device Identifier (UDI) Barcode string on the packaging */
  udiDeviceIdentifier?: IDeviceDefinitionUdiDeviceIdentifier[];

  /** Allows packages within packages */
  packaging?: IDeviceDefinitionPackaging[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionPackaging>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_PACKAGING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionPackaging from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionPackaging): DeviceDefinitionPackaging {
    return new DeviceDefinitionPackaging(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionPackaging with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionPackaging>): DeviceDefinitionPackaging {
    return new DeviceDefinitionPackaging({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionPackaging by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionPackaging) => Partial<IDeviceDefinitionPackaging>): DeviceDefinitionPackaging {
    const currentData = this.toJSON();
    return new DeviceDefinitionPackaging({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionPackaging)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionPackaging {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_PACKAGING_PROPERTIES);
    return result as IDeviceDefinitionPackaging;
  }

  /**
   * Create a deep clone of this DeviceDefinitionPackaging
   */
  clone(): DeviceDefinitionPackaging {
    return new DeviceDefinitionPackaging(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionPackaging
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionPackaging'];
    return parts.join(', ');
  }
}
