import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * ClaimDiagnosis Interface
 * 
 * Pertinent diagnosis information
 * 
 *
 * @see https://hl7.org/fhir/R4/claimdiagnosis.html
 */
export interface IClaimDiagnosis extends IBackboneElement {
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

  /**
   * Package billing code
   */
  packageCode?: ICodeableConcept;

}
