import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IMeasureReportGroupStratifierStratumComponent } from './IMeasureReportGroupStratifierStratumComponent.js';
import type { IMeasureReportGroupStratifierStratumPopulation } from './IMeasureReportGroupStratifierStratumPopulation.js';

/**
 * MeasureReportGroupStratifierStratum Interface
 * 
 * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 * 
 *
 * @see https://hl7.org/fhir/R4B/measurereportgroupstratifierstratum.html
 */
export interface IMeasureReportGroupStratifierStratum extends IBackboneElement {
  /**
   * The stratum value, e.g. male
   */
  value?: ICodeableConcept;

  /**
   * Stratifier component values
   */
  component?: IMeasureReportGroupStratifierStratumComponent[];

  /**
   * Population results in this stratum
   */
  population?: IMeasureReportGroupStratifierStratumPopulation[];

  /**
   * What score this stratum achieved
   */
  measureScore?: IQuantity;

}
