import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IMeasureReportGroupStratifierStratumComponent } from './IMeasureReportGroupStratifierStratumComponent.js';
import type { IMeasureReportGroupStratifierStratumPopulation } from './IMeasureReportGroupStratifierStratumPopulation.js';

/**
 * MeasureReportGroupStratifierStratum Interface
 * 
 * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 * 
 *
 * @see https://hl7.org/fhir/R5/measurereportgroupstratifierstratum.html
 */
export interface IMeasureReportGroupStratifierStratum extends IBackboneElement {
  /**
   * The stratum value, e.g. male
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The stratum value, e.g. male
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The stratum value, e.g. male
   */
  valueQuantity?: IQuantity;

  /**
   * The stratum value, e.g. male
   */
  valueRange?: IRange;

  /**
   * The stratum value, e.g. male
   */
  valueReference?: IReference;

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
  measureScoreQuantity?: IQuantity;

  /**
   * What score this stratum achieved
   */
  measureScoreDateTime?: string;
  /**
   * Extension for measureScoreDateTime
   */
  _measureScoreDateTime?: IElement;

  /**
   * What score this stratum achieved
   */
  measureScoreCodeableConcept?: ICodeableConcept;

  /**
   * What score this stratum achieved
   */
  measureScorePeriod?: IPeriod;

  /**
   * What score this stratum achieved
   */
  measureScoreRange?: IRange;

  /**
   * What score this stratum achieved
   */
  measureScoreDuration?: IDuration;

}
