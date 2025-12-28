import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * DeviceDefinitionUdiDeviceIdentifierMarketDistribution Interface
 * 
 * Indicates whether and when the device is available on the market
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionudideviceidentifiermarketdistribution.html
 */
export interface IDeviceDefinitionUdiDeviceIdentifierMarketDistribution extends IBackboneElement {
  /**
   * Begin and end dates for the commercial distribution of the device
   */
  marketPeriod: IPeriod;

  /**
   * National state or territory where the device is commercialized
   */
  subJurisdiction: string;
  /**
   * Extension for subJurisdiction
   */
  _subJurisdiction?: IElement;

}
