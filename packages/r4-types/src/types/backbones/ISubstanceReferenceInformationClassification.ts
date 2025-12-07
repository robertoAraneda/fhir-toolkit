import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * SubstanceReferenceInformationClassification Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R4/substancereferenceinformationclassification.html
 */
export interface ISubstanceReferenceInformationClassification extends IBackboneElement {
  /**
   * Todo
   */
  domain?: ICodeableConcept;

  /**
   * Todo
   */
  classification?: ICodeableConcept;

  /**
   * Todo
   */
  subtype?: ICodeableConcept[];

  /**
   * Todo
   */
  source?: IReference<'DocumentReference'>[];

}
