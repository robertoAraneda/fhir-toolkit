import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AppointmentParticipant } from '../../models/backbones/AppointmentParticipant.js';
import type {
  IAppointmentParticipant,
  ICodeableConcept,
  IPeriod,
  IReference,
  ParticipantRequiredType,
  ParticipationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * AppointmentParticipantBuilder - Fluent builder for AppointmentParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const appointmentParticipant = new AppointmentParticipantBuilder()
 *   .setActor(value)
 *   .addType({ ... })
 *   .build();
 */
export class AppointmentParticipantBuilder extends BackboneElementBuilder<AppointmentParticipant, IAppointmentParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set actor
   * Person, Location/HealthcareService or Device
   */
  setActor(actor: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'HealthcareService' | 'Location'>): this {
    this.data.actor = actor;
    return this;
  }

  /**
   * Set required
   * required | optional | information-only
   */
  setRequired(required: ParticipantRequiredType): this {
    this.data.required = required;
    return this;
  }

  /**
   * Set status
   * accepted | declined | tentative | needs-action
   */
  setStatus(status: ParticipationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set period
   * Participation period of the actor
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Role of participant in the appointment
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AppointmentParticipant instance
   */
  build(): AppointmentParticipant {
    return new AppointmentParticipant(this.data);
  }

  /**
   * Build and validate the AppointmentParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AppointmentParticipant> {
    const appointmentParticipant = this.build();
    await appointmentParticipant.validateOrThrow();
    return appointmentParticipant;
  }
}
