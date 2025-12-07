import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';

/**
 * MeasureGroupPopulation Interface
 * 
 * Population criteria
 * 
 *
 * @see https://hl7.org/fhir/R4/measuregrouppopulation.html
 */
export interface IMeasureGroupPopulation extends IBackboneElement {
  /**
   * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
   */
  code?: ICodeableConcept;

  /**
   * The human readable description of this population criteria
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The criteria that defines this population
   */
  criteria: IExpression;

}
