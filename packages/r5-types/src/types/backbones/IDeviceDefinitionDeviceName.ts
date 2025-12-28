import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DeviceNameTypeType } from '../../valuesets/index.js';

/**
 * DeviceDefinitionDeviceName Interface
 * 
 * The name or names of the device as given by the manufacturer
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinitiondevicename.html
 */
export interface IDeviceDefinitionDeviceName extends IBackboneElement {
  /**
   * A name that is used to refer to the device
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * registered-name | user-friendly-name | patient-reported-name
   */
  type: DeviceNameTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

}
