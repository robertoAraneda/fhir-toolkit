import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';

/**
 * MeasureGroupPopulation Interface
 * 
 * Population criteria
 * 
 *
 * @see https://hl7.org/fhir/R5/measuregrouppopulation.html
 */
export interface IMeasureGroupPopulation extends IBackboneElement {
  /**
   * Unique id for population in measure
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

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
  criteria?: IExpression;

  /**
   * A group resource that defines this population
   */
  groupDefinition?: IReference<'Group'>;

  /**
   * Which population
   */
  inputPopulationId?: string;
  /**
   * Extension for inputPopulationId
   */
  _inputPopulationId?: IElement;

  /**
   * Aggregation method for a measure score (e.g. sum, average, median, minimum, maximum, count)
   */
  aggregateMethod?: ICodeableConcept;

}
