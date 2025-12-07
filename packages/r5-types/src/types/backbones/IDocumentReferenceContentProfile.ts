import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * DocumentReferenceContentProfile Interface
 * 
 * Content profile rules for the document
 * 
 *
 * @see https://hl7.org/fhir/R4/documentreferencecontentprofile.html
 */
export interface IDocumentReferenceContentProfile extends IBackboneElement {
  /**
   * Code|uri|canonical
   */
  valueCoding?: ICoding;

  /**
   * Code|uri|canonical
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Code|uri|canonical
   */
  valueCanonical?: string;
  /**
   * Extension for valueCanonical
   */
  _valueCanonical?: IElement;

}
