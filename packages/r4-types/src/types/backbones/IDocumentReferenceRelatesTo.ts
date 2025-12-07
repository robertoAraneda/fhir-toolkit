import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { DocumentRelationshipTypeType } from '../../valuesets/index.js';

/**
 * DocumentReferenceRelatesTo Interface
 * 
 * Relationships to other documents
 * 
 *
 * @see https://hl7.org/fhir/R4/documentreferencerelatesto.html
 */
export interface IDocumentReferenceRelatesTo extends IBackboneElement {
  /**
   * replaces | transforms | signs | appends
   */
  code: DocumentRelationshipTypeType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Target of the relationship
   */
  target: IReference<'DocumentReference'>;

}
