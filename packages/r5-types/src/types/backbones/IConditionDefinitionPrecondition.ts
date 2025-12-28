import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ConditionPreconditionTypeType } from '../../valuesets/index.js';

/**
 * ConditionDefinitionPrecondition Interface
 * 
 * Observation that suggets this condition
 * 
 *
 * @see https://hl7.org/fhir/R5/conditiondefinitionprecondition.html
 */
export interface IConditionDefinitionPrecondition extends IBackboneElement {
  /**
   * sensitive | specific
   */
  type: ConditionPreconditionTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Code for relevant Observation
   */
  code: ICodeableConcept;

  /**
   * Value of Observation
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value of Observation
   */
  valueQuantity?: IQuantity;

}
