import type { IDataType, IElement } from '../../base/index.js';

/**
 * Attachment Interface
 * 
 * For referring to data content defined in other formats.
 * 
 *
 * @see https://hl7.org/fhir/R5/attachment.html
 */
export interface IAttachment extends IDataType {
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
  size?: string;
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

  /**
   * Height of the image in pixels (photo/video)
   */
  height?: number;
  /**
   * Extension for height
   */
  _height?: IElement;

  /**
   * Width of the image in pixels (photo/video)
   */
  width?: number;
  /**
   * Extension for width
   */
  _width?: IElement;

  /**
   * Number of frames if > 1 (photo)
   */
  frames?: number;
  /**
   * Extension for frames
   */
  _frames?: IElement;

  /**
   * Length in seconds (audio / video)
   */
  duration?: number;
  /**
   * Extension for duration
   */
  _duration?: IElement;

  /**
   * Number of printed pages
   */
  pages?: number;
  /**
   * Extension for pages
   */
  _pages?: IElement;

}
