import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPermissionRuleActivity } from './IPermissionRuleActivity.js';
import type { IPermissionRuleData } from './IPermissionRuleData.js';
import type { ConsentProvisionTypeType } from '../../valuesets/index.js';

/**
 * PermissionRule Interface
 * 
 * Constraints to the Permission
 * 
 *
 * @see https://hl7.org/fhir/R4/permissionrule.html
 */
export interface IPermissionRule extends IBackboneElement {
  /**
   * deny | permit
   */
  type?: ConsentProvisionTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The selection criteria to identify data that is within scope of this provision
   */
  data?: IPermissionRuleData[];

  /**
   * A description or definition of which activities are allowed to be done on the data
   */
  activity?: IPermissionRuleActivity[];

  /**
   * What limits apply to the use of the data
   */
  limit?: ICodeableConcept[];

}
