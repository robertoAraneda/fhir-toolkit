import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * InsurancePlanPlanGeneralCost Interface
 * 
 * Overall costs
 * 
 *
 * @see https://hl7.org/fhir/R4B/insuranceplanplangeneralcost.html
 */
export interface IInsurancePlanPlanGeneralCost extends IBackboneElement {
  /**
   * Type of cost
   */
  type?: ICodeableConcept;

  /**
   * Number of enrollees
   */
  groupSize?: number;
  /**
   * Extension for groupSize
   */
  _groupSize?: IElement;

  /**
   * Cost value
   */
  cost?: IMoney;

  /**
   * Additional cost information
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

}
