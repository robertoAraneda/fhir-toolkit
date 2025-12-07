import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AvailabilityAvailableTime } from '../../models/backbones/AvailabilityAvailableTime.js';
import type {
  DaysOfWeekType,
  IAvailabilityAvailableTime,
} from '@fhir-toolkit/r5-types';

/**
 * AvailabilityAvailableTimeBuilder - Fluent builder for AvailabilityAvailableTime backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const availabilityAvailableTime = new AvailabilityAvailableTimeBuilder()
 *   .setAllDay(value)
 *   .addDaysOfWeek({ ... })
 *   .build();
 */
export class AvailabilityAvailableTimeBuilder extends BackboneElementBuilder<AvailabilityAvailableTime, IAvailabilityAvailableTime> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set allDay
   * Always available? i.e. 24 hour service
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
   * Build the AvailabilityAvailableTime instance
   */
  build(): AvailabilityAvailableTime {
    return new AvailabilityAvailableTime(this.data);
  }

  /**
   * Build and validate the AvailabilityAvailableTime instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AvailabilityAvailableTime> {
    const availabilityAvailableTime = this.build();
    await availabilityAvailableTime.validateOrThrow();
    return availabilityAvailableTime;
  }
}
