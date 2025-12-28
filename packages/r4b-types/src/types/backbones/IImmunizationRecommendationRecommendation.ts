import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IImmunizationRecommendationRecommendationDateCriterion } from './IImmunizationRecommendationRecommendationDateCriterion.js';

/**
 * ImmunizationRecommendationRecommendation Interface
 * 
 * Vaccine administration recommendations
 * 
 *
 * @see https://hl7.org/fhir/R4B/immunizationrecommendationrecommendation.html
 */
export interface IImmunizationRecommendationRecommendation extends IBackboneElement {
  /**
   * Vaccine  or vaccine group recommendation applies to
   */
  vaccineCode?: ICodeableConcept[];

  /**
   * Disease to be immunized against
   */
  targetDisease?: ICodeableConcept;

  /**
   * Vaccine which is contraindicated to fulfill the recommendation
   */
  contraindicatedVaccineCode?: ICodeableConcept[];

  /**
   * Vaccine recommendation status
   */
  forecastStatus: ICodeableConcept;

  /**
   * Vaccine administration status reason
   */
  forecastReason?: ICodeableConcept[];

  /**
   * Dates governing proposed immunization
   */
  dateCriterion?: IImmunizationRecommendationRecommendationDateCriterion[];

  /**
   * Protocol details
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Name of vaccination series
   */
  series?: string;
  /**
   * Extension for series
   */
  _series?: IElement;

  /**
   * Recommended dose number within series
   */
  doseNumberPositiveInt?: number;
  /**
   * Extension for doseNumberPositiveInt
   */
  _doseNumberPositiveInt?: IElement;

  /**
   * Recommended dose number within series
   */
  doseNumberString?: string;
  /**
   * Extension for doseNumberString
   */
  _doseNumberString?: IElement;

  /**
   * Recommended number of doses for immunity
   */
  seriesDosesPositiveInt?: number;
  /**
   * Extension for seriesDosesPositiveInt
   */
  _seriesDosesPositiveInt?: IElement;

  /**
   * Recommended number of doses for immunity
   */
  seriesDosesString?: string;
  /**
   * Extension for seriesDosesString
   */
  _seriesDosesString?: IElement;

  /**
   * Past immunizations supporting recommendation
   */
  supportingImmunization?: IReference<'Immunization' | 'ImmunizationEvaluation'>[];

  /**
   * Patient observations supporting recommendation
   */
  supportingPatientInformation?: IReference<'Resource'>[];

}
