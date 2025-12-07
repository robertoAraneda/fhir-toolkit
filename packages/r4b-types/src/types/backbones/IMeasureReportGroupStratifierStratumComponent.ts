import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * MeasureReportGroupStratifierStratumComponent Interface
 * 
 * Stratifier component values
 * 
 *
 * @see https://hl7.org/fhir/R4/measurereportgroupstratifierstratumcomponent.html
 */
export interface IMeasureReportGroupStratifierStratumComponent extends IBackboneElement {
  /**
   * What stratifier component of the group
   */
  code: ICodeableConcept;

  /**
   * The stratum component value, e.g. male
   */
  value: ICodeableConcept;

}
