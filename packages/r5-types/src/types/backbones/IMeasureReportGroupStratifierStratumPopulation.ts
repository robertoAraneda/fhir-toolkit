import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * MeasureReportGroupStratifierStratumPopulation Interface
 * 
 * Population results in this stratum
 * 
 *
 * @see https://hl7.org/fhir/R5/measurereportgroupstratifierstratumpopulation.html
 */
export interface IMeasureReportGroupStratifierStratumPopulation extends IBackboneElement {
  /**
   * Pointer to specific population from Measure
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

  /**
   * For subject-list reports, a subject result in this population
   */
  subjectReport?: IReference<'MeasureReport'>[];

  /**
   * What individual(s) in the population
   */
  subjects?: IReference<'Group'>;

}
