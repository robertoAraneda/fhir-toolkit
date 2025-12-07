import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * ImmunizationProgramEligibility Interface
 * 
 * Patient eligibility for a specific vaccination program
 * 
 *
 * @see https://hl7.org/fhir/R4/immunizationprogrameligibility.html
 */
export interface IImmunizationProgramEligibility extends IBackboneElement {
  /**
   * The program that eligibility is declared for
   */
  program: ICodeableConcept;

  /**
   * The patient's eligibility status for the program
   */
  programStatus: ICodeableConcept;

}
