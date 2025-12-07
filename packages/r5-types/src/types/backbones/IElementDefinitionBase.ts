import type { IElement } from '../../base/index.js';

/**
 * ElementDefinitionBase Interface
 * 
 * Base definition information for tools
 * 
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionbase.html
 */
export interface IElementDefinitionBase extends IElement {
  /**
   * Path that identifies the base element
   */
  path: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * Min cardinality of the base element
   */
  min: number;
  /**
   * Extension for min
   */
  _min?: IElement;

  /**
   * Max cardinality of the base element
   */
  max: string;
  /**
   * Extension for max
   */
  _max?: IElement;

}
