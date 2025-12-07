import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionConformsTo,
  IElement,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionConformsTo */
const DEVICE_DEFINITION_CONFORMS_TO_PROPERTIES = [
  'category',
  'specification',
  'version',
  '_version',
  'source',
] as const;

/**
 * DeviceDefinitionConformsTo - Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionconformsto.html
 *
 * @example
 * const deviceDefinitionConformsTo = new DeviceDefinitionConformsTo({
 *   // ... properties
 * });
 */
export class DeviceDefinitionConformsTo extends BackboneElement implements IDeviceDefinitionConformsTo {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Describes the common type of the standard, specification, or formal guidance */
  category?: ICodeableConcept;

  /** Identifies the standard, specification, or formal guidance that the device adheres to the Device Specification type */
  specification: ICodeableConcept;

  /** The specific form or variant of the standard, specification or formal guidance */
  version?: string[];

  /** Extension for version */
  _version?: IElement;

  /** Standard, regulation, certification, or guidance website, document, or other publication, or similar, supporting the conformance */
  source?: IRelatedArtifact[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionConformsTo>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_CONFORMS_TO_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionConformsTo from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionConformsTo): DeviceDefinitionConformsTo {
    return new DeviceDefinitionConformsTo(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionConformsTo with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionConformsTo>): DeviceDefinitionConformsTo {
    return new DeviceDefinitionConformsTo({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionConformsTo by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionConformsTo) => Partial<IDeviceDefinitionConformsTo>): DeviceDefinitionConformsTo {
    const currentData = this.toJSON();
    return new DeviceDefinitionConformsTo({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionConformsTo)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionConformsTo {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_CONFORMS_TO_PROPERTIES);
    return result as IDeviceDefinitionConformsTo;
  }

  /**
   * Create a deep clone of this DeviceDefinitionConformsTo
   */
  clone(): DeviceDefinitionConformsTo {
    return new DeviceDefinitionConformsTo(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionConformsTo
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionConformsTo'];
    return parts.join(', ');
  }
}
