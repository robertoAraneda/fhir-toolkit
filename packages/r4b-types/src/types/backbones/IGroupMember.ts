import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * GroupMember Interface
 * 
 * Who or what is in group
 * 
 *
 * @see https://hl7.org/fhir/R4/groupmember.html
 */
export interface IGroupMember extends IBackboneElement {
  /**
   * Reference to the group member
   */
  entity: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Medication' | 'Substance' | 'Group'>;

  /**
   * Period member belonged to the group
   */
  period?: IPeriod;

  /**
   * If member is no longer in group
   */
  inactive?: boolean;
  /**
   * Extension for inactive
   */
  _inactive?: IElement;

}
