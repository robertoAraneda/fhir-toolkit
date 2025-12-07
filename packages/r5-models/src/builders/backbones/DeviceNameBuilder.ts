import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceName } from '../../models/backbones/DeviceName.js';
import type {
  DeviceNameTypeType,
  IDeviceName,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceNameBuilder - Fluent builder for DeviceName backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceName = new DeviceNameBuilder()
 *   .setValue(value)
 *   .build();
 */
export class DeviceNameBuilder extends BackboneElementBuilder<DeviceName, IDeviceName> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set value
   * The term that names the device
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set type
   * registered-name | user-friendly-name | patient-reported-name
   */
  setType(type: DeviceNameTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set display
   * The preferred device name
   */
  setDisplay(display: boolean): this {
    this.data.display = display;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceName instance
   */
  build(): DeviceName {
    return new DeviceName(this.data);
  }

  /**
   * Build and validate the DeviceName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceName> {
    const deviceName = this.build();
    await deviceName.validateOrThrow();
    return deviceName;
  }
}
