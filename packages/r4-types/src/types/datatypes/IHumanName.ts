import type { IElement } from '../../base/index.js';
import type { IPeriod } from './IPeriod.js';
import type { NameUseType } from '../../valuesets/index.js';

/**
 * HumanName Interface
 * 
 * A human's name with the ability to identify parts and usage.
 * 
 *
 * @see https://hl7.org/fhir/R4/humanname.html
 */
export interface IHumanName extends IElement {
  /**
   * usual | official | temp | nickname | anonymous | old | maiden
   */
  use?: NameUseType;
  /**
   * Extension for use
   */
  _use?: IElement;

  /**
   * Text representation of the full name
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Family name (often called 'Surname')
   */
  family?: string;
  /**
   * Extension for family
   */
  _family?: IElement;

  /**
   * Given names (not always 'first'). Includes middle names
   */
  given?: string[];
  /**
   * Extension for given
   */
  _given?: IElement;

  /**
   * Parts that come before the name
   */
  prefix?: string[];
  /**
   * Extension for prefix
   */
  _prefix?: IElement;

  /**
   * Parts that come after the name
   */
  suffix?: string[];
  /**
   * Extension for suffix
   */
  _suffix?: IElement;

  /**
   * Time period when name was/is in use
   */
  period?: IPeriod;

}
