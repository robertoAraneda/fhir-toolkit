import type { IElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';
import type { DaysOfWeekType, EventTimingType, UnitsOfTimeType } from '../../valuesets/index.js';

/**
 * TimingRepeat Interface
 * 
 * When the event is to occur
 * 
 *
 * @see https://hl7.org/fhir/R5/timingrepeat.html
 */
export interface ITimingRepeat extends IElement {
  /**
   * Length/Range of lengths, or (Start and/or end) limits
   */
  boundsDuration?: IDuration;

  /**
   * Length/Range of lengths, or (Start and/or end) limits
   */
  boundsRange?: IRange;

  /**
   * Length/Range of lengths, or (Start and/or end) limits
   */
  boundsPeriod?: IPeriod;

  /**
   * Number of times to repeat
   */
  count?: number;
  /**
   * Extension for count
   */
  _count?: IElement;

  /**
   * Maximum number of times to repeat
   */
  countMax?: number;
  /**
   * Extension for countMax
   */
  _countMax?: IElement;

  /**
   * How long when it happens
   */
  duration?: number;
  /**
   * Extension for duration
   */
  _duration?: IElement;

  /**
   * How long when it happens (Max)
   */
  durationMax?: number;
  /**
   * Extension for durationMax
   */
  _durationMax?: IElement;

  /**
   * s | min | h | d | wk | mo | a - unit of time (UCUM)
   */
  durationUnit?: UnitsOfTimeType;
  /**
   * Extension for durationUnit
   */
  _durationUnit?: IElement;

  /**
   * Indicates the number of repetitions that should occur within a period. I.e. Event occurs frequency times per period
   */
  frequency?: number;
  /**
   * Extension for frequency
   */
  _frequency?: IElement;

  /**
   * Event occurs up to frequencyMax times per period
   */
  frequencyMax?: number;
  /**
   * Extension for frequencyMax
   */
  _frequencyMax?: IElement;

  /**
   * The duration to which the frequency applies. I.e. Event occurs frequency times per period
   */
  period?: number;
  /**
   * Extension for period
   */
  _period?: IElement;

  /**
   * Upper limit of period (3-4 hours)
   */
  periodMax?: number;
  /**
   * Extension for periodMax
   */
  _periodMax?: IElement;

  /**
   * s | min | h | d | wk | mo | a - unit of time (UCUM)
   */
  periodUnit?: UnitsOfTimeType;
  /**
   * Extension for periodUnit
   */
  _periodUnit?: IElement;

  /**
   * mon | tue | wed | thu | fri | sat | sun
   */
  dayOfWeek?: DaysOfWeekType[];
  /**
   * Extension for dayOfWeek
   */
  _dayOfWeek?: IElement;

  /**
   * Time of day for action
   */
  timeOfDay?: string[];
  /**
   * Extension for timeOfDay
   */
  _timeOfDay?: IElement;

  /**
   * Code for time period of occurrence
   */
  when?: EventTimingType[];
  /**
   * Extension for when
   */
  _when?: IElement;

  /**
   * Minutes from event (before or after)
   */
  offset?: number;
  /**
   * Extension for offset
   */
  _offset?: IElement;

}
