import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { ITimingRepeat } from '../backbones/ITimingRepeat.js';

/**
 * Timing Interface
 * 
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 * 
 *
 * @see https://hl7.org/fhir/R4/timing.html
 */
export interface ITiming extends IBackboneElement {
  /**
   * When the event occurs
   */
  event?: string[];
  /**
   * Extension for event
   */
  _event?: IElement;

  /**
   * When the event is to occur
   */
  repeat?: ITimingRepeat;

  /**
   * BID | TID | QID | AM | PM | QD | QOD | +
   */
  code?: ICodeableConcept;

}
