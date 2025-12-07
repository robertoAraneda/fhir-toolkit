import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionProperty } from '../../models/backbones/DeviceDefinitionProperty.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionProperty,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * DeviceDefinitionPropertyBuilder - Fluent builder for DeviceDefinitionProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionProperty = new DeviceDefinitionPropertyBuilder()
 *   .setType(value)
 *   .addValueQuantity({ ... })
 *   .build();
 */
export class DeviceDefinitionPropertyBuilder extends BackboneElementBuilder<DeviceDefinitionProperty, IDeviceDefinitionProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add valueQuantity
   * Property value as a quantity
   */
  addValueQuantity(valueQuantity: IQuantity): this {
    return this.addToArray('valueQuantity', valueQuantity);
  }

  /**
   * Add valueCode
   * Property value as a code, e.g., NTP4 (synced to NTP)
   */
  addValueCode(valueCode: ICodeableConcept): this {
    return this.addToArray('valueCode', valueCode);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceDefinitionProperty instance
   */
  build(): DeviceDefinitionProperty {
    return new DeviceDefinitionProperty(this.data);
  }

  /**
   * Build and validate the DeviceDefinitionProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceDefinitionProperty> {
    const deviceDefinitionProperty = this.build();
    await deviceDefinitionProperty.validateOrThrow();
    return deviceDefinitionProperty;
  }
}
