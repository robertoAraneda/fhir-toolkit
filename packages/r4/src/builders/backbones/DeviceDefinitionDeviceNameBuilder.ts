import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionDeviceName } from '../../models/backbones/DeviceDefinitionDeviceName.js';
import type {
  DeviceNameTypeType,
  IDeviceDefinitionDeviceName,
} from '@fhir-toolkit/r4-types';

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
