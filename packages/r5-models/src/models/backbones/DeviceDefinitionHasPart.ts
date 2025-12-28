import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IDeviceDefinitionHasPart,
  IElement,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionHasPart */
const DEVICE_DEFINITION_HAS_PART_PROPERTIES = [
  'reference',
  'count',
  '_count',
] as const;

/**
 * DeviceDefinitionHasPart - A device, part of the current one
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionhaspart.html
 *
 * @example
 * const deviceDefinitionHasPart = new DeviceDefinitionHasPart({
 *   // ... properties
 * });
 */
export class DeviceDefinitionHasPart extends BackboneElement implements IDeviceDefinitionHasPart {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to the part */
  reference: IReference<'DeviceDefinition'>;

  /** Number of occurrences of the part */
  count?: number;

  /** Extension for count */
  _count?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionHasPart>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_HAS_PART_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionHasPart from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionHasPart): DeviceDefinitionHasPart {
    return new DeviceDefinitionHasPart(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionHasPart with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionHasPart>): DeviceDefinitionHasPart {
    return new DeviceDefinitionHasPart({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionHasPart by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionHasPart) => Partial<IDeviceDefinitionHasPart>): DeviceDefinitionHasPart {
    const currentData = this.toJSON();
    return new DeviceDefinitionHasPart({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionHasPart)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionHasPart {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_HAS_PART_PROPERTIES);
    return result as IDeviceDefinitionHasPart;
  }

  /**
   * Create a deep clone of this DeviceDefinitionHasPart
   */
  clone(): DeviceDefinitionHasPart {
    return new DeviceDefinitionHasPart(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionHasPart
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionHasPart'];
    return parts.join(', ');
  }
}
