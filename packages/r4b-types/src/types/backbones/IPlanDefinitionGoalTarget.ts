import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * PlanDefinitionGoalTarget Interface
 * 
 * Target outcome for the goal
 * 
 *
 * @see https://hl7.org/fhir/R4B/plandefinitiongoaltarget.html
 */
export interface IPlanDefinitionGoalTarget extends IBackboneElement {
  /**
   * The parameter whose value is to be tracked
   */
  measure?: ICodeableConcept;

  /**
   * The target value to be achieved
   */
  detailQuantity?: IQuantity;

  /**
   * The target value to be achieved
   */
  detailRange?: IRange;

  /**
   * The target value to be achieved
   */
  detailCodeableConcept?: ICodeableConcept;

  /**
   * Reach goal within
   */
  due?: IDuration;

}
