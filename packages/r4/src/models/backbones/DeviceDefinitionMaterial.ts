import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionMaterial,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to DeviceDefinitionMaterial */
const DEVICE_DEFINITION_MATERIAL_PROPERTIES = [
  'substance',
  'alternate',
  '_alternate',
  'allergenicIndicator',
  '_allergenicIndicator',
] as const;

/**
 * DeviceDefinitionMaterial - A substance used to create the material(s) of which the device is made
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionmaterial.html
 *
 * @example
 * const deviceDefinitionMaterial = new DeviceDefinitionMaterial({
 *   // ... properties
 * });
 */
export class DeviceDefinitionMaterial extends BackboneElement implements IDeviceDefinitionMaterial {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The substance */
  substance: ICodeableConcept;

  /** Indicates an alternative material of the device */
  alternate?: boolean;

  /** Extension for alternate */
  _alternate?: IElement;

  /** Whether the substance is a known or suspected allergen */
  allergenicIndicator?: boolean;

  /** Extension for allergenicIndicator */
  _allergenicIndicator?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionMaterial>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_MATERIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionMaterial from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionMaterial): DeviceDefinitionMaterial {
    return new DeviceDefinitionMaterial(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionMaterial with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionMaterial>): DeviceDefinitionMaterial {
    return new DeviceDefinitionMaterial({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionMaterial by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionMaterial) => Partial<IDeviceDefinitionMaterial>): DeviceDefinitionMaterial {
    const currentData = this.toJSON();
    return new DeviceDefinitionMaterial({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionMaterial)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionMaterial {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_MATERIAL_PROPERTIES);
    return result as IDeviceDefinitionMaterial;
  }

  /**
   * Create a deep clone of this DeviceDefinitionMaterial
   */
  clone(): DeviceDefinitionMaterial {
    return new DeviceDefinitionMaterial(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionMaterial
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionMaterial'];
    return parts.join(', ');
  }
}
