import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionCapability } from '../../models/backbones/DeviceDefinitionCapability.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionCapability,
} from '@fhir-toolkit/r4b-types';

/**
 * DeviceDefinitionCapabilityBuilder - Fluent builder for DeviceDefinitionCapability backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionCapability = new DeviceDefinitionCapabilityBuilder()
 *   .setType(value)
 *   .addDescription({ ... })
 *   .build();
 */
export class DeviceDefinitionCapabilityBuilder extends BackboneElementBuilder<DeviceDefinitionCapability, IDeviceDefinitionCapability> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of capability
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add description
   * Description of capability
   */
  addDescription(description: ICodeableConcept): this {
    return this.addToArray('description', description);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionCapability instance
   */
  build(): DeviceDefinitionCapability {
    return new DeviceDefinitionCapability(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionCapability instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionCapability> {
    const deviceDefinitionCapability = this.build();
    await deviceDefinitionCapability.validateOrThrow();
    return deviceDefinitionCapability;
  }
}
