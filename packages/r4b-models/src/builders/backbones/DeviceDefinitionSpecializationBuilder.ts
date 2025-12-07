import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionSpecialization } from '../../models/backbones/DeviceDefinitionSpecialization.js';
import type {
  IDeviceDefinitionSpecialization,
} from '@fhir-toolkit/r4b-types';

/**
 * DeviceDefinitionSpecializationBuilder - Fluent builder for DeviceDefinitionSpecialization backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionSpecialization = new DeviceDefinitionSpecializationBuilder()
 *   .setSystemType(value)
 *   .build();
 */
export class DeviceDefinitionSpecializationBuilder extends BackboneElementBuilder<DeviceDefinitionSpecialization, IDeviceDefinitionSpecialization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set systemType
   * The standard that is used to operate and communicate
   */
  setSystemType(systemType: string): this {
    this.data.systemType = systemType;
    return this;
  }

  /**
   * Set version
   * The version of the standard that is used to operate and communicate
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionSpecialization instance
   */
  build(): DeviceDefinitionSpecialization {
    return new DeviceDefinitionSpecialization(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionSpecialization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionSpecialization> {
    const deviceDefinitionSpecialization = this.build();
    await deviceDefinitionSpecialization.validateOrThrow();
    return deviceDefinitionSpecialization;
  }
}
