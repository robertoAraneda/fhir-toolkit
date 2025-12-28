import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * DocumentReferenceRelatesTo Interface
 * 
 * Relationships to other documents
 * 
 *
 * @see https://hl7.org/fhir/R5/documentreferencerelatesto.html
 */
export interface IDocumentReferenceRelatesTo extends IBackboneElement {
  /**
   * The relationship type with another document
   */
  code: ICodeableConcept;

  /**
   * Target of the relationship
   */
  target: IReference<'DocumentReference'>;

}
