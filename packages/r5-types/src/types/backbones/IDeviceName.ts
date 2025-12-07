import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DeviceNameTypeType } from '../../valuesets/index.js';

/**
 * DeviceName Interface
 * 
 * The name or names of the device as known to the manufacturer and/or patient
 * 
 *
 * @see https://hl7.org/fhir/R4/devicename.html
 */
export interface IDeviceName extends IBackboneElement {
  /**
   * The term that names the device
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * registered-name | user-friendly-name | patient-reported-name
   */
  type: DeviceNameTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The preferred device name
   */
  display?: boolean;
  /**
   * Extension for display
   */
  _display?: IElement;

}
