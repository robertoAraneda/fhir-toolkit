import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceSpecialization } from '../../models/backbones/DeviceSpecialization.js';
import type {
  ICodeableConcept,
  IDeviceSpecialization,
} from '@fhir-toolkit/r4-types';

/**
 * DeviceSpecializationBuilder - Fluent builder for DeviceSpecialization backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceSpecialization = new DeviceSpecializationBuilder()
 *   .setSystemType(value)
 *   .build();
 */
export class DeviceSpecializationBuilder extends BackboneElementBuilder<DeviceSpecialization, IDeviceSpecialization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set systemType
   * The standard that is used to operate and communicate
   */
  setSystemType(systemType: ICodeableConcept): this {
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
   * Build the DeviceSpecialization instance
   */
  build(): DeviceSpecialization {
    return new DeviceSpecialization(this.data);
  }

  /**
   * Build and validate the DeviceSpecialization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceSpecialization> {
    const deviceSpecialization = this.build();
    await deviceSpecialization.validateOrThrow();
    return deviceSpecialization;
  }
}
