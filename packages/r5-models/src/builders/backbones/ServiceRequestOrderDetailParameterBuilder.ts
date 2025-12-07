import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ServiceRequestOrderDetailParameter } from '../../models/backbones/ServiceRequestOrderDetailParameter.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IServiceRequestOrderDetailParameter,
} from '@fhir-toolkit/r5-types';

/**
 * ServiceRequestOrderDetailParameterBuilder - Fluent builder for ServiceRequestOrderDetailParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const serviceRequestOrderDetailParameter = new ServiceRequestOrderDetailParameterBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ServiceRequestOrderDetailParameterBuilder extends BackboneElementBuilder<ServiceRequestOrderDetailParameter, IServiceRequestOrderDetailParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * The detail of the order being requested
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueQuantity, valueRatio, valueRange, valueBoolean, valueCodeableConcept, valueString, valuePeriod)
   * @param type - 'Quantity' | 'Ratio' | 'Range' | 'Boolean' | 'CodeableConcept' | 'String' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'Ratio' | 'Range' | 'Boolean' | 'CodeableConcept' | 'String' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IServiceRequestOrderDetailParameter;
    const otherKeys: (keyof IServiceRequestOrderDetailParameter)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IServiceRequestOrderDetailParameter);
      otherKeys.push('_valueQuantity' as keyof IServiceRequestOrderDetailParameter);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IServiceRequestOrderDetailParameter);
      otherKeys.push('_valueRatio' as keyof IServiceRequestOrderDetailParameter);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IServiceRequestOrderDetailParameter);
      otherKeys.push('_valueRange' as keyof IServiceRequestOrderDetailParameter);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IServiceRequestOrderDetailParameter);
      otherKeys.push('_valueBoolean' as keyof IServiceRequestOrderDetailParameter);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IServiceRequestOrderDetailParameter);
      otherKeys.push('_valueCodeableConcept' as keyof IServiceRequestOrderDetailParameter);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IServiceRequestOrderDetailParameter);
      otherKeys.push('_valueString' as keyof IServiceRequestOrderDetailParameter);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IServiceRequestOrderDetailParameter);
      otherKeys.push('_valuePeriod' as keyof IServiceRequestOrderDetailParameter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ServiceRequestOrderDetailParameter instance
   */
  build(): ServiceRequestOrderDetailParameter {
    return new ServiceRequestOrderDetailParameter(this.data);
  }

  /**
   * Build and validate the ServiceRequestOrderDetailParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ServiceRequestOrderDetailParameter> {
    const serviceRequestOrderDetailParameter = this.build();
    await serviceRequestOrderDetailParameter.validateOrThrow();
    return serviceRequestOrderDetailParameter;
  }
}
