import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ImmunizationRecommendationRecommendationDateCriterion Interface
 * 
 * Dates governing proposed immunization
 * 
 *
 * @see https://hl7.org/fhir/R4B/immunizationrecommendationrecommendationdatecriterion.html
 */
export interface IImmunizationRecommendationRecommendationDateCriterion extends IBackboneElement {
  /**
   * Type of date
   */
  code: ICodeableConcept;

  /**
   * Recommended date
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
