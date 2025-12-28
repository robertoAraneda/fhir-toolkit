import type { IBackboneElement, ICoding } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * DeviceDefinitionLink Interface
 * 
 * An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionlink.html
 */
export interface IDeviceDefinitionLink extends IBackboneElement {
  /**
   * The type indicates the relationship of the related device to the device instance
   */
  relation: ICoding;

  /**
   * A reference to the linked device
   */
  relatedDevice: ICodeableReference;

}
