import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceVersion } from '../../models/backbones/DeviceVersion.js';
import type {
  ICodeableConcept,
  IDeviceVersion,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceVersionBuilder - Fluent builder for DeviceVersion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceVersion = new DeviceVersionBuilder()
 *   .setType(value)
 *   .build();
 */
export class DeviceVersionBuilder extends BackboneElementBuilder<DeviceVersion, IDeviceVersion> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of the device version, e.g. manufacturer, approved, internal
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set component
   * The hardware or software module of the device to which the version applies
   */
  setComponent(component: IIdentifier): this {
    this.data.component = component;
    return this;
  }

  /**
   * Set installDate
   * The date the version was installed on the device
   */
  setInstallDate(installDate: string): this {
    this.data.installDate = installDate;
    return this;
  }

  /**
   * Set value
   * The version text
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceVersion instance
   */
  build(): DeviceVersion {
    return new DeviceVersion(this.data);
  }

  /**
   * Build and validate the DeviceVersion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceVersion> {
    const deviceVersion = this.build();
    await deviceVersion.validateOrThrow();
    return deviceVersion;
  }
}
