import type { IBackboneElement, ICoding } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * DocumentReferenceContent Interface
 * 
 * Document referenced
 * 
 *
 * @see https://hl7.org/fhir/R4/documentreferencecontent.html
 */
export interface IDocumentReferenceContent extends IBackboneElement {
  /**
   * Where to access the document
   */
  attachment: IAttachment;

  /**
   * Format/content rules for the document
   */
  format?: ICoding;

}
