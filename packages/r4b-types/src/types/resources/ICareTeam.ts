import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ICareTeamParticipant } from '../backbones/ICareTeamParticipant.js';
import type { CareTeamStatusType } from '../../valuesets/index.js';

/**
 * CareTeam Interface
 * 
 * The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.
 * 
 *
 * @see https://hl7.org/fhir/R4B/careteam.html
 */
export interface ICareTeam extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CareTeam';

  /**
   * External Ids for this team
   */
  identifier?: IIdentifier[];

  /**
   * proposed | active | suspended | inactive | entered-in-error
   */
  status?: CareTeamStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Type of team
   */
  category?: ICodeableConcept[];

  /**
   * Name of the team, such as crisis assessment team
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Who care team is for
   */
  subject?: IReference<'Patient' | 'Group'>;

  /**
   * Encounter created as part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Time period team covers
   */
  period?: IPeriod;

  /**
   * Members of the team
   */
  participant?: ICareTeamParticipant[];

  /**
   * Why the care team exists
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Why the care team exists
   */
  reasonReference?: IReference<'Condition'>[];

  /**
   * Organization responsible for the care team
   */
  managingOrganization?: IReference<'Organization'>[];

  /**
   * A contact detail for the care team (that applies to all members)
   */
  telecom?: IContactPoint[];

  /**
   * Comments made about the CareTeam
   */
  note?: IAnnotation[];

}
