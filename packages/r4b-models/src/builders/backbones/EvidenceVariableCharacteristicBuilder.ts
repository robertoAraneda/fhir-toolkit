import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableCharacteristic } from '../../models/backbones/EvidenceVariableCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  GroupMeasureType,
  ICodeableConcept,
  IEvidenceVariableCharacteristic,
  IEvidenceVariableCharacteristicTimeFromStart,
  IExpression,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceVariableCharacteristicBuilder - Fluent builder for EvidenceVariableCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableCharacteristic = new EvidenceVariableCharacteristicBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class EvidenceVariableCharacteristicBuilder extends BackboneElementBuilder<EvidenceVariableCharacteristic, IEvidenceVariableCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Natural language description of the characteristic
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set method
   * Method used for describing characteristic
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
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
   * Set exclude
   * Whether the characteristic includes or excludes members
   */
  setExclude(exclude: boolean): this {
    this.data.exclude = exclude;
    return this;
  }

  /**
   * Set timeFromStart
   * Observation time from study start
   */
  setTimeFromStart(timeFromStart: IEvidenceVariableCharacteristicTimeFromStart): this {
    this.data.timeFromStart = timeFromStart;
    return this;
  }

  /**
   * Set groupMeasure
   * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   */
  setGroupMeasure(groupMeasure: GroupMeasureType): this {
    this.data.groupMeasure = groupMeasure;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set definition choice type (definitionReference, definitionCanonical, definitionCodeableConcept, definitionExpression)
   * @param type - 'Reference' | 'Canonical' | 'CodeableConcept' | 'Expression'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDefinition('Reference', value)
   */
  setDefinition<T extends 'Reference' | 'Canonical' | 'CodeableConcept' | 'Expression'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `definition${type}` as keyof IEvidenceVariableCharacteristic;
    const otherKeys: (keyof IEvidenceVariableCharacteristic)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('definitionReference' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_definitionReference' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'Canonical') {
      otherKeys.push('definitionCanonical' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_definitionCanonical' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('definitionCodeableConcept' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_definitionCodeableConcept' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'Expression') {
      otherKeys.push('definitionExpression' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_definitionExpression' as keyof IEvidenceVariableCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariableCharacteristic instance
   */
  build(): EvidenceVariableCharacteristic {
    return new EvidenceVariableCharacteristic(this.data);
  }

  /**
   * Build and validate the EvidenceVariableCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariableCharacteristic> {
    const evidenceVariableCharacteristic = this.build();
    await evidenceVariableCharacteristic.validateOrThrow();
    return evidenceVariableCharacteristic;
  }
}
