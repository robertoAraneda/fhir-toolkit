import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableCharacteristic } from '../../models/backbones/EvidenceVariableCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  GroupMeasureType,
  ICodeableConcept,
  IDataRequirement,
  IDuration,
  IEvidenceVariableCharacteristic,
  IExpression,
  IPeriod,
  IReference,
  ITiming,
  ITriggerDefinition,
  IUsageContext,
} from '@fhir-toolkit/r4-types';

/**
 * EvidenceVariableCharacteristicBuilder - Fluent builder for EvidenceVariableCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableCharacteristic = new EvidenceVariableCharacteristicBuilder()
 *   .setDescription(value)
 *   .addUsageContext({ ... })
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
  setTimeFromStart(timeFromStart: IDuration): this {
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
   * Set definition choice type (definitionReference, definitionCanonical, definitionCodeableConcept, definitionExpression, definitionDataRequirement, definitionTriggerDefinition)
   * @param type - 'Reference' | 'Canonical' | 'CodeableConcept' | 'Expression' | 'DataRequirement' | 'TriggerDefinition'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDefinition('Reference', value)
   */
  setDefinition<T extends 'Reference' | 'Canonical' | 'CodeableConcept' | 'Expression' | 'DataRequirement' | 'TriggerDefinition'>(
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
    if (type !== 'DataRequirement') {
      otherKeys.push('definitionDataRequirement' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_definitionDataRequirement' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'TriggerDefinition') {
      otherKeys.push('definitionTriggerDefinition' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_definitionTriggerDefinition' as keyof IEvidenceVariableCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set participantEffective choice type (participantEffectiveDateTime, participantEffectivePeriod, participantEffectiveDuration, participantEffectiveTiming)
   * @param type - 'DateTime' | 'Period' | 'Duration' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setParticipantEffective('DateTime', value)
   */
  setParticipantEffective<T extends 'DateTime' | 'Period' | 'Duration' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `participantEffective${type}` as keyof IEvidenceVariableCharacteristic;
    const otherKeys: (keyof IEvidenceVariableCharacteristic)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('participantEffectiveDateTime' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_participantEffectiveDateTime' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'Period') {
      otherKeys.push('participantEffectivePeriod' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_participantEffectivePeriod' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'Duration') {
      otherKeys.push('participantEffectiveDuration' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_participantEffectiveDuration' as keyof IEvidenceVariableCharacteristic);
    }
    if (type !== 'Timing') {
      otherKeys.push('participantEffectiveTiming' as keyof IEvidenceVariableCharacteristic);
      otherKeys.push('_participantEffectiveTiming' as keyof IEvidenceVariableCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add usageContext
   * What code/value pairs define members?
   */
  addUsageContext(usageContext: IUsageContext): this {
    return this.addToArray('usageContext', usageContext);
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
