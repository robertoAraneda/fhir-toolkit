import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * AdverseEventContributingFactor Interface
 * 
 * Contributing factors suspected to have increased the probability or severity of the adverse event
 * 
 *
 * @see https://hl7.org/fhir/R4/adverseeventcontributingfactor.html
 */
export interface IAdverseEventContributingFactor extends IBackboneElement {
  /**
   * Item suspected to have increased the probability or severity of the adverse event
   */
  itemReference?: IReference;

  /**
   * Item suspected to have increased the probability or severity of the adverse event
   */
  itemCodeableConcept?: ICodeableConcept;

}
