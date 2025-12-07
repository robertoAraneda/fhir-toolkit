import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { ActionConditionKindType } from '../../valuesets/index.js';

/**
 * RequestGroupActionCondition Interface
 * 
 * Whether or not the action is applicable
 * 
 *
 * @see https://hl7.org/fhir/R4/requestgroupactioncondition.html
 */
export interface IRequestGroupActionCondition extends IBackboneElement {
  /**
   * applicability | start | stop
   */
  kind: ActionConditionKindType;
  /**
   * Extension for kind
   */
  _kind?: IElement;

  /**
   * Boolean-valued expression
   */
  expression?: IExpression;

}
