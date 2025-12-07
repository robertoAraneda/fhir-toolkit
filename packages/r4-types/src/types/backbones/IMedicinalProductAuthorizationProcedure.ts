import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * MedicinalProductAuthorizationProcedure Interface
 * 
 * The regulatory procedure for granting or amending a marketing authorization
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductauthorizationprocedure.html
 */
export interface IMedicinalProductAuthorizationProcedure extends IBackboneElement {
  /**
   * Identifier for this procedure
   */
  identifier?: IIdentifier;

  /**
   * Type of procedure
   */
  type: ICodeableConcept;

  /**
   * Date of procedure
   */
  datePeriod?: IPeriod;

  /**
   * Date of procedure
   */
  dateDateTime?: string;
  /**
   * Extension for dateDateTime
   */
  _dateDateTime?: IElement;

  /**
   * Applcations submitted to obtain a marketing authorization
   */
  application?: IMedicinalProductAuthorizationProcedure[];

}
