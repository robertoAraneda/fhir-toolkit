import type { IBackboneElement, IElement } from '../../base/index.js';
import type { VersionIndependentResourceTypesAllType } from '../../valuesets/index.js';

/**
 * GraphDefinitionNode Interface
 * 
 * Potential target for the link
 * 
 *
 * @see https://hl7.org/fhir/R4/graphdefinitionnode.html
 */
export interface IGraphDefinitionNode extends IBackboneElement {
  /**
   * Internal ID - target for link references
   */
  nodeId: string;
  /**
   * Extension for nodeId
   */
  _nodeId?: IElement;

  /**
   * Why this node is specified
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Type of resource this link refers to
   */
  type: VersionIndependentResourceTypesAllType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Profile for the target resource
   */
  profile?: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

}
