import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * PlanDefinitionGoalTarget Interface
 * 
 * Target outcome for the goal
 * 
 *
 * @see https://hl7.org/fhir/R4/plandefinitiongoaltarget.html
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
   * The target value to be achieved
   */
  detailString?: string;
  /**
   * Extension for detailString
   */
  _detailString?: IElement;

  /**
   * The target value to be achieved
   */
  detailBoolean?: boolean;
  /**
   * Extension for detailBoolean
   */
  _detailBoolean?: IElement;

  /**
   * The target value to be achieved
   */
  detailInteger?: number;
  /**
   * Extension for detailInteger
   */
  _detailInteger?: IElement;

  /**
   * The target value to be achieved
   */
  detailRatio?: IRatio;

  /**
   * Reach goal within
   */
  due?: IDuration;

}
