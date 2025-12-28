import type { IElement } from '../../base/index.js';
import type { BindingStrengthType } from '../../valuesets/index.js';

/**
 * ElementDefinitionBinding Interface
 * 
 * ValueSet details if this is coded
 * 
 *
 * @see https://hl7.org/fhir/R4B/elementdefinitionbinding.html
 */
export interface IElementDefinitionBinding extends IElement {
  /**
   * required | extensible | preferred | example
   */
  strength: BindingStrengthType;
  /**
   * Extension for strength
   */
  _strength?: IElement;

  /**
   * Human explanation of the value set
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Source of value set
   */
  valueSet?: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

}
