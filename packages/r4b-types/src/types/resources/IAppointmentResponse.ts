import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ParticipationStatusType } from '../../valuesets/index.js';

/**
 * AppointmentResponse Interface
 * 
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 * 
 *
 * @see https://hl7.org/fhir/R4/appointmentresponse.html
 */
export interface IAppointmentResponse extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'AppointmentResponse';

  /**
   * External Ids for this item
   */
  identifier?: IIdentifier[];

  /**
   * Appointment this response relates to
   */
  appointment: IReference<'Appointment'>;

  /**
   * Time from appointment, or requested new start time
   */
  start?: string;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * Time from appointment, or requested new end time
   */
  end?: string;
  /**
   * Extension for end
   */
  _end?: IElement;

  /**
   * Role of participant in the appointment
   */
  participantType?: ICodeableConcept[];

  /**
   * Person, Location, HealthcareService, or Device
   */
  actor?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>;

  /**
   * accepted | declined | tentative | needs-action
   */
  participantStatus: ParticipationStatusType;
  /**
   * Extension for participantStatus
   */
  _participantStatus?: IElement;

  /**
   * Additional comments
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

}
