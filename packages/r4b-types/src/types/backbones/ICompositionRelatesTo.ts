import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { DocumentRelationshipTypeType } from '../../valuesets/index.js';

/**
 * CompositionRelatesTo Interface
 * 
 * Relationships to other compositions/documents
 * 
 *
 * @see https://hl7.org/fhir/R4B/compositionrelatesto.html
 */
export interface ICompositionRelatesTo extends IBackboneElement {
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
  targetIdentifier?: IIdentifier;

  /**
   * Target of the relationship
   */
  targetReference?: IReference;

}
