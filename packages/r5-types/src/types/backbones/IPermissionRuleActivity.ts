import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * PermissionRuleActivity Interface
 * 
 * A description or definition of which activities are allowed to be done on the data
 * 
 *
 * @see https://hl7.org/fhir/R5/permissionruleactivity.html
 */
export interface IPermissionRuleActivity extends IBackboneElement {
  /**
   * Authorized actor(s)
   */
  actor?: IReference<'Device' | 'Group' | 'CareTeam' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>[];

  /**
   * Actions controlled by this rule
   */
  action?: ICodeableConcept[];

  /**
   * The purpose for which the permission is given
   */
  purpose?: ICodeableConcept[];

}
