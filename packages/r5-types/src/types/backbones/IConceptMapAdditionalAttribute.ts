import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ConceptMapAttributeTypeType } from '../../valuesets/index.js';

/**
 * ConceptMapAdditionalAttribute Interface
 * 
 * Definition of an additional attribute to act as a data source or target
 * 
 *
 * @see https://hl7.org/fhir/R4/conceptmapadditionalattribute.html
 */
export interface IConceptMapAdditionalAttribute extends IBackboneElement {
  /**
   * Identifies this additional attribute through this resource
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Formal identifier for the data element referred to in this attribte
   */
  uri?: string;
  /**
   * Extension for uri
   */
  _uri?: IElement;

  /**
   * Why the additional attribute is defined, and/or what the data element it refers to is
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * code | Coding | string | boolean | Quantity
   */
  type: ConceptMapAttributeTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

}
