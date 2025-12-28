import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * MeasureReportGroupStratifierStratumComponent Interface
 * 
 * Stratifier component values
 * 
 *
 * @see https://hl7.org/fhir/R5/measurereportgroupstratifierstratumcomponent.html
 */
export interface IMeasureReportGroupStratifierStratumComponent extends IBackboneElement {
  /**
   * Pointer to specific stratifier component from Measure
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * What stratifier component of the group
   */
  code: ICodeableConcept;

  /**
   * The stratum component value, e.g. male
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The stratum component value, e.g. male
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The stratum component value, e.g. male
   */
  valueQuantity?: IQuantity;

  /**
   * The stratum component value, e.g. male
   */
  valueRange?: IRange;

  /**
   * The stratum component value, e.g. male
   */
  valueReference?: IReference;

}
