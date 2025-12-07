import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceProperty } from '../../models/backbones/DeviceProperty.js';
import type {
  ICodeableConcept,
  IDeviceProperty,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * DevicePropertyBuilder - Fluent builder for DeviceProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceProperty = new DevicePropertyBuilder()
 *   .setType(value)
 *   .addValueQuantity({ ... })
 *   .build();
 */
export class DevicePropertyBuilder extends BackboneElementBuilder<DeviceProperty, IDeviceProperty> {
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
   * Build the DeviceProperty instance
   */
  build(): DeviceProperty {
    return new DeviceProperty(this.data);
  }

  /**
   * Build and validate the DeviceProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceProperty> {
    const deviceProperty = this.build();
    await deviceProperty.validateOrThrow();
    return deviceProperty;
  }
}
