import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionDeviceName } from '../../models/backbones/DeviceDefinitionDeviceName.js';
import type {
  DeviceNameTypeType,
  IDeviceDefinitionDeviceName,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionDeviceNameBuilder - Fluent builder for DeviceDefinitionDeviceName backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionDeviceName = new DeviceDefinitionDeviceNameBuilder()
 *   .setName(value)
 *   .build();
 */
export class DeviceDefinitionDeviceNameBuilder extends BackboneElementBuilder<DeviceDefinitionDeviceName, IDeviceDefinitionDeviceName> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * A name that is used to refer to the device
   */
  setName(name: string): this {
    this.data.name = name;
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

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionDeviceName instance
   */
  build(): DeviceDefinitionDeviceName {
    return new DeviceDefinitionDeviceName(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionDeviceName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionDeviceName> {
    const deviceDefinitionDeviceName = this.build();
    await deviceDefinitionDeviceName.validateOrThrow();
    return deviceDefinitionDeviceName;
  }
}
