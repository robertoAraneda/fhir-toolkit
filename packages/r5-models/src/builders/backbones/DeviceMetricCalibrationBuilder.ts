import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceMetricCalibration } from '../../models/backbones/DeviceMetricCalibration.js';
import type {
  DeviceMetricCalibrationStateType,
  DeviceMetricCalibrationTypeType,
  IDeviceMetricCalibration,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceMetricCalibrationBuilder - Fluent builder for DeviceMetricCalibration backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceMetricCalibration = new DeviceMetricCalibrationBuilder()
 *   .setType(value)
 *   .build();
 */
export class DeviceMetricCalibrationBuilder extends BackboneElementBuilder<DeviceMetricCalibration, IDeviceMetricCalibration> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * unspecified | offset | gain | two-point
   */
  setType(type: DeviceMetricCalibrationTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set state
   * not-calibrated | calibration-required | calibrated | unspecified
   */
  setState(state: DeviceMetricCalibrationStateType): this {
    this.data.state = state;
    return this;
  }

  /**
   * Set time
   * Describes the time last calibration has been performed
   */
  setTime(time: string): this {
    this.data.time = time;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceMetricCalibration instance
   */
  build(): DeviceMetricCalibration {
    return new DeviceMetricCalibration(this.data);
  }

  /**
   * Build and validate the DeviceMetricCalibration instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceMetricCalibration> {
    const deviceMetricCalibration = this.build();
    await deviceMetricCalibration.validateOrThrow();
    return deviceMetricCalibration;
  }
}
