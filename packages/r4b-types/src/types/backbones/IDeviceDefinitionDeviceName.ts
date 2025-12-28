import type { IBackboneElement, IElement } from '../../base/index.js';
import type { DeviceNameTypeType } from '../../valuesets/index.js';

/**
 * DeviceDefinitionDeviceName Interface
 * 
 * A name given to the device to identify it
 * 
 *
 * @see https://hl7.org/fhir/R4B/devicedefinitiondevicename.html
 */
export interface IDeviceDefinitionDeviceName extends IBackboneElement {
  /**
   * The name of the device
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
