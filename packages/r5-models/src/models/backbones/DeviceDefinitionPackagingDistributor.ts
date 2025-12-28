import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDeviceDefinitionPackagingDistributor,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionPackagingDistributor */
const DEVICE_DEFINITION_PACKAGING_DISTRIBUTOR_PROPERTIES = [
  'name',
  '_name',
  'organizationReference',
] as const;

/**
 * DeviceDefinitionPackagingDistributor - An organization that distributes the packaged device
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionpackagingdistributor.html
 *
 * @example
 * const deviceDefinitionPackagingDistributor = new DeviceDefinitionPackagingDistributor({
 *   // ... properties
 * });
 */
export class DeviceDefinitionPackagingDistributor extends BackboneElement implements IDeviceDefinitionPackagingDistributor {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Distributor's human-readable name */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Distributor as an Organization resource */
  organizationReference?: IReference<'Organization'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionPackagingDistributor>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_PACKAGING_DISTRIBUTOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionPackagingDistributor from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionPackagingDistributor): DeviceDefinitionPackagingDistributor {
    return new DeviceDefinitionPackagingDistributor(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionPackagingDistributor with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionPackagingDistributor>): DeviceDefinitionPackagingDistributor {
    return new DeviceDefinitionPackagingDistributor({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionPackagingDistributor by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionPackagingDistributor) => Partial<IDeviceDefinitionPackagingDistributor>): DeviceDefinitionPackagingDistributor {
    const currentData = this.toJSON();
    return new DeviceDefinitionPackagingDistributor({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionPackagingDistributor)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionPackagingDistributor {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_PACKAGING_DISTRIBUTOR_PROPERTIES);
    return result as IDeviceDefinitionPackagingDistributor;
  }

  /**
   * Create a deep clone of this DeviceDefinitionPackagingDistributor
   */
  clone(): DeviceDefinitionPackagingDistributor {
    return new DeviceDefinitionPackagingDistributor(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionPackagingDistributor
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionPackagingDistributor'];
    return parts.join(', ');
  }
}
