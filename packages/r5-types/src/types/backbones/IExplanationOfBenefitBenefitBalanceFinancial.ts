import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * ExplanationOfBenefitBenefitBalanceFinancial Interface
 * 
 * Benefit Summary
 * 
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitbenefitbalancefinancial.html
 */
export interface IExplanationOfBenefitBenefitBalanceFinancial extends IBackboneElement {
  /**
   * Benefit classification
   */
  type: ICodeableConcept;

  /**
   * Benefits allowed
   */
  allowedUnsignedInt?: number;
  /**
   * Extension for allowedUnsignedInt
   */
  _allowedUnsignedInt?: IElement;

  /**
   * Benefits allowed
   */
  allowedString?: string;
  /**
   * Extension for allowedString
   */
  _allowedString?: IElement;

  /**
   * Benefits allowed
   */
  allowedMoney?: IMoney;

  /**
   * Benefits used
   */
  usedUnsignedInt?: number;
  /**
   * Extension for usedUnsignedInt
   */
  _usedUnsignedInt?: IElement;

  /**
   * Benefits used
   */
  usedMoney?: IMoney;

}
