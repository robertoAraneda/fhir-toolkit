import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { ImmunizationEvaluation } from '../../models/resources/ImmunizationEvaluation.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IImmunizationEvaluation,
  IReference,
  ImmunizationEvaluationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * ImmunizationEvaluationBuilder - Fluent builder for ImmunizationEvaluation resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationEvaluation = new ImmunizationEvaluationBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class ImmunizationEvaluationBuilder extends DomainResourceBuilder<ImmunizationEvaluation, IImmunizationEvaluation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * completed | entered-in-error
   */
  setStatus(status: ImmunizationEvaluationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set patient
   * Who this evaluation is for
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set date
   * Date evaluation was performed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set authority
   * Who is responsible for publishing the recommendations
   */
  setAuthority(authority: IReference<'Organization'>): this {
    this.data.authority = authority;
    return this;
  }

  /**
   * Set targetDisease
   * Evaluation target disease
   */
  setTargetDisease(targetDisease: ICodeableConcept): this {
    this.data.targetDisease = targetDisease;
    return this;
  }

  /**
   * Set immunizationEvent
   * Immunization being evaluated
   */
  setImmunizationEvent(immunizationEvent: IReference<'Immunization'>): this {
    this.data.immunizationEvent = immunizationEvent;
    return this;
  }

  /**
   * Set doseStatus
   * Status of the dose relative to published recommendations
   */
  setDoseStatus(doseStatus: ICodeableConcept): this {
    this.data.doseStatus = doseStatus;
    return this;
  }

  /**
   * Set description
   * Evaluation notes
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set series
   * Name of vaccine series
   */
  setSeries(series: string): this {
    this.data.series = series;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set doseNumber choice type (doseNumberPositiveInt, doseNumberString)
   * @param type - 'PositiveInt' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDoseNumber('PositiveInt', value)
   */
  setDoseNumber<T extends 'PositiveInt' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `doseNumber${type}` as keyof IImmunizationEvaluation;
    const otherKeys: (keyof IImmunizationEvaluation)[] = [];
    if (type !== 'PositiveInt') {
      otherKeys.push('doseNumberPositiveInt' as keyof IImmunizationEvaluation);
      otherKeys.push('_doseNumberPositiveInt' as keyof IImmunizationEvaluation);
    }
    if (type !== 'String') {
      otherKeys.push('doseNumberString' as keyof IImmunizationEvaluation);
      otherKeys.push('_doseNumberString' as keyof IImmunizationEvaluation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set seriesDoses choice type (seriesDosesPositiveInt, seriesDosesString)
   * @param type - 'PositiveInt' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSeriesDoses('PositiveInt', value)
   */
  setSeriesDoses<T extends 'PositiveInt' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `seriesDoses${type}` as keyof IImmunizationEvaluation;
    const otherKeys: (keyof IImmunizationEvaluation)[] = [];
    if (type !== 'PositiveInt') {
      otherKeys.push('seriesDosesPositiveInt' as keyof IImmunizationEvaluation);
      otherKeys.push('_seriesDosesPositiveInt' as keyof IImmunizationEvaluation);
    }
    if (type !== 'String') {
      otherKeys.push('seriesDosesString' as keyof IImmunizationEvaluation);
      otherKeys.push('_seriesDosesString' as keyof IImmunizationEvaluation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add doseStatusReason
   * Reason for the dose status
   */
  addDoseStatusReason(doseStatusReason: ICodeableConcept): this {
    return this.addToArray('doseStatusReason', doseStatusReason);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationEvaluation instance
   */
  build(): ImmunizationEvaluation {
    return new ImmunizationEvaluation(this.data);
  }

  /**
   * Build and validate the ImmunizationEvaluation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationEvaluation> {
    const immunizationEvaluation = this.build();
    await immunizationEvaluation.validateOrThrow();
    return immunizationEvaluation;
  }
}
