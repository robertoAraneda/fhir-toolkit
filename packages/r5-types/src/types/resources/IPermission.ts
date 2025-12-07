import type { IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IPermissionJustification } from '../backbones/IPermissionJustification.js';
import type { IPermissionRule } from '../backbones/IPermissionRule.js';
import type { PermissionRuleCombiningType, PermissionStatusType } from '../../valuesets/index.js';

/**
 * Permission Interface
 * 
 * Permission resource holds access rules for a given data and context.
 * 
 *
 * @see https://hl7.org/fhir/R4/permission.html
 */
export interface IPermission extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Permission';

  /**
   * active | entered-in-error | draft | rejected
   */
  status: PermissionStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The person or entity that asserts the permission
   */
  asserter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson' | 'HealthcareService'>;

  /**
   * The date that permission was asserted
   */
  date?: string[];
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * The period in which the permission is active
   */
  validity?: IPeriod;

  /**
   * The asserted justification for using the data
   */
  justification?: IPermissionJustification;

  /**
   * deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny
   */
  combining: PermissionRuleCombiningType;
  /**
   * Extension for combining
   */
  _combining?: IElement;

  /**
   * Constraints to the Permission
   */
  rule?: IPermissionRule[];

}
