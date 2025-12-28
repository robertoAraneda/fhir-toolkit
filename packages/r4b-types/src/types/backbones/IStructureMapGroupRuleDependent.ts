import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * StructureMapGroupRuleDependent Interface
 * 
 * Which other rules to apply in the context of this rule
 * 
 *
 * @see https://hl7.org/fhir/R4B/structuremapgroupruledependent.html
 */
export interface IStructureMapGroupRuleDependent extends IBackboneElement {
  /**
   * Name of a rule or group to apply
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Variable to pass to the rule or group
   */
  variable: string[];
  /**
   * Extension for variable
   */
  _variable?: IElement;

}
