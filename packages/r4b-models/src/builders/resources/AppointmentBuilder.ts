import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Appointment } from '../../models/resources/Appointment.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  AppointmentStatusType,
  IAppointment,
  IAppointmentParticipant,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

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
   * Set cancelationReason
   * The coded reason for the appointment being cancelled
   */
  setCancelationReason(cancelationReason: ICodeableConcept): this {
    this.data.cancelationReason = cancelationReason;
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
  setPriority(priority: number): this {
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
   * Set comment
   * Additional comments
   */
  setComment(comment: string): this {
    this.data.comment = comment;
    return this;
  }

  /**
   * Set patientInstruction
   * Detailed information and instructions for the patient
   */
  setPatientInstruction(patientInstruction: string): this {
    this.data.patientInstruction = patientInstruction;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set reason choice type
   * @param type - 'Code' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setReason('Code', value)
   */
  setReason<T extends 'Code' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `reason${type}` as keyof IAppointment;
    const otherKeys: (keyof IAppointment)[] = [];
    if (type !== 'Code') {
      otherKeys.push('reasonCode' as keyof IAppointment);
      otherKeys.push('_reasonCode' as keyof IAppointment);
    }
    if (type !== 'Reference') {
      otherKeys.push('reasonReference' as keyof IAppointment);
      otherKeys.push('_reasonReference' as keyof IAppointment);
    }
    return this.setChoiceType(key, value, otherKeys);
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
  addServiceType(serviceType: ICodeableConcept): this {
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
   * Add supportingInformation
   * Additional information to support the appointment
   */
  addSupportingInformation(supportingInformation: IReference<'Resource'>): this {
    return this.addToArray('supportingInformation', supportingInformation);
  }

  /**
   * Add slot
   * The slots that this appointment is filling
   */
  addSlot(slot: IReference<'Slot'>): this {
    return this.addToArray('slot', slot);
  }

  /**
   * Add basedOn
   * The service request this appointment is allocated to assess
   */
  addBasedOn(basedOn: IReference<'ServiceRequest'>): this {
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
   * Add requestedPeriod
   * Potential date/time interval(s) requested to allocate the appointment within
   */
  addRequestedPeriod(requestedPeriod: IPeriod): this {
    return this.addToArray('requestedPeriod', requestedPeriod);
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
