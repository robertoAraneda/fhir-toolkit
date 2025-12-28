import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * CitationCitedArtifactRelatesTo Interface
 * 
 * The artifact related to the cited artifact
 * 
 *
 * @see https://hl7.org/fhir/R4B/citationcitedartifactrelatesto.html
 */
export interface ICitationCitedArtifactRelatesTo extends IBackboneElement {
  /**
   * How the cited artifact relates to the target artifact
   */
  relationshipType: ICodeableConcept;

  /**
   * The clasification of the related artifact
   */
  targetClassifier?: ICodeableConcept[];

  /**
   * The article or artifact that the cited artifact is related to
   */
  targetUri?: string;
  /**
   * Extension for targetUri
   */
  _targetUri?: IElement;

  /**
   * The article or artifact that the cited artifact is related to
   */
  targetIdentifier?: IIdentifier;

  /**
   * The article or artifact that the cited artifact is related to
   */
  targetReference?: IReference;

  /**
   * The article or artifact that the cited artifact is related to
   */
  targetAttachment?: IAttachment;

}
