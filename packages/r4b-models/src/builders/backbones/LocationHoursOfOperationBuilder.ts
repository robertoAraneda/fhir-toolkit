import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { LocationHoursOfOperation } from '../../models/backbones/LocationHoursOfOperation.js';
import type {
  DaysOfWeekType,
  ILocationHoursOfOperation,
} from '@fhir-toolkit/r4b-types';

/**
 * LocationHoursOfOperationBuilder - Fluent builder for LocationHoursOfOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const locationHoursOfOperation = new LocationHoursOfOperationBuilder()
 *   .setAllDay(value)
 *   .addDaysOfWeek({ ... })
 *   .build();
 */
export class LocationHoursOfOperationBuilder extends BackboneElementBuilder<LocationHoursOfOperation, ILocationHoursOfOperation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set allDay
   * The Location is open all day
   */
  setAllDay(allDay: boolean): this {
    this.data.allDay = allDay;
    return this;
  }

  /**
   * Set openingTime
   * Time that the Location opens
   */
  setOpeningTime(openingTime: string): this {
    this.data.openingTime = openingTime;
    return this;
  }

  /**
   * Set closingTime
   * Time that the Location closes
   */
  setClosingTime(closingTime: string): this {
    this.data.closingTime = closingTime;
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
   * Build the LocationHoursOfOperation instance
   */
  build(): LocationHoursOfOperation {
    return new LocationHoursOfOperation(this.data);
  }

  /**
   * Build and validate the LocationHoursOfOperation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<LocationHoursOfOperation> {
    const locationHoursOfOperation = this.build();
    await locationHoursOfOperation.validateOrThrow();
    return locationHoursOfOperation;
  }
}
