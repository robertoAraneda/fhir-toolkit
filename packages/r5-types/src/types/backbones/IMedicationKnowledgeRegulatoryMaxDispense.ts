import type { IBackboneElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicationKnowledgeRegulatoryMaxDispense Interface
 * 
 * The maximum number of units of the medication that can be dispensed in a period
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeregulatorymaxdispense.html
 */
export interface IMedicationKnowledgeRegulatoryMaxDispense extends IBackboneElement {
  /**
   * The maximum number of units of the medication that can be dispensed
   */
  quantity: IQuantity;

  /**
   * The period that applies to the maximum number of units
   */
  period?: IDuration;

}
