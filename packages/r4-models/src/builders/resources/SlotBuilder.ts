import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Slot } from '../../models/resources/Slot.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IReference,
  ISlot,
  SlotStatusType,
} from '@fhir-toolkit/r4-types';

/**
 * SlotBuilder - Fluent builder for Slot resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const slot = new SlotBuilder()
 *   .setId('123')
 *   .setAppointmentType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class SlotBuilder extends DomainResourceBuilder<Slot, ISlot> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set appointmentType
   * The style of appointment or patient that may be booked in the slot (not service type)
   */
  setAppointmentType(appointmentType: ICodeableConcept): this {
    this.data.appointmentType = appointmentType;
    return this;
  }

  /**
   * Set schedule
   * The schedule resource that this slot defines an interval of status information
   */
  setSchedule(schedule: IReference<'Schedule'>): this {
    this.data.schedule = schedule;
    return this;
  }

  /**
   * Set status
   * busy | free | busy-unavailable | busy-tentative | entered-in-error
   */
  setStatus(status: SlotStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set start
   * Date/Time that the slot is to begin
   */
  setStart(start: string): this {
    this.data.start = start;
    return this;
  }

  /**
   * Set end
   * Date/Time that the slot is to conclude
   */
  setEnd(end: string): this {
    this.data.end = end;
    return this;
  }

  /**
   * Set overbooked
   * This slot has already been overbooked, appointments are unlikely to be accepted for this time
   */
  setOverbooked(overbooked: boolean): this {
    this.data.overbooked = overbooked;
    return this;
  }

  /**
   * Set comment
   * Comments on the slot to describe any extended information. Such as custom constraints on the slot
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
   * Add serviceCategory
   * A broad categorization of the service that is to be performed during this appointment
   */
  addServiceCategory(serviceCategory: ICodeableConcept): this {
    return this.addToArray('serviceCategory', serviceCategory);
  }

  /**
   * Add serviceType
   * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource
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

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Slot instance
   */
  build(): Slot {
    return new Slot(this.data);
  }

  /**
   * Build and validate the Slot instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Slot> {
    const slot = this.build();
    await slot.validateOrThrow();
    return slot;
  }
}
