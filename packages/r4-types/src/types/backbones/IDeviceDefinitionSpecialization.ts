import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * DeviceDefinitionSpecialization Interface
 * 
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionspecialization.html
 */
export interface IDeviceDefinitionSpecialization extends IBackboneElement {
  /**
   * The standard that is used to operate and communicate
   */
  systemType: string;
  /**
   * Extension for systemType
   */
  _systemType?: IElement;

  /**
   * The version of the standard that is used to operate and communicate
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

}
