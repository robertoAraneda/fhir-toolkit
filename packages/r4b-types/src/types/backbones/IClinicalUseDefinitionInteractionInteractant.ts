import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ClinicalUseDefinitionInteractionInteractant Interface
 * 
 * The specific medication, food, substance or laboratory test that interacts
 * 
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinitioninteractioninteractant.html
 */
export interface IClinicalUseDefinitionInteractionInteractant extends IBackboneElement {
  /**
   * The specific medication, food or laboratory test that interacts
   */
  itemReference?: IReference;

  /**
   * The specific medication, food or laboratory test that interacts
   */
  itemCodeableConcept?: ICodeableConcept;

}
