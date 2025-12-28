import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * StructureMapGroupRuleTargetParameter Interface
 * 
 * Parameters to the transform
 * 
 *
 * @see https://hl7.org/fhir/R4B/structuremapgroupruletargetparameter.html
 */
export interface IStructureMapGroupRuleTargetParameter extends IBackboneElement {
  /**
   * Parameter value - variable or literal
   */
  valueId?: string;
  /**
   * Extension for valueId
   */
  _valueId?: IElement;

  /**
   * Parameter value - variable or literal
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Parameter value - variable or literal
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Parameter value - variable or literal
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Parameter value - variable or literal
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

}
