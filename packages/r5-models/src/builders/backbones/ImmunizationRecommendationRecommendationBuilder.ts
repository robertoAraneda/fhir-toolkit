import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationRecommendationRecommendation } from '../../models/backbones/ImmunizationRecommendationRecommendation.js';
import type {
  ICodeableConcept,
  IImmunizationRecommendationRecommendation,
  IImmunizationRecommendationRecommendationDateCriterion,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ImmunizationRecommendationRecommendationBuilder - Fluent builder for ImmunizationRecommendationRecommendation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationRecommendationRecommendation = new ImmunizationRecommendationRecommendationBuilder()
 *   .setForecastStatus(value)
 *   .addVaccineCode({ ... })
 *   .build();
 */
export class ImmunizationRecommendationRecommendationBuilder extends BackboneElementBuilder<ImmunizationRecommendationRecommendation, IImmunizationRecommendationRecommendation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

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

  /**
   * Set doseNumber
   * Recommended dose number within series
   */
  setDoseNumber(doseNumber: string): this {
    this.data.doseNumber = doseNumber;
    return this;
  }

  /**
   * Set seriesDoses
   * Recommended number of doses for immunity
   */
  setSeriesDoses(seriesDoses: string): this {
    this.data.seriesDoses = seriesDoses;
    return this;
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
   * Add targetDisease
   * Disease to be immunized against
   */
  addTargetDisease(targetDisease: ICodeableConcept): this {
    return this.addToArray('targetDisease', targetDisease);
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
