import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IGraphDefinitionLinkCompartment } from './IGraphDefinitionLinkCompartment.js';

/**
 * GraphDefinitionLink Interface
 * 
 * Links this graph makes rules about
 * 
 *
 * @see https://hl7.org/fhir/R5/graphdefinitionlink.html
 */
export interface IGraphDefinitionLink extends IBackboneElement {
  /**
   * Why this link is specified
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

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
   * Source Node for this link
   */
  sourceId: string;
  /**
   * Extension for sourceId
   */
  _sourceId?: IElement;

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
   * Target Node for this link
   */
  targetId: string;
  /**
   * Extension for targetId
   */
  _targetId?: IElement;

  /**
   * Criteria for reverse lookup
   */
  params?: string;
  /**
   * Extension for params
   */
  _params?: IElement;

  /**
   * Compartment Consistency Rules
   */
  compartment?: IGraphDefinitionLinkCompartment[];

}
