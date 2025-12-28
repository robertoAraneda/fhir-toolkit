import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * DeviceVersion Interface
 * 
 * The actual design of the device or software version running on the device
 * 
 *
 * @see https://hl7.org/fhir/R5/deviceversion.html
 */
export interface IDeviceVersion extends IBackboneElement {
  /**
   * The type of the device version, e.g. manufacturer, approved, internal
   */
  type?: ICodeableConcept;

  /**
   * The hardware or software module of the device to which the version applies
   */
  component?: IIdentifier;

  /**
   * The date the version was installed on the device
   */
  installDate?: string;
  /**
   * Extension for installDate
   */
  _installDate?: IElement;

  /**
   * The version text
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
