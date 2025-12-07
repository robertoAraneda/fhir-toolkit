import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationRecommendationRecommendation } from '../../models/backbones/ImmunizationRecommendationRecommendation.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IImmunizationRecommendationRecommendation,
  IImmunizationRecommendationRecommendationDateCriterion,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ImmunizationRecommendationRecommendationBuilder - Fluent builder for ImmunizationRecommendationRecommendation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationRecommendationRecommendation = new ImmunizationRecommendationRecommendationBuilder()
 *   .setTargetDisease(value)
 *   .addVaccineCode({ ... })
 *   .build();
 */
export class ImmunizationRecommendationRecommendationBuilder extends BackboneElementBuilder<ImmunizationRecommendationRecommendation, IImmunizationRecommendationRecommendation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set targetDisease
   * Disease to be immunized against
   */
  setTargetDisease(targetDisease: ICodeableConcept): this {
    this.data.targetDisease = targetDisease;
    return this;
  }

  /**
   * Set forecastStatus
   * Vaccine recommendation status
   */
  setForecastStatus(forecastStatus: ICodeableConcept): this {
    this.data.forecastStatus = forecastStatus;
    return this;
  }

  /**
   * Set description
   * Protocol details
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set series
   * Name of vaccination series
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
    const key = `doseNumber${type}` as keyof IImmunizationRecommendationRecommendation;
    const otherKeys: (keyof IImmunizationRecommendationRecommendation)[] = [];
    if (type !== 'PositiveInt') {
      otherKeys.push('doseNumberPositiveInt' as keyof IImmunizationRecommendationRecommendation);
      otherKeys.push('_doseNumberPositiveInt' as keyof IImmunizationRecommendationRecommendation);
    }
    if (type !== 'String') {
      otherKeys.push('doseNumberString' as keyof IImmunizationRecommendationRecommendation);
      otherKeys.push('_doseNumberString' as keyof IImmunizationRecommendationRecommendation);
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
    const key = `seriesDoses${type}` as keyof IImmunizationRecommendationRecommendation;
    const otherKeys: (keyof IImmunizationRecommendationRecommendation)[] = [];
    if (type !== 'PositiveInt') {
      otherKeys.push('seriesDosesPositiveInt' as keyof IImmunizationRecommendationRecommendation);
      otherKeys.push('_seriesDosesPositiveInt' as keyof IImmunizationRecommendationRecommendation);
    }
    if (type !== 'String') {
      otherKeys.push('seriesDosesString' as keyof IImmunizationRecommendationRecommendation);
      otherKeys.push('_seriesDosesString' as keyof IImmunizationRecommendationRecommendation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add vaccineCode
   * Vaccine  or vaccine group recommendation applies to
   */
  addVaccineCode(vaccineCode: ICodeableConcept): this {
    return this.addToArray('vaccineCode', vaccineCode);
  }

  /**
   * Add contraindicatedVaccineCode
   * Vaccine which is contraindicated to fulfill the recommendation
   */
  addContraindicatedVaccineCode(contraindicatedVaccineCode: ICodeableConcept): this {
    return this.addToArray('contraindicatedVaccineCode', contraindicatedVaccineCode);
  }

  /**
   * Add forecastReason
   * Vaccine administration status reason
   */
  addForecastReason(forecastReason: ICodeableConcept): this {
    return this.addToArray('forecastReason', forecastReason);
  }

  /**
   * Add dateCriterion
   * Dates governing proposed immunization
   */
  addDateCriterion(dateCriterion: IImmunizationRecommendationRecommendationDateCriterion): this {
    return this.addToArray('dateCriterion', dateCriterion);
  }

  /**
   * Add supportingImmunization
   * Past immunizations supporting recommendation
   */
  addSupportingImmunization(supportingImmunization: IReference<'Immunization' | 'ImmunizationEvaluation'>): this {
    return this.addToArray('supportingImmunization', supportingImmunization);
  }

  /**
   * Add supportingPatientInformation
   * Patient observations supporting recommendation
   */
  addSupportingPatientInformation(supportingPatientInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingPatientInformation', supportingPatientInformation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationRecommendationRecommendation instance
   */
  build(): ImmunizationRecommendationRecommendation {
    return new ImmunizationRecommendationRecommendation(this.data);
  }

  /**
   * Build and validate the ImmunizationRecommendationRecommendation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationRecommendationRecommendation> {
    const immunizationRecommendationRecommendation = this.build();
    await immunizationRecommendationRecommendation.validateOrThrow();
    return immunizationRecommendationRecommendation;
  }
}
