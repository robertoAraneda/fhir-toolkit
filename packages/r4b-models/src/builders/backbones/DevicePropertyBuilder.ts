import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceProperty } from '../../models/backbones/DeviceProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDeviceProperty,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * DevicePropertyBuilder - Fluent builder for DeviceProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceProperty = new DevicePropertyBuilder()
 *   .setType(value)
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
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'Quantity' | 'Code'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'Code'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IDeviceProperty;
    const otherKeys: (keyof IDeviceProperty)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IDeviceProperty);
      otherKeys.push('_valueQuantity' as keyof IDeviceProperty);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IDeviceProperty);
      otherKeys.push('_valueCode' as keyof IDeviceProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
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
