import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionVersion } from '../../models/backbones/DeviceDefinitionVersion.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionVersion,
  IIdentifier,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceDefinitionVersionBuilder - Fluent builder for DeviceDefinitionVersion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionVersion = new DeviceDefinitionVersionBuilder()
 *   .setType(value)
 *   .build();
 */
export class DeviceDefinitionVersionBuilder extends BackboneElementBuilder<DeviceDefinitionVersion, IDeviceDefinitionVersion> {
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
   * Build the DeviceDefinitionVersion instance
   */
  build(): DeviceDefinitionVersion {
    return new DeviceDefinitionVersion(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionVersion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionVersion> {
    const deviceDefinitionVersion = this.build();
    await deviceDefinitionVersion.validateOrThrow();
    return deviceDefinitionVersion;
  }
}
