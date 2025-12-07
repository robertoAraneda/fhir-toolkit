import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DeviceNameTypeType } from '../../valuesets/index.js';

/**
 * DeviceDeviceName Interface
 * 
 * The name of the device as given by the manufacturer
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedevicename.html
 */
export interface IDeviceDeviceName extends IBackboneElement {
  /**
   * The name that identifies the device
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other
   */
  type: DeviceNameTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

}
