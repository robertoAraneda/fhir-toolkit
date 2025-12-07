import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IDeviceDefinitionUdiDeviceIdentifierMarketDistribution } from './IDeviceDefinitionUdiDeviceIdentifierMarketDistribution.js';

/**
 * DeviceDefinitionUdiDeviceIdentifier Interface
 * 
 * Unique Device Identifier (UDI) Barcode string
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionudideviceidentifier.html
 */
export interface IDeviceDefinitionUdiDeviceIdentifier extends IBackboneElement {
  /**
   * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdiction provided in the DeviceDefinition.udiDeviceIdentifier
   */
  deviceIdentifier: string;
  /**
   * Extension for deviceIdentifier
   */
  _deviceIdentifier?: IElement;

  /**
   * The organization that assigns the identifier algorithm
   */
  issuer: string;
  /**
   * Extension for issuer
   */
  _issuer?: IElement;

  /**
   * The jurisdiction to which the deviceIdentifier applies
   */
  jurisdiction: string;
  /**
   * Extension for jurisdiction
   */
  _jurisdiction?: IElement;

  /**
   * Indicates whether and when the device is available on the market
   */
  marketDistribution?: IDeviceDefinitionUdiDeviceIdentifierMarketDistribution[];

}
