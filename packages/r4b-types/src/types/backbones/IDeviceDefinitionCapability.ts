import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * DeviceDefinitionCapability Interface
 * 
 * Device capabilities
 * 
 *
 * @see https://hl7.org/fhir/R4B/devicedefinitioncapability.html
 */
export interface IDeviceDefinitionCapability extends IBackboneElement {
  /**
   * Type of capability
   */
  type: ICodeableConcept;

  /**
   * Description of capability
   */
  description?: ICodeableConcept[];

}
