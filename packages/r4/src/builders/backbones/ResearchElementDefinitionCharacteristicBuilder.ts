import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchElementDefinitionCharacteristic } from '../../models/backbones/ResearchElementDefinitionCharacteristic.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  GroupMeasureType,
  ICodeableConcept,
  IDataRequirement,
  IDuration,
  IExpression,
  IPeriod,
  IResearchElementDefinitionCharacteristic,
  ITiming,
  IUsageContext,
} from '@fhir-toolkit/r4-types';

/**
 * ResearchElementDefinitionCharacteristicBuilder - Fluent builder for ResearchElementDefinitionCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchElementDefinitionCharacteristic = new ResearchElementDefinitionCharacteristicBuilder()
 *   .setExclude(value)
 *   .addUsageContext({ ... })
 *   .build();
 */
export class ResearchElementDefinitionCharacteristicBuilder extends BackboneElementBuilder<ResearchElementDefinitionCharacteristic, IResearchElementDefinitionCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set exclude
   * Whether the characteristic includes or excludes members
   */
  setExclude(exclude: boolean): this {
    this.data.exclude = exclude;
    return this;
  }

  /**
   * Set unitOfMeasure
   * What unit is the outcome described in?
   */
  setUnitOfMeasure(unitOfMeasure: ICodeableConcept): this {
    this.data.unitOfMeasure = unitOfMeasure;
    return this;
  }

  /**
   * Set studyEffectiveDescription
   * What time period does the study cover
   */
  setStudyEffectiveDescription(studyEffectiveDescription: string): this {
    this.data.studyEffectiveDescription = studyEffectiveDescription;
    return this;
  }

  /**
   * Set studyEffectiveTimeFromStart
   * Observation time from study start
   */
  setStudyEffectiveTimeFromStart(studyEffectiveTimeFromStart: IDuration): this {
    this.data.studyEffectiveTimeFromStart = studyEffectiveTimeFromStart;
    return this;
  }

  /**
   * Set studyEffectiveGroupMeasure
   * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   */
  setStudyEffectiveGroupMeasure(studyEffectiveGroupMeasure: GroupMeasureType): this {
    this.data.studyEffectiveGroupMeasure = studyEffectiveGroupMeasure;
    return this;
  }

  /**
   * Set participantEffectiveDescription
   * What time period do participants cover
   */
  setParticipantEffectiveDescription(participantEffectiveDescription: string): this {
    this.data.participantEffectiveDescription = participantEffectiveDescription;
    return this;
  }

  /**
   * Set participantEffectiveTimeFromStart
   * Observation time from study start
   */
  setParticipantEffectiveTimeFromStart(participantEffectiveTimeFromStart: IDuration): this {
    this.data.participantEffectiveTimeFromStart = participantEffectiveTimeFromStart;
    return this;
  }

  /**
   * Set participantEffectiveGroupMeasure
   * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   */
  setParticipantEffectiveGroupMeasure(participantEffectiveGroupMeasure: GroupMeasureType): this {
    this.data.participantEffectiveGroupMeasure = participantEffectiveGroupMeasure;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set definition choice type (definitionCodeableConcept, definitionCanonical, definitionExpression, definitionDataRequirement)
   * @param type - 'CodeableConcept' | 'Canonical' | 'Expression' | 'DataRequirement'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDefinition('CodeableConcept', value)
   */
  setDefinition<T extends 'CodeableConcept' | 'Canonical' | 'Expression' | 'DataRequirement'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `definition${type}` as keyof IResearchElementDefinitionCharacteristic;
    const otherKeys: (keyof IResearchElementDefinitionCharacteristic)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('definitionCodeableConcept' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_definitionCodeableConcept' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'Canonical') {
      otherKeys.push('definitionCanonical' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_definitionCanonical' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'Expression') {
      otherKeys.push('definitionExpression' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_definitionExpression' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'DataRequirement') {
      otherKeys.push('definitionDataRequirement' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_definitionDataRequirement' as keyof IResearchElementDefinitionCharacteristic);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set studyEffective choice type (studyEffectiveDateTime, studyEffectivePeriod, studyEffectiveDuration, studyEffectiveTiming)
   * @param type - 'DateTime' | 'Period' | 'Duration' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setStudyEffective('DateTime', value)
   */
  setStudyEffective<T extends 'DateTime' | 'Period' | 'Duration' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `studyEffective${type}` as keyof IResearchElementDefinitionCharacteristic;
    const otherKeys: (keyof IResearchElementDefinitionCharacteristic)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('studyEffectiveDateTime' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_studyEffectiveDateTime' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'Period') {
      otherKeys.push('studyEffectivePeriod' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_studyEffectivePeriod' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'Duration') {
      otherKeys.push('studyEffectiveDuration' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_studyEffectiveDuration' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'Timing') {
      otherKeys.push('studyEffectiveTiming' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_studyEffectiveTiming' as keyof IResearchElementDefinitionCharacteristic);
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
    const key = `participantEffective${type}` as keyof IResearchElementDefinitionCharacteristic;
    const otherKeys: (keyof IResearchElementDefinitionCharacteristic)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('participantEffectiveDateTime' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_participantEffectiveDateTime' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'Period') {
      otherKeys.push('participantEffectivePeriod' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_participantEffectivePeriod' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'Duration') {
      otherKeys.push('participantEffectiveDuration' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_participantEffectiveDuration' as keyof IResearchElementDefinitionCharacteristic);
    }
    if (type !== 'Timing') {
      otherKeys.push('participantEffectiveTiming' as keyof IResearchElementDefinitionCharacteristic);
      otherKeys.push('_participantEffectiveTiming' as keyof IResearchElementDefinitionCharacteristic);
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
   * Build the ResearchElementDefinitionCharacteristic instance
   */
  build(): ResearchElementDefinitionCharacteristic {
    return new ResearchElementDefinitionCharacteristic(this.data);
  }

  /**
   * Build and validate the ResearchElementDefinitionCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchElementDefinitionCharacteristic> {
    const researchElementDefinitionCharacteristic = this.build();
    await researchElementDefinitionCharacteristic.validateOrThrow();
    return researchElementDefinitionCharacteristic;
  }
}
