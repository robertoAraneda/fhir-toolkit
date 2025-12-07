import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceProperty } from '../../models/backbones/DeviceProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IDeviceProperty,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

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
   * Code that specifies the property being represented
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueInteger, valueRange, valueAttachment)
   * @param type - 'Quantity' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Range' | 'Attachment'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Range' | 'Attachment'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IDeviceProperty;
    const otherKeys: (keyof IDeviceProperty)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IDeviceProperty);
      otherKeys.push('_valueQuantity' as keyof IDeviceProperty);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IDeviceProperty);
      otherKeys.push('_valueCodeableConcept' as keyof IDeviceProperty);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IDeviceProperty);
      otherKeys.push('_valueString' as keyof IDeviceProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IDeviceProperty);
      otherKeys.push('_valueBoolean' as keyof IDeviceProperty);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IDeviceProperty);
      otherKeys.push('_valueInteger' as keyof IDeviceProperty);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IDeviceProperty);
      otherKeys.push('_valueRange' as keyof IDeviceProperty);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IDeviceProperty);
      otherKeys.push('_valueAttachment' as keyof IDeviceProperty);
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
