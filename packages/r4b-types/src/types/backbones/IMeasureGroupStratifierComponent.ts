import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';

/**
 * MeasureGroupStratifierComponent Interface
 * 
 * Stratifier criteria component for the measure
 * 
 *
 * @see https://hl7.org/fhir/R4B/measuregroupstratifiercomponent.html
 */
export interface IMeasureGroupStratifierComponent extends IBackboneElement {
  /**
   * Meaning of the stratifier component
   */
  code?: ICodeableConcept;

  /**
   * The human readable description of this stratifier component
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Component of how the measure should be stratified
   */
  criteria: IExpression;

}
