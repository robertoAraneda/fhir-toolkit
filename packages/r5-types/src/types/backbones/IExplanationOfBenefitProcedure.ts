import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ExplanationOfBenefitProcedure Interface
 * 
 * Clinical procedures performed
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitprocedure.html
 */
export interface IExplanationOfBenefitProcedure extends IBackboneElement {
  /**
   * Procedure instance identifier
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Category of Procedure
   */
  type?: ICodeableConcept[];

  /**
   * When the procedure was performed
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Specific clinical procedure
   */
  procedureCodeableConcept?: ICodeableConcept;

  /**
   * Specific clinical procedure
   */
  procedureReference?: IReference;

  /**
   * Unique device identifier
   */
  udi?: IReference<'Device'>[];

}
