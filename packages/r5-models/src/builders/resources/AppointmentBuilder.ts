import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Appointment } from '../../models/resources/Appointment.js';
import type {
  AppointmentStatusType,
  IAnnotation,
  IAppointment,
  IAppointmentParticipant,
  IAppointmentRecurrenceTemplate,
  ICodeableConcept,
  ICodeableReference,
  IIdentifier,
  IPeriod,
  IReference,
  IVirtualServiceDetail,
} from '@fhir-toolkit/r5-types';

/**
 * AppointmentBuilder - Fluent builder for Appointment resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const appointment = new AppointmentBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class AppointmentBuilder extends DomainResourceBuilder<Appointment, IAppointment> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist
   */
  setStatus(status: AppointmentStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set cancellationReason
   * The coded reason for the appointment being cancelled
   */
  setCancellationReason(cancellationReason: ICodeableConcept): this {
    this.data.cancellationReason = cancellationReason;
    return this;
  }

  /**
   * Set appointmentType
   * The style of appointment or patient that has been booked in the slot (not service type)
   */
  setAppointmentType(appointmentType: ICodeableConcept): this {
    this.data.appointmentType = appointmentType;
    return this;
  }

  /**
   * Set priority
   * Used to make informed decisions if needing to re-prioritize
   */
  setPriority(priority: ICodeableConcept): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set description
   * Shown on a subject line in a meeting request, or appointment list
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set previousAppointment
   * The previous appointment in a series
   */
  setPreviousAppointment(previousAppointment: IReference<'Appointment'>): this {
    this.data.previousAppointment = previousAppointment;
    return this;
  }

  /**
   * Set originatingAppointment
   * The originating appointment in a recurring set of appointments
   */
  setOriginatingAppointment(originatingAppointment: IReference<'Appointment'>): this {
    this.data.originatingAppointment = originatingAppointment;
    return this;
  }

  /**
   * Set start
   * When appointment is to take place
   */
  setStart(start: string): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * When appointment is to conclude
   */
  setEnd(end: string): this {
    this.data.end = end;
    return this;
  }

  /**
   * Set minutesDuration
   * Can be less than start/end (e.g. estimate)
   */
  setMinutesDuration(minutesDuration: number): this {
    this.data.minutesDuration = minutesDuration;
    return this;
  }

  /**
   * Set created
   * The date that this appointment was initially created
   */
  setCreated(created: string): this {
    this.data.created = created;
    return this;
  }

  /**
   * Set cancellationDate
   * When the appointment was cancelled
   */
  setCancellationDate(cancellationDate: string): this {
    this.data.cancellationDate = cancellationDate;
    return this;
  }

  /**
   * Set subject
   * The patient or group associated with the appointment
   */
  setSubject(subject: IReference<'Patient' | 'Group'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set recurrenceId
   * The sequence number in the recurrence
   */
  setRecurrenceId(recurrenceId: number): this {
    this.data.recurrenceId = recurrenceId;
    return this;
  }

  /**
   * Set occurrenceChanged
   * Indicates that this appointment varies from a recurrence pattern
   */
  setOccurrenceChanged(occurrenceChanged: boolean): this {
    this.data.occurrenceChanged = occurrenceChanged;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Ids for this item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add class
   * Classification when becoming an encounter
   */
  addClass(_class: ICodeableConcept): this {
    return this.addToArray('class', _class);
  }

  /**
   * Add serviceCategory
   * A broad categorization of the service that is to be performed during this appointment
   */
  addServiceCategory(serviceCategory: ICodeableConcept): this {
    return this.addToArray('serviceCategory', serviceCategory);
  }

  /**
   * Add serviceType
   * The specific service that is to be performed during this appointment
   */
  addServiceType(serviceType: ICodeableReference): this {
    return this.addToArray('serviceType', serviceType);
  }

  /**
   * Add specialty
   * The specialty of a practitioner that would be required to perform the service requested in this appointment
   */
  addSpecialty(specialty: ICodeableConcept): this {
    return this.addToArray('specialty', specialty);
  }

  /**
   * Add reason
   * Reason this appointment is scheduled
   */
  addReason(reason: ICodeableReference): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add replaces
   * Appointment replaced by this Appointment
   */
  addReplaces(replac: IReference<'Appointment'>): this {
    return this.addToArray('replaces', replac);
  }

  /**
   * Add virtualService
   * Connection details of a virtual service (e.g. conference call)
   */
  addVirtualService(virtualService: IVirtualServiceDetail): this {
    return this.addToArray('virtualService', virtualService);
  }

  /**
   * Add supportingInformation
   * Additional information to support the appointment
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add requestedPeriod
   * Potential date/time interval(s) requested to allocate the appointment within
   */
  addRequestedPeriod(requestedPeriod: IPeriod): this {
    return this.addToArray('requestedPeriod', requestedPeriod);
  }

  /**
   * Add slot
   * The slots that this appointment is filling
   */
  addSlot(slot: IReference<'Slot'>): this {
    return this.addToArray('slot', slot);
  }

  /**
   * Add account
   * The set of accounts that may be used for billing for this Appointment
   */
  addAccount(account: IReference<'Account'>): this {
    return this.addToArray('account', account);
  }

  /**
   * Add note
   * Additional comments
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add patientInstruction
   * Detailed information and instructions for the patient
   */
  addPatientInstruction(patientInstruction: ICodeableReference): this {
    return this.addToArray('patientInstruction', patientInstruction);
  }

  /**
   * Add basedOn
   * The request this appointment is allocated to assess
   */
  addBasedOn(basedOn: IReference<'CarePlan' | 'DeviceRequest' | 'MedicationRequest' | 'ServiceRequest'>): this {
    return this.addToArray('basedOn', basedOn);
  }

  /**
   * Add participant
   * Participants involved in appointment
   */
  addParticipant(participant: IAppointmentParticipant): this {
    return this.addToArray('participant', participant);
  }

  /**
   * Add recurrenceTemplate
   * Details of the recurrence pattern/template used to generate occurrences
   */
  addRecurrenceTemplate(recurrenceTemplate: IAppointmentRecurrenceTemplate): this {
    return this.addToArray('recurrenceTemplate', recurrenceTemplate);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Appointment instance
   */
  build(): Appointment {
    return new Appointment(this.data);
  }

  /**
   * Build and validate the Appointment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Appointment> {
    const appointment = this.build();
    await appointment.validateOrThrow();
    return appointment;
  }
}
