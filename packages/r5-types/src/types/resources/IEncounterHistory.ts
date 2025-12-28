import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IEncounterHistoryLocation } from '../backbones/IEncounterHistoryLocation.js';
import type { EncounterStatusType } from '../../valuesets/index.js';

/**
 * EncounterHistory Interface
 * 
 * A record of significant events/milestones key data throughout the history of an Encounter, often tracked for specific purposes such as billing.
 * 
 *
 * @see https://hl7.org/fhir/R5/encounterhistory.html
 */
export interface IEncounterHistory extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'EncounterHistory';

  /**
   * The Encounter associated with this set of historic values
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Identifier(s) by which this encounter is known
   */
  identifier?: IIdentifier[];

  /**
   * planned | in-progress | on-hold | discharged | completed | cancelled | discontinued | entered-in-error | unknown
   */
  status: EncounterStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Classification of patient encounter
   */
  class: ICodeableConcept;

  /**
   * Specific type of encounter
   */
  type?: ICodeableConcept[];

  /**
   * Specific type of service
   */
  serviceType?: ICodeableReference[];

  /**
   * The patient or group related to this encounter
   */
  subject?: IReference<'Patient' | 'Group'>;

  /**
   * The current status of the subject in relation to the Encounter
   */
  subjectStatus?: ICodeableConcept;

  /**
   * The actual start and end time associated with this set of values associated with the encounter
   */
  actualPeriod?: IPeriod;

  /**
   * The planned start date/time (or admission date) of the encounter
   */
  plannedStartDate?: string;
  /**
   * Extension for plannedStartDate
   */
  _plannedStartDate?: IElement;

  /**
   * The planned end date/time (or discharge date) of the encounter
   */
  plannedEndDate?: string;
  /**
   * Extension for plannedEndDate
   */
  _plannedEndDate?: IElement;

  /**
   * Actual quantity of time the encounter lasted (less time absent)
   */
  length?: IDuration;

  /**
   * Location of the patient at this point in the encounter
   */
  location?: IEncounterHistoryLocation[];

}
