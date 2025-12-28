import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IEpisodeOfCareDiagnosis } from '../backbones/IEpisodeOfCareDiagnosis.js';
import type { IEpisodeOfCareReason } from '../backbones/IEpisodeOfCareReason.js';
import type { IEpisodeOfCareStatusHistory } from '../backbones/IEpisodeOfCareStatusHistory.js';
import type { EpisodeOfCareStatusType } from '../../valuesets/index.js';

/**
 * EpisodeOfCare Interface
 * 
 * An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 * 
 *
 * @see https://hl7.org/fhir/R5/episodeofcare.html
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
   * The list of medical reasons that are expected to be addressed during the episode of care
   */
  reason?: IEpisodeOfCareReason[];

  /**
   * The list of medical conditions that were addressed during the episode of care
   */
  diagnosis?: IEpisodeOfCareDiagnosis[];

  /**
   * The patient who is the focus of this episode of care
   */
  patient: IReference<'Patient'>;

  /**
   * Organization that assumes responsibility for care coordination
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
  careTeam?: IReference<'CareTeam'>[];

  /**
   * The set of accounts that may be used for billing for this EpisodeOfCare
   */
  account?: IReference<'Account'>[];

}
