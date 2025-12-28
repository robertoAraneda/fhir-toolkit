import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ExplanationOfBenefitDiagnosis Interface
 * 
 * Pertinent diagnosis information
 * 
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitdiagnosis.html
 */
export interface IExplanationOfBenefitDiagnosis extends IBackboneElement {
  /**
   * Diagnosis instance identifier
   */
  sequence: number;
  /**
   * Extension for sequence
   */
  _sequence?: IElement;

  /**
   * Nature of illness or problem
   */
  diagnosisCodeableConcept?: ICodeableConcept;

  /**
   * Nature of illness or problem
   */
  diagnosisReference?: IReference;

  /**
   * Timing or nature of the diagnosis
   */
  type?: ICodeableConcept[];

  /**
   * Present on admission
   */
  onAdmission?: ICodeableConcept;

}
