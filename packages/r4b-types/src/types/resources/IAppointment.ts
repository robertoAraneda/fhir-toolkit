import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IAppointmentParticipant } from '../backbones/IAppointmentParticipant.js';
import type { AppointmentStatusType } from '../../valuesets/index.js';

/**
 * Appointment Interface
 * 
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 * 
 *
 * @see https://hl7.org/fhir/R4B/appointment.html
 */
export interface IAppointment extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Appointment';

  /**
   * External Ids for this item
   */
  identifier?: IIdentifier[];

  /**
   * proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist
   */
  status: AppointmentStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The coded reason for the appointment being cancelled
   */
  cancelationReason?: ICodeableConcept;

  /**
   * A broad categorization of the service that is to be performed during this appointment
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * The specific service that is to be performed during this appointment
   */
  serviceType?: ICodeableConcept[];

  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment
   */
  specialty?: ICodeableConcept[];

  /**
   * The style of appointment or patient that has been booked in the slot (not service type)
   */
  appointmentType?: ICodeableConcept;

  /**
   * Coded reason this appointment is scheduled
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Reason the appointment is to take place (resource)
   */
  reasonReference?: IReference<'Condition' | 'Procedure' | 'Observation' | 'ImmunizationRecommendation'>[];

  /**
   * Used to make informed decisions if needing to re-prioritize
   */
  priority?: number;
  /**
   * Extension for priority
   */
  _priority?: IElement;

  /**
   * Shown on a subject line in a meeting request, or appointment list
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Additional information to support the appointment
   */
  supportingInformation?: IReference<'Resource'>[];

  /**
   * When appointment is to take place
   */
  start?: string;
  /**
   * Extension for start
   */
  _start?: IElement;

  /**
   * When appointment is to conclude
   */
  end?: string;
  /**
   * Extension for end
   */
  _end?: IElement;

  /**
   * Can be less than start/end (e.g. estimate)
   */
  minutesDuration?: number;
  /**
   * Extension for minutesDuration
   */
  _minutesDuration?: IElement;

  /**
   * The slots that this appointment is filling
   */
  slot?: IReference<'Slot'>[];

  /**
   * The date that this appointment was initially created
   */
  created?: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * Additional comments
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Detailed information and instructions for the patient
   */
  patientInstruction?: string;
  /**
   * Extension for patientInstruction
   */
  _patientInstruction?: IElement;

  /**
   * The service request this appointment is allocated to assess
   */
  basedOn?: IReference<'ServiceRequest'>[];

  /**
   * Participants involved in appointment
   */
  participant: IAppointmentParticipant[];

  /**
   * Potential date/time interval(s) requested to allocate the appointment within
   */
  requestedPeriod?: IPeriod[];

}
