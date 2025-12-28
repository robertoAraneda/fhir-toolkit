import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ImplementationGuideManifestResource Interface
 * 
 * Resource in the implementation guide
 * 
 *
 * @see https://hl7.org/fhir/R4B/implementationguidemanifestresource.html
 */
export interface IImplementationGuideManifestResource extends IBackboneElement {
  /**
   * Location of the resource
   */
  reference: IReference<'Resource'>;

  /**
   * Is an example/What is this an example of?
   */
  exampleBoolean?: boolean;
  /**
   * Extension for exampleBoolean
   */
  _exampleBoolean?: IElement;

  /**
   * Is an example/What is this an example of?
   */
  exampleCanonical?: string;
  /**
   * Extension for exampleCanonical
   */
  _exampleCanonical?: IElement;

  /**
   * Relative path for page in IG
   */
  relativePath?: string;
  /**
   * Extension for relativePath
   */
  _relativePath?: IElement;

}
