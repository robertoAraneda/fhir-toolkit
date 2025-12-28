import type { IElement } from '../../base/index.js';

/**
 * Attachment Interface
 * 
 * For referring to data content defined in other formats.
 * 
 *
 * @see https://hl7.org/fhir/R4B/attachment.html
 */
export interface IAttachment extends IElement {
  /**
   * Mime type of the content, with charset etc.
   */
  contentType?: string;
  /**
   * Extension for contentType
   */
  _contentType?: IElement;

  /**
   * Human language of the content (BCP-47)
   */
  language?: string;
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * Data inline, base64ed
   */
  data?: string;
  /**
   * Extension for data
   */
  _data?: IElement;

  /**
   * Uri where the data can be found
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Number of bytes of content (if url provided)
   */
  size?: number;
  /**
   * Extension for size
   */
  _size?: IElement;

  /**
   * Hash of the data (sha-1, base64ed)
   */
  hash?: string;
  /**
   * Extension for hash
   */
  _hash?: IElement;

  /**
   * Label to display in place of the data
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Date attachment was first created
   */
  creation?: string;
  /**
   * Extension for creation
   */
  _creation?: IElement;

}
