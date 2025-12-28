import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';

/**
 * CareTeamParticipant Interface
 * 
 * Members of the team
 * 
 *
 * @see https://hl7.org/fhir/R5/careteamparticipant.html
 */
export interface ICareTeamParticipant extends IBackboneElement {
  /**
   * Type of involvement
   */
  role?: ICodeableConcept;

  /**
   * Who is involved
   */
  member?: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Organization' | 'CareTeam'>;

  /**
   * Organization of the practitioner
   */
  onBehalfOf?: IReference<'Organization'>;

  /**
   * When the member is generally available within this care team
   */
  coveragePeriod?: IPeriod;

  /**
   * When the member is generally available within this care team
   */
  coverageTiming?: ITiming;

}
