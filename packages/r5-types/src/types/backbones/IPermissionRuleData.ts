import type { IBackboneElement, ICoding } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IPermissionRuleDataResource } from './IPermissionRuleDataResource.js';

/**
 * PermissionRuleData Interface
 * 
 * The selection criteria to identify data that is within scope of this provision
 * 
 *
 * @see https://hl7.org/fhir/R4/permissionruledata.html
 */
export interface IPermissionRuleData extends IBackboneElement {
  /**
   * Explicit FHIR Resource references
   */
  resource?: IPermissionRuleDataResource[];

  /**
   * Security tag code on .meta.security
   */
  security?: ICoding[];

  /**
   * Timeframe encompasing data create/update
   */
  period?: IPeriod[];

  /**
   * Expression identifying the data
   */
  expression?: IExpression;

}
