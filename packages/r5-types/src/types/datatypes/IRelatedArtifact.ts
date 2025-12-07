import type { ICodeableConcept, IDataType, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from './IAttachment.js';
import type { PublicationStatusType, RelatedArtifactTypeType } from '../../valuesets/index.js';

/**
 * RelatedArtifact Interface
 * 
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 * 
 *
 * @see https://hl7.org/fhir/R4/relatedartifact.html
 */
export interface IRelatedArtifact extends IDataType {
  /**
   * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of | part-of | amends | amended-with | appends | appended-with | cites | cited-by | comments-on | comment-in | contains | contained-in | corrects | correction-in | replaces | replaced-with | retracts | retracted-by | signs | similar-to | supports | supported-with | transforms | transformed-into | transformed-with | documents | specification-of | created-with | cite-as
   */
  type: RelatedArtifactTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Additional classifiers
   */
  classifier?: ICodeableConcept[];

  /**
   * Short label
   */
  label?: string;
  /**
   * Extension for label
   */
  _label?: IElement;

  /**
   * Brief description of the related artifact
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

  /**
   * Bibliographic citation for the artifact
   */
  citation?: string;
  /**
   * Extension for citation
   */
  _citation?: IElement;

  /**
   * What document is being referenced
   */
  document?: IAttachment;

  /**
   * What artifact is being referenced
   */
  resource?: string;
  /**
   * Extension for resource
   */
  _resource?: IElement;

  /**
   * What artifact, if not a conformance resource
   */
  resourceReference?: IReference<'Resource'>;

  /**
   * draft | active | retired | unknown
   */
  publicationStatus?: PublicationStatusType;
  /**
   * Extension for publicationStatus
   */
  _publicationStatus?: IElement;

  /**
   * Date of publication of the artifact being referred to
   */
  publicationDate?: string;
  /**
   * Extension for publicationDate
   */
  _publicationDate?: IElement;

}
