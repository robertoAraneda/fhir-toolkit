import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IVirtualServiceDetail } from '../datatypes/IVirtualServiceDetail.js';
import type { IAppointmentParticipant } from '../backbones/IAppointmentParticipant.js';
import type { IAppointmentRecurrenceTemplate } from '../backbones/IAppointmentRecurrenceTemplate.js';
import type { AppointmentStatusType } from '../../valuesets/index.js';

/**
 * Appointment Interface
 * 
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 * 
 *
 * @see https://hl7.org/fhir/R4/appointment.html
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
  cancellationReason?: ICodeableConcept;

  /**
   * Classification when becoming an encounter
   */
  class?: ICodeableConcept[];

  /**
   * A broad categorization of the service that is to be performed during this appointment
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * The specific service that is to be performed during this appointment
   */
  serviceType?: ICodeableReference[];

  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment
   */
  specialty?: ICodeableConcept[];

  /**
   * The style of appointment or patient that has been booked in the slot (not service type)
   */
  appointmentType?: ICodeableConcept;

  /**
   * Reason this appointment is scheduled
   */
  reason?: ICodeableReference[];

  /**
   * Used to make informed decisions if needing to re-prioritize
   */
  priority?: ICodeableConcept;

  /**
   * Shown on a subject line in a meeting request, or appointment list
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Appointment replaced by this Appointment
   */
  replaces?: IReference<'Appointment'>[];

  /**
   * Connection details of a virtual service (e.g. conference call)
   */
  virtualService?: IVirtualServiceDetail[];

  /**
   * Additional information to support the appointment
   */
  supportingInformation?: IReference<'Resource'>[];

  /**
   * The previous appointment in a series
   */
  previousAppointment?: IReference<'Appointment'>;

  /**
   * The originating appointment in a recurring set of appointments
   */
  originatingAppointment?: IReference<'Appointment'>;

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
   * Potential date/time interval(s) requested to allocate the appointment within
   */
  requestedPeriod?: IPeriod[];

  /**
   * The slots that this appointment is filling
   */
  slot?: IReference<'Slot'>[];

  /**
   * The set of accounts that may be used for billing for this Appointment
   */
  account?: IReference<'Account'>[];

  /**
   * The date that this appointment was initially created
   */
  created?: string;
  /**
   * Extension for created
   */
  _created?: IElement;

  /**
   * When the appointment was cancelled
   */
  cancellationDate?: string;
  /**
   * Extension for cancellationDate
   */
  _cancellationDate?: IElement;

  /**
   * Additional comments
   */
  note?: IAnnotation[];

  /**
   * Detailed information and instructions for the patient
   */
  patientInstruction?: ICodeableReference[];

  /**
   * The request this appointment is allocated to assess
   */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'MedicationRequest' | 'ServiceRequest'>[];

  /**
   * The patient or group associated with the appointment
   */
  subject?: IReference<'Patient' | 'Group'>;

  /**
   * Participants involved in appointment
   */
  participant: IAppointmentParticipant[];

  /**
   * The sequence number in the recurrence
   */
  recurrenceId?: number;
  /**
   * Extension for recurrenceId
   */
  _recurrenceId?: IElement;

  /**
   * Indicates that this appointment varies from a recurrence pattern
   */
  occurrenceChanged?: boolean;
  /**
   * Extension for occurrenceChanged
   */
  _occurrenceChanged?: IElement;

  /**
   * Details of the recurrence pattern/template used to generate occurrences
   */
  recurrenceTemplate?: IAppointmentRecurrenceTemplate[];

}
