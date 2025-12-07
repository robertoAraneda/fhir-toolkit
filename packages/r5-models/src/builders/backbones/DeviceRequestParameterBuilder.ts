import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DeviceRequestParameter } from '../../models/backbones/DeviceRequestParameter.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDeviceRequestParameter,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r5-types';

/**
 * DeviceRequestParameterBuilder - Fluent builder for DeviceRequestParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const deviceRequestParameter = new DeviceRequestParameterBuilder()
 *   .setCode(value)
 *   .build();
 */
export class DeviceRequestParameterBuilder extends BackboneElementBuilder<DeviceRequestParameter, IDeviceRequestParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Device detail
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueQuantity, valueRange, valueBoolean)
   * @param type - 'CodeableConcept' | 'Quantity' | 'Range' | 'Boolean'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Quantity' | 'Range' | 'Boolean'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IDeviceRequestParameter;
    const otherKeys: (keyof IDeviceRequestParameter)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IDeviceRequestParameter);
      otherKeys.push('_valueCodeableConcept' as keyof IDeviceRequestParameter);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IDeviceRequestParameter);
      otherKeys.push('_valueQuantity' as keyof IDeviceRequestParameter);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IDeviceRequestParameter);
      otherKeys.push('_valueRange' as keyof IDeviceRequestParameter);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IDeviceRequestParameter);
      otherKeys.push('_valueBoolean' as keyof IDeviceRequestParameter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DeviceRequestParameter instance
   */
  build(): DeviceRequestParameter {
    return new DeviceRequestParameter(this.data);
  }

  /**
   * Build and validate the DeviceRequestParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DeviceRequestParameter> {
    const deviceRequestParameter = this.build();
    await deviceRequestParameter.validateOrThrow();
    return deviceRequestParameter;
  }
}
