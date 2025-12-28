import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ParticipationStatusType } from '../../valuesets/index.js';

/**
 * AppointmentParticipant Interface
 * 
 * Participants involved in appointment
 * 
 *
 * @see https://hl7.org/fhir/R5/appointmentparticipant.html
 */
export interface IAppointmentParticipant extends IBackboneElement {
  /**
   * Role of participant in the appointment
   */
  type?: ICodeableConcept[];

  /**
   * Participation period of the actor
   */
  period?: IPeriod;

  /**
   * The individual, device, location, or service participating in the appointment
   */
  actor?: IReference<'Patient' | 'Group' | 'Practitioner' | 'PractitionerRole' | 'CareTeam' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>;

  /**
   * The participant is required to attend (optional when false)
   */
  required?: boolean;
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

}
