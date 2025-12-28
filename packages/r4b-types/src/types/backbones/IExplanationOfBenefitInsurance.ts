import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ExplanationOfBenefitInsurance Interface
 * 
 * Patient insurance information
 * 
 *
 * @see https://hl7.org/fhir/R4B/explanationofbenefitinsurance.html
 */
export interface IExplanationOfBenefitInsurance extends IBackboneElement {
  /**
   * Coverage to be used for adjudication
   */
  focal: boolean;
  /**
   * Extension for focal
   */
  _focal?: IElement;

  /**
   * Insurance information
   */
  coverage: IReference<'Coverage'>;

  /**
   * Prior authorization reference number
   */
  preAuthRef?: string[];
  /**
   * Extension for preAuthRef
   */
  _preAuthRef?: IElement;

}
