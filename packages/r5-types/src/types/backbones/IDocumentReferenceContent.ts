import type { IBackboneElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IDocumentReferenceContentProfile } from './IDocumentReferenceContentProfile.js';

/**
 * DocumentReferenceContent Interface
 * 
 * Document referenced
 * 
 *
 * @see https://hl7.org/fhir/R5/documentreferencecontent.html
 */
export interface IDocumentReferenceContent extends IBackboneElement {
  /**
   * Where to access the document
   */
  attachment: IAttachment;

  /**
   * Content profile rules for the document
   */
  profile?: IDocumentReferenceContentProfile[];

}
