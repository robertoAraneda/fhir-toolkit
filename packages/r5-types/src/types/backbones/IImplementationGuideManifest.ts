import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IImplementationGuideManifestPage } from './IImplementationGuideManifestPage.js';
import type { IImplementationGuideManifestResource } from './IImplementationGuideManifestResource.js';

/**
 * ImplementationGuideManifest Interface
 * 
 * Information about an assembled IG
 * 
 *
 * @see https://hl7.org/fhir/R5/implementationguidemanifest.html
 */
export interface IImplementationGuideManifest extends IBackboneElement {
  /**
   * Location of rendered implementation guide
   */
  rendering?: string;
  /**
   * Extension for rendering
   */
  _rendering?: IElement;

  /**
   * Resource in the implementation guide
   */
  resource: IImplementationGuideManifestResource[];

  /**
   * HTML page within the parent IG
   */
  page?: IImplementationGuideManifestPage[];

  /**
   * Image within the IG
   */
  image?: string[];
  /**
   * Extension for image
   */
  _image?: IElement;

  /**
   * Additional linkable file in IG
   */
  other?: string[];
  /**
   * Extension for other
   */
  _other?: IElement;

}
