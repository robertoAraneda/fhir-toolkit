import type { IElement } from '../../base/index.js';

/**
 * ElementDefinitionMapping Interface
 * 
 * Map element to another set of definitions
 * 
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionmapping.html
 */
export interface IElementDefinitionMapping extends IElement {
  /**
   * Reference to mapping declaration
   */
  identity: string;
  /**
   * Extension for identity
   */
  _identity?: IElement;

  /**
   * Computable language of mapping
   */
  language?: string;
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * Details of the mapping
   */
  map: string;
  /**
   * Extension for map
   */
  _map?: IElement;

  /**
   * Comments about the mapping or its use
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

}
