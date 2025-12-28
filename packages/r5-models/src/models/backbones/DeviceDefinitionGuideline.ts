import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionGuideline,
  IElement,
  IRelatedArtifact,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceDefinitionGuideline */
const DEVICE_DEFINITION_GUIDELINE_PROPERTIES = [
  'useContext',
  'usageInstruction',
  '_usageInstruction',
  'relatedArtifact',
  'indication',
  'contraindication',
  'warning',
  'intendedUse',
  '_intendedUse',
] as const;

/**
 * DeviceDefinitionGuideline - Information aimed at providing directions for the usage of this model of device
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionguideline.html
 *
 * @example
 * const deviceDefinitionGuideline = new DeviceDefinitionGuideline({
 *   // ... properties
 * });
 */
export class DeviceDefinitionGuideline extends BackboneElement implements IDeviceDefinitionGuideline {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The circumstances that form the setting for using the device */
  useContext?: IUsageContext[];

  /** Detailed written and visual directions for the user on how to use the device */
  usageInstruction?: string;

  /** Extension for usageInstruction */
  _usageInstruction?: IElement;

  /** A source of information or reference for this guideline */
  relatedArtifact?: IRelatedArtifact[];

  /** A clinical condition for which the device was designed to be used */
  indication?: ICodeableConcept[];

  /** A specific situation when a device should not be used because it may cause harm */
  contraindication?: ICodeableConcept[];

  /** Specific hazard alert information that a user needs to know before using the device */
  warning?: ICodeableConcept[];

  /** A description of the general purpose or medical use of the device or its function */
  intendedUse?: string;

  /** Extension for intendedUse */
  _intendedUse?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceDefinitionGuideline>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_DEFINITION_GUIDELINE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceDefinitionGuideline from a JSON object
   */
  static fromJSON(json: IDeviceDefinitionGuideline): DeviceDefinitionGuideline {
    return new DeviceDefinitionGuideline(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceDefinitionGuideline with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceDefinitionGuideline>): DeviceDefinitionGuideline {
    return new DeviceDefinitionGuideline({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceDefinitionGuideline by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceDefinitionGuideline) => Partial<IDeviceDefinitionGuideline>): DeviceDefinitionGuideline {
    const currentData = this.toJSON();
    return new DeviceDefinitionGuideline({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceDefinitionGuideline)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceDefinitionGuideline {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_DEFINITION_GUIDELINE_PROPERTIES);
    return result as IDeviceDefinitionGuideline;
  }

  /**
   * Create a deep clone of this DeviceDefinitionGuideline
   */
  clone(): DeviceDefinitionGuideline {
    return new DeviceDefinitionGuideline(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceDefinitionGuideline
   */
  toString(): string {
    const parts: string[] = ['DeviceDefinitionGuideline'];
    return parts.join(', ');
  }
}
