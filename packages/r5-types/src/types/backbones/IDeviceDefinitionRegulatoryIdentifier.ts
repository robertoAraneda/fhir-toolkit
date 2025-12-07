import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DeviceDefinitionRegulatoryIdentifierTypeType } from '../../valuesets/index.js';

/**
 * DeviceDefinitionRegulatoryIdentifier Interface
 * 
 * Regulatory identifier(s) associated with this device
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionregulatoryidentifier.html
 */
export interface IDeviceDefinitionRegulatoryIdentifier extends IBackboneElement {
  /**
   * basic | master | license
   */
  type: DeviceDefinitionRegulatoryIdentifierTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The identifier itself
   */
  deviceIdentifier: string;
  /**
   * Extension for deviceIdentifier
   */
  _deviceIdentifier?: IElement;

  /**
   * The organization that issued this identifier
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

}
