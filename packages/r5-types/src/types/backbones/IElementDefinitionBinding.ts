import type { IElement } from '../../base/index.js';
import type { IElementDefinitionBindingAdditional } from './IElementDefinitionBindingAdditional.js';
import type { BindingStrengthType } from '../../valuesets/index.js';

/**
 * ElementDefinitionBinding Interface
 * 
 * ValueSet details if this is coded
 * 
 *
 * @see https://hl7.org/fhir/R5/elementdefinitionbinding.html
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
   * Intended use of codes in the bound value set
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

  /**
   * Additional Bindings - more rules about the binding
   */
  additional?: IElementDefinitionBindingAdditional[];

}
