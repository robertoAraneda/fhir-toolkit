import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IStructureMapGroupRuleTargetParameter } from './IStructureMapGroupRuleTargetParameter.js';
import type { StructureMapTargetListModeType, StructureMapTransformType } from '../../valuesets/index.js';

/**
 * StructureMapGroupRuleTarget Interface
 * 
 * Content to create because of this mapping rule
 * 
 *
 * @see https://hl7.org/fhir/R5/structuremapgroupruletarget.html
 */
export interface IStructureMapGroupRuleTarget extends IBackboneElement {
  /**
   * Variable this rule applies to
   */
  context?: string;
  /**
   * Extension for context
   */
  _context?: IElement;

  /**
   * Field to create in the context
   */
  element?: string;
  /**
   * Extension for element
   */
  _element?: IElement;

  /**
   * Named context for field, if desired, and a field is specified
   */
  variable?: string;
  /**
   * Extension for variable
   */
  _variable?: IElement;

  /**
   * first | share | last | single
   */
  listMode?: StructureMapTargetListModeType[];
  /**
   * Extension for listMode
   */
  _listMode?: IElement;

  /**
   * Internal rule reference for shared list items
   */
  listRuleId?: string;
  /**
   * Extension for listRuleId
   */
  _listRuleId?: IElement;

  /**
   * create | copy +
   */
  transform?: StructureMapTransformType;
  /**
   * Extension for transform
   */
  _transform?: IElement;

  /**
   * Parameters to the transform
   */
  parameter?: IStructureMapGroupRuleTargetParameter[];

}
