import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IGraphDefinitionLinkTarget } from './IGraphDefinitionLinkTarget.js';

/**
 * GraphDefinitionLink Interface
 * 
 * Links this graph makes rules about
 * 
 *
 * @see https://hl7.org/fhir/R4/graphdefinitionlink.html
 */
export interface IGraphDefinitionLink extends IBackboneElement {
  /**
   * Path in the resource that contains the link
   */
  path?: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * Which slice (if profiled)
   */
  sliceName?: string;
  /**
   * Extension for sliceName
   */
  _sliceName?: IElement;

  /**
   * Minimum occurrences for this link
   */
  min?: number;
  /**
   * Extension for min
   */
  _min?: IElement;

  /**
   * Maximum occurrences for this link
   */
  max?: string;
  /**
   * Extension for max
   */
  _max?: IElement;

  /**
   * Why this link is specified
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Potential target for the link
   */
  target?: IGraphDefinitionLinkTarget[];

}
