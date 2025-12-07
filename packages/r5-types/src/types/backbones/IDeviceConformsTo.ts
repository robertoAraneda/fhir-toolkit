import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * DeviceConformsTo Interface
 * 
 * Identifies the standards, specifications, or formal guidances for the capabilities supported by the device
 * 
 *
 * @see https://hl7.org/fhir/R4/deviceconformsto.html
 */
export interface IDeviceConformsTo extends IBackboneElement {
  /**
   * Describes the common type of the standard, specification, or formal guidance.  communication | performance | measurement
   */
  category?: ICodeableConcept;

  /**
   * Identifies the standard, specification, or formal guidance that the device adheres to
   */
  specification: ICodeableConcept;

  /**
   * Specific form or variant of the standard
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

}
