import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionClassification,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionClassification */
const DEVICE_DEFINITION_CLASSIFICATION_PROPERTIES = [
  'type',
  'justification',
] as const;

/**
 * DeviceDefinitionClassification - What kind of device or device system this is
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionclassification.html
 *
 * @example
 * const deviceDefinitionClassification = new DeviceDefinitionClassification({
 *   // ... properties
 * });
 */
export class DeviceDefinitionClassification extends BackboneElement implements IDeviceDefinitionClassification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A classification or risk class of the device model */
  type: ICodeableConcept;

  /** Further information qualifying this classification of the device model */
  justification?: IRelatedArtifact[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionClassification>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_CLASSIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionClassification from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionClassification): DeviceDefinitionClassification {
    return new DeviceDefinitionClassification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionClassification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionClassification>): DeviceDefinitionClassification {
    return new DeviceDefinitionClassification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionClassification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionClassification) => Partial<IDeviceDefinitionClassification>): DeviceDefinitionClassification {
    const currentData = this.toJSON();
    return new DeviceDefinitionClassification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionClassification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionClassification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_CLASSIFICATION_PROPERTIES);
    return result as IDeviceDefinitionClassification;
  }

  /**
   * Create a deep clone of this DeviceDefinitionClassification
   */
  clone(): DeviceDefinitionClassification {
    return new DeviceDefinitionClassification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionClassification
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionClassification'];
    return parts.join(', ');
  }
}
