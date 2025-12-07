import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * StructureMapGroupRuleTargetParameter Interface
 * 
 * Parameters to the transform
 * 
 *
 * @see https://hl7.org/fhir/R4/structuremapgroupruletargetparameter.html
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

  /**
   * Parameter value - variable or literal
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * Parameter value - variable or literal
   */
  valueTime?: string;
  /**
   * Extension for valueTime
   */
  _valueTime?: IElement;

  /**
   * Parameter value - variable or literal
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

}
