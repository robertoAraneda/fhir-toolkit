import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ImplementationGuideManifestPage Interface
 * 
 * HTML page within the parent IG
 * 
 *
 * @see https://hl7.org/fhir/R4/implementationguidemanifestpage.html
 */
export interface IImplementationGuideManifestPage extends IBackboneElement {
  /**
   * HTML page name
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Title of the page, for references
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Anchor available on the page
   */
  anchor?: string[];
  /**
   * Extension for anchor
   */
  _anchor?: IElement;

}
