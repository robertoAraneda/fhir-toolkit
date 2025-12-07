import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMeasureReportGroupPopulation } from './IMeasureReportGroupPopulation.js';
import type { IMeasureReportGroupStratifier } from './IMeasureReportGroupStratifier.js';

/**
 * MeasureReportGroup Interface
 * 
 * Measure results for each group
 * 
 *
 * @see https://hl7.org/fhir/R4/measurereportgroup.html
 */
export interface IMeasureReportGroup extends IBackboneElement {
  /**
   * Meaning of the group
   */
  code?: ICodeableConcept;

  /**
   * The populations in the group
   */
  population?: IMeasureReportGroupPopulation[];

  /**
   * What score this group achieved
   */
  measureScore?: IQuantity;

  /**
   * Stratification results
   */
  stratifier?: IMeasureReportGroupStratifier[];

}
