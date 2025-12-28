import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * MessageDefinitionFocus Interface
 * 
 * Resource(s) that are the subject of the event
 * 
 *
 * @see https://hl7.org/fhir/R4B/messagedefinitionfocus.html
 */
export interface IMessageDefinitionFocus extends IBackboneElement {
  /**
   * Type of resource
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Profile that must be adhered to by focus
   */
  profile?: string;
  /**
   * Extension for profile
   */
  _profile?: IElement;

  /**
   * Minimum number of focuses of this type
   */
  min: number;
  /**
   * Extension for min
   */
  _min?: IElement;

  /**
   * Maximum number of focuses of this type
   */
  max?: string;
  /**
   * Extension for max
   */
  _max?: IElement;

}
