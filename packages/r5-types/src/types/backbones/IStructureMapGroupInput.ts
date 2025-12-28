import type { IBackboneElement, IElement } from '../../base/index.js';
import type { StructureMapInputModeType } from '../../valuesets/index.js';

/**
 * StructureMapGroupInput Interface
 * 
 * Named instance provided when invoking the map
 * 
 *
 * @see https://hl7.org/fhir/R5/structuremapgroupinput.html
 */
export interface IStructureMapGroupInput extends IBackboneElement {
  /**
   * Name for this instance of data
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Type for this instance of data
   */
  type?: string;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * source | target
   */
  mode: StructureMapInputModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Documentation for this instance of data
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

}
