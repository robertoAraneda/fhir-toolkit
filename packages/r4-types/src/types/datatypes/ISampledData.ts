import type { IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';

/**
 * SampledData Interface
 * 
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 * 
 *
 * @see https://hl7.org/fhir/R4/sampleddata.html
 */
export interface ISampledData extends IElement {
  /**
   * Zero value and units
   */
  origin: IQuantity;

  /**
   * Number of milliseconds between samples
   */
  period: number;
  /**
   * Extension for period
   */
  _period?: IElement;

  /**
   * Multiply data by this before adding to origin
   */
  factor?: number;
  /**
   * Extension for factor
   */
  _factor?: IElement;

  /**
   * Lower limit of detection
   */
  lowerLimit?: number;
  /**
   * Extension for lowerLimit
   */
  _lowerLimit?: IElement;

  /**
   * Upper limit of detection
   */
  upperLimit?: number;
  /**
   * Extension for upperLimit
   */
  _upperLimit?: IElement;

  /**
   * Number of sample points at each time point
   */
  dimensions: number;
  /**
   * Extension for dimensions
   */
  _dimensions?: IElement;

  /**
   * Decimal values with spaces, or "E" | "U" | "L"
   */
  data?: string;
  /**
   * Extension for data
   */
  _data?: IElement;

}
