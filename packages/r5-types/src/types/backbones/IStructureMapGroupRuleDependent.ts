import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IStructureMapGroupRuleTargetParameter } from './IStructureMapGroupRuleTargetParameter.js';

/**
 * StructureMapGroupRuleDependent Interface
 * 
 * Which other rules to apply in the context of this rule
 * 
 *
 * @see https://hl7.org/fhir/R4/structuremapgroupruledependent.html
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
   * Parameter to pass to the rule or group
   */
  parameter: IStructureMapGroupRuleTargetParameter[];

}
