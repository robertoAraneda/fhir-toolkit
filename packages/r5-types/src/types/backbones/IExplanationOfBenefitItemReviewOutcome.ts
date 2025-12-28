import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * ExplanationOfBenefitItemReviewOutcome Interface
 * 
 * Adjudication results
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefititemreviewoutcome.html
 */
export interface IExplanationOfBenefitItemReviewOutcome extends IBackboneElement {
  /**
   * Result of the adjudication
   */
  decision?: ICodeableConcept;

  /**
   * Reason for result of the adjudication
   */
  reason?: ICodeableConcept[];

  /**
   * Preauthorization reference
   */
  preAuthRef?: string;
  /**
   * Extension for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * Preauthorization reference effective period
   */
  preAuthPeriod?: IPeriod;

}
