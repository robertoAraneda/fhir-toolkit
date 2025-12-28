import type { IDataType, IElement } from '../../base/index.js';
import type { IQuantity } from './IQuantity.js';

/**
 * SampledData Interface
 * 
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.
 * 
 *
 * @see https://hl7.org/fhir/R5/sampleddata.html
 */
export interface ISampledData extends IDataType {
  /**
   * Zero value and units
   */
  origin: IQuantity;

  /**
   * Number of intervalUnits between samples
   */
  interval?: number;
  /**
   * Extension for interval
   */
  _interval?: IElement;

  /**
   * The measurement unit of the interval between samples
   */
  intervalUnit: string;
  /**
   * Extension for intervalUnit
   */
  _intervalUnit?: IElement;

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
   * Defines the codes used in the data
   */
  codeMap?: string;
  /**
   * Extension for codeMap
   */
  _codeMap?: IElement;

  /**
   * Offsets, typically in time, at which data values were taken
   */
  offsets?: string;
  /**
   * Extension for offsets
   */
  _offsets?: IElement;

  /**
   * Decimal values with spaces, or "E" | "U" | "L", or another code
   */
  data?: string;
  /**
   * Extension for data
   */
  _data?: IElement;

}
