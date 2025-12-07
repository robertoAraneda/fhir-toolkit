import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { AppointmentResponse } from '../../models/resources/AppointmentResponse.js';
import type {
  IAppointmentResponse,
  ICodeableConcept,
  IIdentifier,
  IReference,
  ParticipationStatusType,
} from '@fhir-toolkit/r4-types';

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
   * Person, Location, HealthcareService, or Device
   */
  setActor(actor: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>): this {
    this.data.actor = actor;
    return this;
  }

  /**
   * Set participantStatus
   * accepted | declined | tentative | needs-action
   */
  setParticipantStatus(participantStatus: ParticipationStatusType): this {
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
