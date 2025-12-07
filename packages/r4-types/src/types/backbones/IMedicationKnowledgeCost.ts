import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';

/**
 * MedicationKnowledgeCost Interface
 * 
 * The pricing of the medication
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgecost.html
 */
export interface IMedicationKnowledgeCost extends IBackboneElement {
  /**
   * The category of the cost information
   */
  type: ICodeableConcept;

  /**
   * The source or owner for the price information
   */
  source?: string;
  /**
   * Extension for source
   */
  _source?: IElement;

  /**
   * The price of the medication
   */
  cost: IMoney;

}
