import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDeviceName } from '../../models/backbones/DeviceDeviceName.js';
import type {
  DeviceNameTypeType,
  IDeviceDeviceName,
} from '@fhir-toolkit/r4-types';

/**
 * DeviceDeviceNameBuilder - Fluent builder for DeviceDeviceName backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDeviceName = new DeviceDeviceNameBuilder()
 *   .setName(value)
 *   .build();
 */
export class DeviceDeviceNameBuilder extends BackboneElementBuilder<DeviceDeviceName, IDeviceDeviceName> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * The name of the device
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set type
   * udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
   */
  setType(type: DeviceNameTypeType): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDeviceName instance
   */
  build(): DeviceDeviceName {
    return new DeviceDeviceName(this.data);
  }

  /**
   * Build and validate the DeviceDeviceName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDeviceName> {
    const deviceDeviceName = this.build();
    await deviceDeviceName.validateOrThrow();
    return deviceDeviceName;
  }
}
