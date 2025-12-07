import type { IBackboneElement, IElement } from '../../base/index.js';
import type { BindingStrengthType } from '../../valuesets/index.js';

/**
 * OperationDefinitionParameterBinding Interface
 * 
 * ValueSet details if this is coded
 * 
 *
 * @see https://hl7.org/fhir/R4/operationdefinitionparameterbinding.html
 */
export interface IOperationDefinitionParameterBinding extends IBackboneElement {
  /**
   * required | extensible | preferred | example
   */
  strength: BindingStrengthType;
  /**
   * Extension for strength
   */
  _strength?: IElement;

  /**
   * Source of value set
   */
  valueSet: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

}
