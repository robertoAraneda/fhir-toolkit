import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AvailabilityNotAvailableTime } from '../../models/backbones/AvailabilityNotAvailableTime.js';
import type {
  IAvailabilityNotAvailableTime,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/**
 * AvailabilityNotAvailableTimeBuilder - Fluent builder for AvailabilityNotAvailableTime backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const availabilityNotAvailableTime = new AvailabilityNotAvailableTimeBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class AvailabilityNotAvailableTimeBuilder extends BackboneElementBuilder<AvailabilityNotAvailableTime, IAvailabilityNotAvailableTime> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Reason presented to the user explaining why time not available
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set during
   * Service not available during this period
   */
  setDuring(during: IPeriod): this {
    this.data.during = during;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AvailabilityNotAvailableTime instance
   */
  build(): AvailabilityNotAvailableTime {
    return new AvailabilityNotAvailableTime(this.data);
  }

  /**
   * Build and validate the AvailabilityNotAvailableTime instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AvailabilityNotAvailableTime> {
    const availabilityNotAvailableTime = this.build();
    await availabilityNotAvailableTime.validateOrThrow();
    return availabilityNotAvailableTime;
  }
}
