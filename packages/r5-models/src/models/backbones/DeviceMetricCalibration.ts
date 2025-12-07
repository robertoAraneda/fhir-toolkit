import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DeviceMetricCalibrationStateType,
  DeviceMetricCalibrationTypeType,
  IDeviceMetricCalibration,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to DeviceMetricCalibration */
const DEVICE_METRIC_CALIBRATION_PROPERTIES = [
  'type',
  '_type',
  'state',
  '_state',
  'time',
  '_time',
] as const;

/**
 * DeviceMetricCalibration - Describes the calibrations that have been performed or that are required to be performed
 *
 * @see https://hl7.org/fhir/R4/devicemetriccalibration.html
 *
 * @example
 * const deviceMetricCalibration = new DeviceMetricCalibration({
 *   // ... properties
 * });
 */
export class DeviceMetricCalibration extends BackboneElement implements IDeviceMetricCalibration {

  // ============================================================================
  // Properties
  // ============================================================================

  /** unspecified | offset | gain | two-point */
  type?: DeviceMetricCalibrationTypeType;

  /** Extension for type */
  _type?: IElement;

  /** not-calibrated | calibration-required | calibrated | unspecified */
  state?: DeviceMetricCalibrationStateType;

  /** Extension for state */
  _state?: IElement;

  /** Describes the time last calibration has been performed */
  time?: string;

  /** Extension for time */
  _time?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDeviceMetricCalibration>) {
    super(data);
    if (data) {
      this.assignProps(data, DEVICE_METRIC_CALIBRATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DeviceMetricCalibration from a JSON object
   */
  static fromJSON(json: IDeviceMetricCalibration): DeviceMetricCalibration {
    return new DeviceMetricCalibration(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DeviceMetricCalibration with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDeviceMetricCalibration>): DeviceMetricCalibration {
    return new DeviceMetricCalibration({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DeviceMetricCalibration by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDeviceMetricCalibration) => Partial<IDeviceMetricCalibration>): DeviceMetricCalibration {
    const currentData = this.toJSON();
    return new DeviceMetricCalibration({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDeviceMetricCalibration)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDeviceMetricCalibration {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DEVICE_METRIC_CALIBRATION_PROPERTIES);
    return result as IDeviceMetricCalibration;
  }

  /**
   * Create a deep clone of this DeviceMetricCalibration
   */
  clone(): DeviceMetricCalibration {
    return new DeviceMetricCalibration(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DeviceMetricCalibration
   */
  toString(): string {
    const parts: string[] = ['DeviceMetricCalibration'];
    return parts.join(', ');
  }
}
