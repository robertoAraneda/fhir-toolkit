import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * CitationRelatesTo Interface
 * 
 * Artifact related to the Citation Resource
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationrelatesto.html
 */
export interface ICitationRelatesTo extends IBackboneElement {
  /**
   * How the Citation resource relates to the target artifact
   */
  relationshipType: ICodeableConcept;

  /**
   * The clasification of the related artifact
   */
  targetClassifier?: ICodeableConcept[];

  /**
   * The article or artifact that the Citation Resource is related to
   */
  targetUri?: string;
  /**
   * Extension for targetUri
   */
  _targetUri?: IElement;

  /**
   * The article or artifact that the Citation Resource is related to
   */
  targetIdentifier?: IIdentifier;

  /**
   * The article or artifact that the Citation Resource is related to
   */
  targetReference?: IReference;

  /**
   * The article or artifact that the Citation Resource is related to
   */
  targetAttachment?: IAttachment;

}
