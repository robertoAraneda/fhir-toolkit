import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * StructureDefinitionMapping Interface
 * 
 * External specification that the content is mapped to
 * 
 *
 * @see https://hl7.org/fhir/R4B/structuredefinitionmapping.html
 */
export interface IStructureDefinitionMapping extends IBackboneElement {
  /**
   * Internal id when this mapping is used
   */
  identity: string;
  /**
   * Extension for identity
   */
  _identity?: IElement;

  /**
   * Identifies what this mapping refers to
   */
  uri?: string;
  /**
   * Extension for uri
   */
  _uri?: IElement;

  /**
   * Names what this mapping refers to
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Versions, Issues, Scope limitations etc.
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

}
