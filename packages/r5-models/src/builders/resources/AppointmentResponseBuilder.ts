import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { AppointmentResponse } from '../../models/resources/AppointmentResponse.js';
import type {
  AppointmentResponseStatusType,
  IAppointmentResponse,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AppointmentResponseBuilder - Fluent builder for AppointmentResponse resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const appointmentResponse = new AppointmentResponseBuilder()
 *   .setId('123')
 *   .setAppointment(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class AppointmentResponseBuilder extends DomainResourceBuilder<AppointmentResponse, IAppointmentResponse> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set appointment
   * Appointment this response relates to
   */
  setAppointment(appointment: IReference<'Appointment'>): this {
    this.data.appointment = appointment;
    return this;
  }

  /**
   * Set proposedNewTime
   * Indicator for a counter proposal
   */
  setProposedNewTime(proposedNewTime: boolean): this {
    this.data.proposedNewTime = proposedNewTime;
    return this;
  }

  /**
   * Set start
   * Time from appointment, or requested new start time
   */
  setStart(start: string): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * Time from appointment, or requested new end time
   */
  setEnd(end: string): this {
    this.data.end = end;
    return this;
  }

  /**
   * Set actor
   * Person(s), Location, HealthcareService, or Device
   */
  setActor(actor: IReference<'Patient' | 'Group' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>): this {
    this.data.actor = actor;
    return this;
  }

  /**
   * Set participantStatus
   * accepted | declined | tentative | needs-action | entered-in-error
   */
  setParticipantStatus(participantStatus: AppointmentResponseStatusType): this {
    this.data.participantStatus = participantStatus;
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
   * Set recurring
   * This response is for all occurrences in a recurring request
   */
  setRecurring(recurring: boolean): this {
    this.data.recurring = recurring;
    return this;
  }

  /**
   * Set occurrenceDate
   * Original date within a recurring request
   */
  setOccurrenceDate(occurrenceDate: string): this {
    this.data.occurrenceDate = occurrenceDate;
    return this;
  }

  /**
   * Set recurrenceId
   * The recurrence ID of the specific recurring request
   */
  setRecurrenceId(recurrenceId: number): this {
    this.data.recurrenceId = recurrenceId;
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
   * Add participantType
   * Role of participant in the appointment
   */
  addParticipantType(participantType: ICodeableConcept): this {
    return this.addToArray('participantType', participantType);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AppointmentResponse instance
   */
  build(): AppointmentResponse {
    return new AppointmentResponse(this.data);
  }

  /**
   * Build and validate the AppointmentResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AppointmentResponse> {
    const appointmentResponse = this.build();
    await appointmentResponse.validateOrThrow();
    return appointmentResponse;
  }
}
