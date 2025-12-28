import type { IElement } from '../../base/index.js';
import type { IAttachment } from './IAttachment.js';
import type { RelatedArtifactTypeType } from '../../valuesets/index.js';

/**
 * RelatedArtifact Interface
 * 
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 * 
 *
 * @see https://hl7.org/fhir/R4B/relatedartifact.html
 */
export interface IRelatedArtifact extends IElement {
  /**
   * documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of
   */
  type: RelatedArtifactTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

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
   * Where the artifact can be accessed
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * What document is being referenced
   */
  document?: IAttachment;

  /**
   * What resource is being referenced
   */
  resource?: string;
  /**
   * Extension for resource
   */
  _resource?: IElement;

}
