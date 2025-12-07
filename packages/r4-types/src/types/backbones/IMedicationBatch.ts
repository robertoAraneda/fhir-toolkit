import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * MedicationBatch Interface
 * 
 * Details about packaged medications
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationbatch.html
 */
export interface IMedicationBatch extends IBackboneElement {
  /**
   * Identifier assigned to batch
   */
  lotNumber?: string;
  /**
   * Extension for lotNumber
   */
  _lotNumber?: IElement;

  /**
   * When batch will expire
   */
  expirationDate?: string;
  /**
   * Extension for expirationDate
   */
  _expirationDate?: IElement;

}
