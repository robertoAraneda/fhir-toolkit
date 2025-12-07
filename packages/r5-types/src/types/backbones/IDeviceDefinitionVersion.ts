import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * DeviceDefinitionVersion Interface
 * 
 * The version of the device or software
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionversion.html
 */
export interface IDeviceDefinitionVersion extends IBackboneElement {
  /**
   * The type of the device version, e.g. manufacturer, approved, internal
   */
  type?: ICodeableConcept;

  /**
   * The hardware or software module of the device to which the version applies
   */
  component?: IIdentifier;

  /**
   * The version text
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
