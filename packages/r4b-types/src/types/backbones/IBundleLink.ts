import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * BundleLink Interface
 * 
 * Links related to this Bundle
 * 
 *
 * @see https://hl7.org/fhir/R4B/bundlelink.html
 */
export interface IBundleLink extends IBackboneElement {
  /**
   * See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1
   */
  relation: string;
  /**
   * Extension for relation
   */
  _relation?: IElement;

  /**
   * Reference details for the link
   */
  url: string;
  /**
   * Extension for url
   */
  _url?: IElement;

}
