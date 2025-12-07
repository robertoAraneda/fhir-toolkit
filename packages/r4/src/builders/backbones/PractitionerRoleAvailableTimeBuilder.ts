import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PractitionerRoleAvailableTime } from '../../models/backbones/PractitionerRoleAvailableTime.js';
import type {
  DaysOfWeekType,
  IPractitionerRoleAvailableTime,
} from '@fhir-toolkit/r4-types';

/**
 * PractitionerRoleAvailableTimeBuilder - Fluent builder for PractitionerRoleAvailableTime backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const practitionerRoleAvailableTime = new PractitionerRoleAvailableTimeBuilder()
 *   .setAllDay(value)
 *   .addDaysOfWeek({ ... })
 *   .build();
 */
export class PractitionerRoleAvailableTimeBuilder extends BackboneElementBuilder<PractitionerRoleAvailableTime, IPractitionerRoleAvailableTime> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set allDay
   * Always available? e.g. 24 hour service
   */
  setAllDay(allDay: boolean): this {
    this.data.allDay = allDay;
    return this;
  }

  /**
   * Set availableStartTime
   * Opening time of day (ignored if allDay = true)
   */
  setAvailableStartTime(availableStartTime: string): this {
    this.data.availableStartTime = availableStartTime;
    return this;
  }

  /**
   * Set availableEndTime
   * Closing time of day (ignored if allDay = true)
   */
  setAvailableEndTime(availableEndTime: string): this {
    this.data.availableEndTime = availableEndTime;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add daysOfWeek
   * mon | tue | wed | thu | fri | sat | sun
   */
  addDaysOfWeek(daysOfWeek: DaysOfWeekType): this {
    return this.addToArray('daysOfWeek', daysOfWeek);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PractitionerRoleAvailableTime instance
   */
  build(): PractitionerRoleAvailableTime {
    return new PractitionerRoleAvailableTime(this.data);
  }

  /**
   * Build and validate the PractitionerRoleAvailableTime instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PractitionerRoleAvailableTime> {
    const practitionerRoleAvailableTime = this.build();
    await practitionerRoleAvailableTime.validateOrThrow();
    return practitionerRoleAvailableTime;
  }
}
