import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IGraphDefinitionLink } from './IGraphDefinitionLink.js';
import type { IGraphDefinitionLinkTargetCompartment } from './IGraphDefinitionLinkTargetCompartment.js';

/**
 * GraphDefinitionLinkTarget Interface
 * 
 * Potential target for the link
 * 
 *
 * @see https://hl7.org/fhir/R4B/graphdefinitionlinktarget.html
 */
export interface IGraphDefinitionLinkTarget extends IBackboneElement {
  /**
   * Type of resource this link refers to
   */
  type: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Criteria for reverse lookup
   */
  params?: string;
  /**
   * Extension for params
   */
  _params?: IElement;

  /**
   * Profile for the target resource
   */
  profile?: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Compartment Consistency Rules
   */
  compartment?: IGraphDefinitionLinkTargetCompartment[];

  /**
   * Additional links from target resource
   */
  link?: IGraphDefinitionLink[];

}
