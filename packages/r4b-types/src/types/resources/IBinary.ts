import type { IElement, IReference, IResource } from '../../base/index.js';

/**
 * Binary Interface
 * 
 * A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.
 * 
 *
 * @see https://hl7.org/fhir/R4B/binary.html
 */
export interface IBinary extends IResource {
  /**
   * The type of resource
   */
  resourceType: 'Binary';

  /**
   * MimeType of the binary content
   */
  contentType: string;
  /**
   * Extension for contentType
   */
  _contentType?: IElement;

  /**
   * Identifies another resource to use as proxy when enforcing access control
   */
  securityContext?: IReference<'Resource'>;

  /**
   * The actual content
   */
  data?: string;
  /**
   * Extension for data
   */
  _data?: IElement;

}
