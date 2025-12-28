import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ImplementationGuideDependsOn Interface
 * 
 * Another Implementation guide this depends on
 * 
 *
 * @see https://hl7.org/fhir/R5/implementationguidedependson.html
 */
export interface IImplementationGuideDependsOn extends IBackboneElement {
  /**
   * Identity of the IG that this depends on
   */
  uri: string;
  /**
   * Extension for uri
   */
  _uri?: IElement;

  /**
   * NPM Package name for IG this depends on
   */
  packageId?: string;
  /**
   * Extension for packageId
   */
  _packageId?: IElement;

  /**
   * Version of the IG
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Why dependency exists
   */
  reason?: string;
  /**
   * Extension for reason
   */
  _reason?: IElement;

}
