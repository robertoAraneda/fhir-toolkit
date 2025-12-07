import { ElementBuilder } from '../base/ElementBuilder.js';
import { Availability } from '../../models/datatypes/Availability.js';
import type {
  IAvailability,
  IAvailabilityAvailableTime,
  IAvailabilityNotAvailableTime,
} from '@fhir-toolkit/r5-types';

/**
 * AvailabilityBuilder - Fluent builder for Availability datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const availability = new AvailabilityBuilder()
 *   .addAvailableTime({ ... })
 *   .build();
 */
export class AvailabilityBuilder extends ElementBuilder<Availability, IAvailability> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add availableTime
   * Times the {item} is available
   */
  addAvailableTime(availableTime: IAvailabilityAvailableTime): this {
    return this.addToArray('availableTime', availableTime);
  }

  /**
   * Add notAvailableTime
   * Not available during this time due to provided reason
   */
  addNotAvailableTime(notAvailableTime: IAvailabilityNotAvailableTime): this {
    return this.addToArray('notAvailableTime', notAvailableTime);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Availability instance
   */
  build(): Availability {
    return new Availability(this.data);
  }

  /**
   * Build and validate the Availability instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Availability> {
    const availability = this.build();
    await availability.validateOrThrow();
    return availability;
  }
}
