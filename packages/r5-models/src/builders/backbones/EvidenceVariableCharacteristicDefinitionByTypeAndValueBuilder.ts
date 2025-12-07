import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableCharacteristicDefinitionByTypeAndValue } from '../../models/backbones/EvidenceVariableCharacteristicDefinitionByTypeAndValue.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IEvidenceVariableCharacteristicDefinitionByTypeAndValue,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceVariableCharacteristicDefinitionByTypeAndValueBuilder - Fluent builder for EvidenceVariableCharacteristicDefinitionByTypeAndValue backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableCharacteristicDefinitionByTypeAndValue = new EvidenceVariableCharacteristicDefinitionByTypeAndValueBuilder()
 *   .setType(value)
 *   .addMethod({ ... })
 *   .build();
 */
export class EvidenceVariableCharacteristicDefinitionByTypeAndValueBuilder extends BackboneElementBuilder<EvidenceVariableCharacteristicDefinitionByTypeAndValue, IEvidenceVariableCharacteristicDefinitionByTypeAndValue> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Expresses the type of characteristic
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set device
   * Device used for determining characteristic
   */
  setDevice(device: IReference<'Device' | 'DeviceMetric'>): this {
    this.data.device = device;
    return this;
  }

  /**
   * Set offset
   * Reference point for valueQuantity or valueRange
   */
  setOffset(offset: ICodeableConcept): this {
    this.data.offset = offset;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueBoolean, valueQuantity, valueRange, valueReference, valueId)
   * @param type - 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range' | 'Reference' | 'Id'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Boolean' | 'Quantity' | 'Range' | 'Reference' | 'Id'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue;
    const otherKeys: (keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
      otherKeys.push('_valueCodeableConcept' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
      otherKeys.push('_valueBoolean' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
      otherKeys.push('_valueQuantity' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
      otherKeys.push('_valueRange' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
      otherKeys.push('_valueReference' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
    }
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
      otherKeys.push('_valueId' as keyof IEvidenceVariableCharacteristicDefinitionByTypeAndValue);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add method
   * Method for how the characteristic value was determined
   */
  addMethod(method: ICodeableConcept): this {
    return this.addToArray('method', method);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariableCharacteristicDefinitionByTypeAndValue instance
   */
  build(): EvidenceVariableCharacteristicDefinitionByTypeAndValue {
    return new EvidenceVariableCharacteristicDefinitionByTypeAndValue(this.data);
  }

  /**
   * Build and validate the EvidenceVariableCharacteristicDefinitionByTypeAndValue instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariableCharacteristicDefinitionByTypeAndValue> {
    const evidenceVariableCharacteristicDefinitionByTypeAndValue = this.build();
    await evidenceVariableCharacteristicDefinitionByTypeAndValue.validateOrThrow();
    return evidenceVariableCharacteristicDefinitionByTypeAndValue;
  }
}
