import type { ICodeableConcept, ICoding, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IEncounterClassHistory } from '../backbones/IEncounterClassHistory.js';
import type { IEncounterDiagnosis } from '../backbones/IEncounterDiagnosis.js';
import type { IEncounterHospitalization } from '../backbones/IEncounterHospitalization.js';
import type { IEncounterLocation } from '../backbones/IEncounterLocation.js';
import type { IEncounterParticipant } from '../backbones/IEncounterParticipant.js';
import type { IEncounterStatusHistory } from '../backbones/IEncounterStatusHistory.js';
import type { EncounterStatusType } from '../../valuesets/index.js';

/**
 * Encounter Interface
 * 
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 * 
 *
 * @see https://hl7.org/fhir/R4B/encounter.html
 */
export interface IEncounter extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Encounter';

  /**
   * Identifier(s) by which this encounter is known
   */
  identifier?: IIdentifier[];

  /**
   * planned | arrived | triaged | in-progress | onleave | finished | cancelled +
   */
  status: EncounterStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * List of past encounter statuses
   */
  statusHistory?: IEncounterStatusHistory[];

  /**
   * Classification of patient encounter
   */
  class: ICoding;

  /**
   * List of past encounter classes
   */
  classHistory?: IEncounterClassHistory[];

  /**
   * Specific type of encounter
   */
  type?: ICodeableConcept[];

  /**
   * Specific type of service
   */
  serviceType?: ICodeableConcept;

  /**
   * Indicates the urgency of the encounter
   */
  priority?: ICodeableConcept;

  /**
   * The patient or group present at the encounter
   */
  subject?: IReference<'Patient' | 'Group'>;

  /**
   * Episode(s) of care that this encounter should be recorded against
   */
  episodeOfCare?: IReference<'EpisodeOfCare'>[];

  /**
   * The ServiceRequest that initiated this encounter
   */
  basedOn?: IReference<'ServiceRequest'>[];

  /**
   * List of participants involved in the encounter
   */
  participant?: IEncounterParticipant[];

  /**
   * The appointment that scheduled this encounter
   */
  appointment?: IReference<'Appointment'>[];

  /**
   * The start and end time of the encounter
   */
  period?: IPeriod;

  /**
   * Quantity of time the encounter lasted (less time absent)
   */
  length?: IDuration;

  /**
   * Coded reason the encounter takes place
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Reason the encounter takes place (reference)
   */
  reasonReference?: IReference<'Condition' | 'Procedure' | 'Observation' | 'ImmunizationRecommendation'>[];

  /**
   * The list of diagnosis relevant to this encounter
   */
  diagnosis?: IEncounterDiagnosis[];

  /**
   * The set of accounts that may be used for billing for this Encounter
   */
  account?: IReference<'Account'>[];

  /**
   * Details about the admission to a healthcare service
   */
  hospitalization?: IEncounterHospitalization;

  /**
   * List of locations where the patient has been
   */
  location?: IEncounterLocation[];

  /**
   * The organization (facility) responsible for this encounter
   */
  serviceProvider?: IReference<'Organization'>;

  /**
   * Another Encounter this encounter is part of
   */
  partOf?: IReference<'Encounter'>;

}
