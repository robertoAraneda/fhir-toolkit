import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * DeviceDefinitionProperty Interface
 * 
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 * 
 *
 * @see https://hl7.org/fhir/R4/devicedefinitionproperty.html
 */
export interface IDeviceDefinitionProperty extends IBackboneElement {
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible)
   */
  type: ICodeableConcept;

  /**
   * Property value as a quantity
   */
  valueQuantity?: IQuantity[];

  /**
   * Property value as a code, e.g., NTP4 (synced to NTP)
   */
  valueCode?: ICodeableConcept[];

}
