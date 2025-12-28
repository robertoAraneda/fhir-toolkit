import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * CoverageCostToBeneficiaryException Interface
 * 
 * Exceptions for patient payments
 * 
 *
 * @see https://hl7.org/fhir/R4B/coveragecosttobeneficiaryexception.html
 */
export interface ICoverageCostToBeneficiaryException extends IBackboneElement {
  /**
   * Exception category
   */
  type: ICodeableConcept;

  /**
   * The effective period of the exception
   */
  period?: IPeriod;

}
