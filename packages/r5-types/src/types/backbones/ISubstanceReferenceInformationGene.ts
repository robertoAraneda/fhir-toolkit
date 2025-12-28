import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * SubstanceReferenceInformationGene Interface
 * 
 * Todo
 * 
 *
 * @see https://hl7.org/fhir/R5/substancereferenceinformationgene.html
 */
export interface ISubstanceReferenceInformationGene extends IBackboneElement {
  /**
   * Todo
   */
  geneSequenceOrigin?: ICodeableConcept;

  /**
   * Todo
   */
  gene?: ICodeableConcept;

  /**
   * Todo
   */
  source?: IReference<'DocumentReference'>[];

}
