import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * CareTeamParticipant Interface
 * 
 * Members of the team
 * 
 *
 * @see https://hl7.org/fhir/R4B/careteamparticipant.html
 */
export interface ICareTeamParticipant extends IBackboneElement {
  /**
   * Type of involvement
   */
  role?: ICodeableConcept[];

  /**
   * Who is involved
   */
  member?: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Organization' | 'CareTeam'>;

  /**
   * Organization of the practitioner
   */
  onBehalfOf?: IReference<'Organization'>;

  /**
   * Time period of participant
   */
  period?: IPeriod;

}
