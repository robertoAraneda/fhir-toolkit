import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IStructureMapGroupRuleDependent } from './IStructureMapGroupRuleDependent.js';
import type { IStructureMapGroupRuleSource } from './IStructureMapGroupRuleSource.js';
import type { IStructureMapGroupRuleTarget } from './IStructureMapGroupRuleTarget.js';

/**
 * StructureMapGroupRule Interface
 * 
 * Transform Rule from source to target
 * 
 *
 * @see https://hl7.org/fhir/R4/structuremapgrouprule.html
 */
export interface IStructureMapGroupRule extends IBackboneElement {
  /**
   * Name of the rule for internal references
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Source inputs to the mapping
   */
  source: IStructureMapGroupRuleSource[];

  /**
   * Content to create because of this mapping rule
   */
  target?: IStructureMapGroupRuleTarget[];

  /**
   * Rules contained in this rule
   */
  rule?: IStructureMapGroupRule[];

  /**
   * Which other rules to apply in the context of this rule
   */
  dependent?: IStructureMapGroupRuleDependent[];

  /**
   * Documentation for this instance of data
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

}
