import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ParticipantRequiredType, ParticipationStatusType } from '../../valuesets/index.js';

/**
 * AppointmentParticipant Interface
 * 
 * Participants involved in appointment
 * 
 *
 * @see https://hl7.org/fhir/R4B/appointmentparticipant.html
 */
export interface IAppointmentParticipant extends IBackboneElement {
  /**
   * Role of participant in the appointment
   */
  type?: ICodeableConcept[];

  /**
   * Person, Location/HealthcareService or Device
   */
  actor?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>;

  /**
   * required | optional | information-only
   */
  required?: ParticipantRequiredType;
  /**
   * Extension for required
   */
  _required?: IElement;

  /**
   * accepted | declined | tentative | needs-action
   */
  status: ParticipationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Participation period of the actor
   */
  period?: IPeriod;

}
