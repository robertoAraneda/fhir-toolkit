import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * StructureMapConst Interface
 * 
 * Definition of the constant value used in the map rules
 * 
 *
 * @see https://hl7.org/fhir/R5/structuremapconst.html
 */
export interface IStructureMapConst extends IBackboneElement {
  /**
   * Constant name
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * FHIRPath exression - value of the constant
   */
  value?: string;
  /**
   * Extension for value
   */
  _value?: IElement;

}
