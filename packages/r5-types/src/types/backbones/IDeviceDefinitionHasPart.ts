import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * DeviceDefinitionHasPart Interface
 * 
 * A device, part of the current one
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionhaspart.html
 */
export interface IDeviceDefinitionHasPart extends IBackboneElement {
  /**
   * Reference to the part
   */
  reference: IReference<'DeviceDefinition'>;

  /**
   * Number of occurrences of the part
   */
  count?: number;
  /**
   * Extension for count
   */
  _count?: IElement;

}
