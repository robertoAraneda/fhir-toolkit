import type { IBackboneElement, ICodeableConcept, ICoding } from '../../base/index.js';

/**
 * AuditEventOutcome Interface
 * 
 * Whether the event succeeded or failed
 * 
 *
 * @see https://hl7.org/fhir/R5/auditeventoutcome.html
 */
export interface IAuditEventOutcome extends IBackboneElement {
  /**
   * Whether the event succeeded or failed
   */
  code: ICoding;

  /**
   * Additional outcome detail
   */
  detail?: ICodeableConcept[];

}
