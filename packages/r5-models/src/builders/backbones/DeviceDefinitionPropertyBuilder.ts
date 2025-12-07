import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceDefinitionProperty } from '../../models/backbones/DeviceDefinitionProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IDeviceDefinitionProperty,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

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
    const key = `value${type}` as keyof IDeviceDefinitionProperty;
    const otherKeys: (keyof IDeviceDefinitionProperty)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueQuantity' as keyof IDeviceDefinitionProperty);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueCodeableConcept' as keyof IDeviceDefinitionProperty);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueString' as keyof IDeviceDefinitionProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueBoolean' as keyof IDeviceDefinitionProperty);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueInteger' as keyof IDeviceDefinitionProperty);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueRange' as keyof IDeviceDefinitionProperty);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IDeviceDefinitionProperty);
      otherKeys.push('_valueAttachment' as keyof IDeviceDefinitionProperty);
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
