import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ImplementationGuideManifestResource Interface
 * 
 * Resource in the implementation guide
 * 
 *
 * @see https://hl7.org/fhir/R4/implementationguidemanifestresource.html
 */
export interface IImplementationGuideManifestResource extends IBackboneElement {
  /**
   * Location of the resource
   */
  reference: IReference<'Resource'>;

  /**
   * Is this an example
   */
  isExample?: boolean;
  /**
   * Extension for isExample
   */
  _isExample?: IElement;

  /**
   * Profile(s) this is an example of
   */
  profile?: string[];
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Relative path for page in IG
   */
  relativePath?: string;
  /**
   * Extension for relativePath
   */
  _relativePath?: IElement;

}
