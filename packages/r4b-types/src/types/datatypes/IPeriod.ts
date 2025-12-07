import type { IElement } from '../../base/index.js';

/**
 * Period Interface
 * 
 * A time period defined by a start and end date and optionally time.
 * 
 *
 * @see https://hl7.org/fhir/R4/period.html
 */
export interface IPeriod extends IElement {
  /**
   * Starting time with inclusive boundary
   */
  start?: string;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * End time with inclusive boundary, if not ongoing
   */
  end?: string;
  /**
   * Extension for end
   */
  _end?: IElement;

}
