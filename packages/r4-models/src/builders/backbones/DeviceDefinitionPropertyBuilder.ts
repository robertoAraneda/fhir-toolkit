import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionProperty } from '../../models/backbones/DeviceDefinitionProperty.js';
import type {
  ICodeableConcept,
  IDeviceDefinitionProperty,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * DeviceDefinitionPropertyBuilder - Fluent builder for DeviceDefinitionProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceDefinitionProperty = new DeviceDefinitionPropertyBuilder()
 *   .setType(value)
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
    value: string
  ): this {
    const key = `value${type}` as keyof IDeviceDefinitionProperty;
    const otherKeys: (keyof IDeviceDefinitionProperty)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueQuantity' as keyof IDeviceDefinitionProperty);
    }
    if (type !== 'Code') {
      otherKeys.push('valueCode' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueCode' as keyof IDeviceDefinitionProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
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
