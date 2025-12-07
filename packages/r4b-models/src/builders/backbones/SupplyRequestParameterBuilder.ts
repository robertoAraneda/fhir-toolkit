import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SupplyRequestParameter } from '../../models/backbones/SupplyRequestParameter.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IQuantity,
  IRange,
  ISupplyRequestParameter,
} from '@fhir-toolkit/r4b-types';

/**
 * SupplyRequestParameterBuilder - Fluent builder for SupplyRequestParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const supplyRequestParameter = new SupplyRequestParameterBuilder()
 *   .setCode(value)
 *   .build();
 */
export class SupplyRequestParameterBuilder extends BackboneElementBuilder<SupplyRequestParameter, ISupplyRequestParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Item detail
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
    const key = `value${type}` as keyof ISupplyRequestParameter;
    const otherKeys: (keyof ISupplyRequestParameter)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof ISupplyRequestParameter);
      otherKeys.push('_valueCodeableConcept' as keyof ISupplyRequestParameter);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof ISupplyRequestParameter);
      otherKeys.push('_valueQuantity' as keyof ISupplyRequestParameter);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof ISupplyRequestParameter);
      otherKeys.push('_valueRange' as keyof ISupplyRequestParameter);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof ISupplyRequestParameter);
      otherKeys.push('_valueBoolean' as keyof ISupplyRequestParameter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SupplyRequestParameter instance
   */
  build(): SupplyRequestParameter {
    return new SupplyRequestParameter(this.data);
  }

  /**
   * Build and validate the SupplyRequestParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SupplyRequestParameter> {
    const supplyRequestParameter = this.build();
    await supplyRequestParameter.validateOrThrow();
    return supplyRequestParameter;
  }
}
