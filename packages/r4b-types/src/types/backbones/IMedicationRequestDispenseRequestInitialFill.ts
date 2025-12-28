import type { IBackboneElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicationRequestDispenseRequestInitialFill Interface
 * 
 * First fill details
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationrequestdispenserequestinitialfill.html
 */
export interface IMedicationRequestDispenseRequestInitialFill extends IBackboneElement {
  /**
   * First fill quantity
   */
  quantity?: IQuantity;

  /**
   * First fill duration
   */
  duration?: IDuration;

}
