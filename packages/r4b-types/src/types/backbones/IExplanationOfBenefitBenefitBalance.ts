import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IExplanationOfBenefitBenefitBalanceFinancial } from './IExplanationOfBenefitBenefitBalanceFinancial.js';

/**
 * ExplanationOfBenefitBenefitBalance Interface
 * 
 * Balance by Benefit Category
 * 
 *
 * @see https://hl7.org/fhir/R4B/explanationofbenefitbenefitbalance.html
 */
export interface IExplanationOfBenefitBenefitBalance extends IBackboneElement {
  /**
   * Benefit classification
   */
  category: ICodeableConcept;

  /**
   * Excluded from the plan
   */
  excluded?: boolean;
  /**
   * Extension for excluded
   */
  _excluded?: IElement;

  /**
   * Short name for the benefit
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Description of the benefit or services covered
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * In or out of network
   */
  network?: ICodeableConcept;

  /**
   * Individual or family
   */
  unit?: ICodeableConcept;

  /**
   * Annual or lifetime
   */
  term?: ICodeableConcept;

  /**
   * Benefit Summary
   */
  financial?: IExplanationOfBenefitBenefitBalanceFinancial[];

}
