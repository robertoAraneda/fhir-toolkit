import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ConceptMapPropertyTypeType } from '../../valuesets/index.js';

/**
 * ConceptMapProperty Interface
 * 
 * Additional properties of the mapping
 * 
 *
 * @see https://hl7.org/fhir/R4/conceptmapproperty.html
 */
export interface IConceptMapProperty extends IBackboneElement {
  /**
   * Identifies the property on the mappings, and when referred to in the $translate operation
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
   * Coding | string | integer | boolean | dateTime | decimal | code
   */
  type: ConceptMapPropertyTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The CodeSystem from which code values come
   */
  system?: string;
  /**
   * Extension for system
   */
  _system?: IElement;

}
