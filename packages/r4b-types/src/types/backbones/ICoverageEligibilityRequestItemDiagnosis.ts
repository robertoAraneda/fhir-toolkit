import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * CoverageEligibilityRequestItemDiagnosis Interface
 * 
 * Applicable diagnosis
 * 
 *
 * @see https://hl7.org/fhir/R4B/coverageeligibilityrequestitemdiagnosis.html
 */
export interface ICoverageEligibilityRequestItemDiagnosis extends IBackboneElement {
  /**
   * Nature of illness or problem
   */
  diagnosisCodeableConcept?: ICodeableConcept;

  /**
   * Nature of illness or problem
   */
  diagnosisReference?: IReference;

}
