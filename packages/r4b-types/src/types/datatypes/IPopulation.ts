import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IRange } from './IRange.js';

/**
 * Population Interface
 * 
 * A populatioof people with some set of grouping criteria.
 * 
 *
 * @see https://hl7.org/fhir/R4/population.html
 */
export interface IPopulation extends IBackboneElement {
  /**
   * The age of the specific population
   */
  ageRange?: IRange;

  /**
   * The age of the specific population
   */
  ageCodeableConcept?: ICodeableConcept;

  /**
   * The gender of the specific population
   */
  gender?: ICodeableConcept;

  /**
   * Race of the specific population
   */
  race?: ICodeableConcept;

  /**
   * The existing physiological conditions of the specific population to which this applies
   */
  physiologicalCondition?: ICodeableConcept;

}
