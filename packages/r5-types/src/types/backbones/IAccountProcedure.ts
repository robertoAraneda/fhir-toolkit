import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * AccountProcedure Interface
 * 
 * The list of procedures relevant to this account
 * 
 *
 * @see https://hl7.org/fhir/R5/accountprocedure.html
 */
export interface IAccountProcedure extends IBackboneElement {
  /**
   * Ranking of the procedure (for each type)
   */
  sequence?: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * The procedure relevant to the account
   */
  code: ICodeableReference;

  /**
   * Date of the procedure (when coded procedure)
   */
  dateOfService?: string;
  /**
   * Extension for dateOfService
   */
  _dateOfService?: IElement;

  /**
   * How this procedure value should be used in charging the account
   */
  type?: ICodeableConcept[];

  /**
   * Package Code specific for billing
   */
  packageCode?: ICodeableConcept[];

  /**
   * Any devices that were associated with the procedure
   */
  device?: IReference<'Device'>[];

}
