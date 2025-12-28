import type { IBackboneElement, IElement } from '../../base/index.js';
import type { PropertyTypeType } from '../../valuesets/index.js';

/**
 * CodeSystemProperty Interface
 * 
 * Additional information supplied about each concept
 * 
 *
 * @see https://hl7.org/fhir/R4B/codesystemproperty.html
 */
export interface ICodeSystemProperty extends IBackboneElement {
  /**
   * Identifies the property on the concepts, and when referred to in operations
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Formal identifier for the property
   */
  uri?: string;
  /**
   * Extension for uri
   */
  _uri?: IElement;

  /**
   * Why the property is defined, and/or what it conveys
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * code | Coding | string | integer | boolean | dateTime | decimal
   */
  type: PropertyTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

}
