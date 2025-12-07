import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ImplementationGuideGlobal Interface
 * 
 * Profiles that apply globally
 * 
 *
 * @see https://hl7.org/fhir/R4/implementationguideglobal.html
 */
export interface IImplementationGuideGlobal extends IBackboneElement {
  /**
   * Type this profile applies to
   */
  type: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Profile that all resources must conform to
   */
  profile: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

}
