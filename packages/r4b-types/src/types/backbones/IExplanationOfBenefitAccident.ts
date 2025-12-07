import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';

/**
 * ExplanationOfBenefitAccident Interface
 * 
 * Details of the event
 * 
 *
 * @see https://hl7.org/fhir/R4/explanationofbenefitaccident.html
 */
export interface IExplanationOfBenefitAccident extends IBackboneElement {
  /**
   * When the incident occurred
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * The nature of the accident
   */
  type?: ICodeableConcept;

  /**
   * Where the event occurred
   */
  locationAddress?: IAddress;

  /**
   * Where the event occurred
   */
  locationReference?: IReference;

}
