import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMeasureReportGroupStratifierStratum } from './IMeasureReportGroupStratifierStratum.js';

/**
 * MeasureReportGroupStratifier Interface
 * 
 * Stratification results
 * 
 *
 * @see https://hl7.org/fhir/R4/measurereportgroupstratifier.html
 */
export interface IMeasureReportGroupStratifier extends IBackboneElement {
  /**
   * Pointer to specific stratifier from Measure
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * What stratifier of the group
   */
  code?: ICodeableConcept;

  /**
   * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
   */
  stratum?: IMeasureReportGroupStratifierStratum[];

}
