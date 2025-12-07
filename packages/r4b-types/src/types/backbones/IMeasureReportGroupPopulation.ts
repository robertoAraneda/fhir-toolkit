import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * MeasureReportGroupPopulation Interface
 * 
 * The populations in the group
 * 
 *
 * @see https://hl7.org/fhir/R4/measurereportgrouppopulation.html
 */
export interface IMeasureReportGroupPopulation extends IBackboneElement {
  /**
   * initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
   */
  code?: ICodeableConcept;

  /**
   * Size of the population
   */
  count?: number;
  /**
   * Extension for count
   */
  _count?: IElement;

  /**
   * For subject-list reports, the subject results in this population
   */
  subjectResults?: IReference<'List'>;

}
