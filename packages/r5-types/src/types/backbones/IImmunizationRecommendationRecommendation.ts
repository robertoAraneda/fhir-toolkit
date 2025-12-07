import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IImmunizationRecommendationRecommendationDateCriterion } from './IImmunizationRecommendationRecommendationDateCriterion.js';

/**
 * ImmunizationRecommendationRecommendation Interface
 * 
 * Vaccine administration recommendations
 * 
 *
 * @see https://hl7.org/fhir/R4/immunizationrecommendationrecommendation.html
 */
export interface IImmunizationRecommendationRecommendation extends IBackboneElement {
  /**
   * Vaccine  or vaccine group recommendation applies to
   */
  vaccineCode?: ICodeableConcept[];

  /**
   * Disease to be immunized against
   */
  targetDisease?: ICodeableConcept[];

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
  doseNumber?: string;
  /**
   * Extension for doseNumber
   */
  _doseNumber?: IElement;

  /**
   * Recommended number of doses for immunity
   */
  seriesDoses?: string;
  /**
   * Extension for seriesDoses
   */
  _seriesDoses?: IElement;

  /**
   * Past immunizations supporting recommendation
   */
  supportingImmunization?: IReference<'Immunization' | 'ImmunizationEvaluation'>[];

  /**
   * Patient observations supporting recommendation
   */
  supportingPatientInformation?: IReference<'Resource'>[];

}
