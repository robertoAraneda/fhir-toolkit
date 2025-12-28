import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IEpisodeOfCareDiagnosis } from '../backbones/IEpisodeOfCareDiagnosis.js';
import type { IEpisodeOfCareStatusHistory } from '../backbones/IEpisodeOfCareStatusHistory.js';
import type { EpisodeOfCareStatusType } from '../../valuesets/index.js';

/**
 * EpisodeOfCare Interface
 * 
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 * 
 *
 * @see https://hl7.org/fhir/R4B/episodeofcare.html
 */
export interface IEpisodeOfCare extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'EpisodeOfCare';

  /**
   * Business Identifier(s) relevant for this EpisodeOfCare
   */
  identifier?: IIdentifier[];

  /**
   * planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   */
  status: EpisodeOfCareStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Past list of status codes (the current status may be included to cover the start date of the status)
   */
  statusHistory?: IEpisodeOfCareStatusHistory[];

  /**
   * Type/class  - e.g. specialist referral, disease management
   */
  type?: ICodeableConcept[];

  /**
   * The list of diagnosis relevant to this episode of care
   */
  diagnosis?: IEpisodeOfCareDiagnosis[];

  /**
   * The patient who is the focus of this episode of care
   */
  patient: IReference<'Patient'>;

  /**
   * Organization that assumes care
   */
  managingOrganization?: IReference<'Organization'>;

  /**
   * Interval during responsibility is assumed
   */
  period?: IPeriod;

  /**
   * Originating Referral Request(s)
   */
  referralRequest?: IReference<'ServiceRequest'>[];

  /**
   * Care manager/care coordinator for the patient
   */
  careManager?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Other practitioners facilitating this episode of care
   */
  team?: IReference<'CareTeam'>[];

  /**
   * The set of accounts that may be used for billing for this EpisodeOfCare
   */
  account?: IReference<'Account'>[];

}
