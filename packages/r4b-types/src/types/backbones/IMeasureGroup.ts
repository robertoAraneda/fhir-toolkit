import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMeasureGroupPopulation } from './IMeasureGroupPopulation.js';
import type { IMeasureGroupStratifier } from './IMeasureGroupStratifier.js';

/**
 * MeasureGroup Interface
 * 
 * Population criteria group
 * 
 *
 * @see https://hl7.org/fhir/R4/measuregroup.html
 */
export interface IMeasureGroup extends IBackboneElement {
  /**
   * Meaning of the group
   */
  code?: ICodeableConcept;

  /**
   * Summary description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Population criteria
   */
  population?: IMeasureGroupPopulation[];

  /**
   * Stratifier criteria for the measure
   */
  stratifier?: IMeasureGroupStratifier[];

}
