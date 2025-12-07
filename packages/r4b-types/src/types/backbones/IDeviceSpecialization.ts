import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * DeviceSpecialization Interface
 * 
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 * 
 *
 * @see https://hl7.org/fhir/R4/devicespecialization.html
 */
export interface IDeviceSpecialization extends IBackboneElement {
  /**
   * The standard that is used to operate and communicate
   */
  systemType: ICodeableConcept;

  /**
   * The version of the standard that is used to operate and communicate
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

}
