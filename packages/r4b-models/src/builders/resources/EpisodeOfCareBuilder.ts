import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { EpisodeOfCare } from '../../models/resources/EpisodeOfCare.js';
import type {
  EpisodeOfCareStatusType,
  ICodeableConcept,
  IEpisodeOfCare,
  IEpisodeOfCareDiagnosis,
  IEpisodeOfCareStatusHistory,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * EpisodeOfCareBuilder - Fluent builder for EpisodeOfCare resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const episodeOfCare = new EpisodeOfCareBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class EpisodeOfCareBuilder extends DomainResourceBuilder<EpisodeOfCare, IEpisodeOfCare> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * planned | waitlist | active | onhold | finished | cancelled | entered-in-error
   */
  setStatus(status: EpisodeOfCareStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set patient
   * The patient who is the focus of this episode of care
   */
  setPatient(patient: IReference<'Patient'>): this {
    this.data.patient = patient;
    return this;
  }

  /**
   * Set managingOrganization
   * Organization that assumes care
   */
  setManagingOrganization(managingOrganization: IReference<'Organization'>): this {
    this.data.managingOrganization = managingOrganization;
    return this;
  }

  /**
   * Set period
   * Interval during responsibility is assumed
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set careManager
   * Care manager/care coordinator for the patient
   */
  setCareManager(careManager: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.careManager = careManager;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier(s) relevant for this EpisodeOfCare
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add statusHistory
   * Past list of status codes (the current status may be included to cover the start date of the status)
   */
  addStatusHistory(statusHistory: IEpisodeOfCareStatusHistory): this {
    return this.addToArray('statusHistory', statusHistory);
  }

  /**
   * Add type
   * Type/class  - e.g. specialist referral, disease management
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  /**
   * Add diagnosis
   * The list of diagnosis relevant to this episode of care
   */
  addDiagnosis(diagnosi: IEpisodeOfCareDiagnosis): this {
    return this.addToArray('diagnosis', diagnosi);
  }

  /**
   * Add referralRequest
   * Originating Referral Request(s)
   */
  addReferralRequest(referralRequest: IReference<'ServiceRequest'>): this {
    return this.addToArray('referralRequest', referralRequest);
  }

  /**
   * Add team
   * Other practitioners facilitating this episode of care
   */
  addTeam(team: IReference<'CareTeam'>): this {
    return this.addToArray('team', team);
  }

  /**
   * Add account
   * The set of accounts that may be used for billing for this EpisodeOfCare
   */
  addAccount(account: IReference<'Account'>): this {
    return this.addToArray('account', account);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EpisodeOfCare instance
   */
  build(): EpisodeOfCare {
    return new EpisodeOfCare(this.data);
  }

  /**
   * Build and validate the EpisodeOfCare instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EpisodeOfCare> {
    const episodeOfCare = this.build();
    await episodeOfCare.validateOrThrow();
    return episodeOfCare;
  }
}
