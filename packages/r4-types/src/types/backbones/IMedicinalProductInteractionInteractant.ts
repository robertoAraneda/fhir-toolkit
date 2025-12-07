import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * MedicinalProductInteractionInteractant Interface
 * 
 * The specific medication, food or laboratory test that interacts
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductinteractioninteractant.html
 */
export interface IMedicinalProductInteractionInteractant extends IBackboneElement {
  /**
   * The specific medication, food or laboratory test that interacts
   */
  itemReference?: IReference;

  /**
   * The specific medication, food or laboratory test that interacts
   */
  itemCodeableConcept?: ICodeableConcept;

}
