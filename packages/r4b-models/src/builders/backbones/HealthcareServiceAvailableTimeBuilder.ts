import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { HealthcareServiceAvailableTime } from '../../models/backbones/HealthcareServiceAvailableTime.js';
import type {
  DaysOfWeekType,
  IHealthcareServiceAvailableTime,
} from '@fhir-toolkit/r4b-types';

/**
 * HealthcareServiceAvailableTimeBuilder - Fluent builder for HealthcareServiceAvailableTime backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const healthcareServiceAvailableTime = new HealthcareServiceAvailableTimeBuilder()
 *   .setAllDay(value)
 *   .addDaysOfWeek({ ... })
 *   .build();
 */
export class HealthcareServiceAvailableTimeBuilder extends BackboneElementBuilder<HealthcareServiceAvailableTime, IHealthcareServiceAvailableTime> {
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
   * Build the HealthcareServiceAvailableTime instance
   */
  build(): HealthcareServiceAvailableTime {
    return new HealthcareServiceAvailableTime(this.data);
  }

  /**
   * Build and validate the HealthcareServiceAvailableTime instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<HealthcareServiceAvailableTime> {
    const healthcareServiceAvailableTime = this.build();
    await healthcareServiceAvailableTime.validateOrThrow();
    return healthcareServiceAvailableTime;
  }
}
