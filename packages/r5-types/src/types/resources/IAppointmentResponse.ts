import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { AppointmentResponseStatusType } from '../../valuesets/index.js';

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
   * Indicator for a counter proposal
   */
  proposedNewTime?: boolean;
  /**
   * Extension for proposedNewTime
   */
  _proposedNewTime?: IElement;

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
   * Person(s), Location, HealthcareService, or Device
   */
  actor?: IReference<'Patient' | 'Group' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>;

  /**
   * accepted | declined | tentative | needs-action | entered-in-error
   */
  participantStatus: AppointmentResponseStatusType;
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

  /**
   * This response is for all occurrences in a recurring request
   */
  recurring?: boolean;
  /**
   * Extension for recurring
   */
  _recurring?: IElement;

  /**
   * Original date within a recurring request
   */
  occurrenceDate?: string;
  /**
   * Extension for occurrenceDate
   */
  _occurrenceDate?: IElement;

  /**
   * The recurrence ID of the specific recurring request
   */
  recurrenceId?: number;
  /**
   * Extension for recurrenceId
   */
  _recurrenceId?: IElement;

}
