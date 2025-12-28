import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * MedicationKnowledgeCost Interface
 * 
 * The pricing of the medication
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationknowledgecost.html
 */
export interface IMedicationKnowledgeCost extends IBackboneElement {
  /**
   * The date range for which the cost is effective
   */
  effectiveDate?: IPeriod[];

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
   * The price or category of the cost of the medication
   */
  costMoney?: IMoney;

  /**
   * The price or category of the cost of the medication
   */
  costCodeableConcept?: ICodeableConcept;

}
