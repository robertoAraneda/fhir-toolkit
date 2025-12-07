import { ElementBuilder } from '../base/ElementBuilder.js';
import { Duration } from '../../models/datatypes/Duration.js';
import type {
  IDuration,
  QuantityComparatorType,
} from '@fhir-toolkit/r4b-types';

/**
 * DurationBuilder - Fluent builder for Duration datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const duration = new DurationBuilder()
 *   .setValue(value)
 *   .build();
 */
export class DurationBuilder extends ElementBuilder<Duration, IDuration> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set value
   * Numerical value (with implicit precision)
   */
  setValue(value: number): this {
    this.data.value = value;
    return this;
  }

  /**
   * Set comparator
   * < | <= | >= | > - how to understand the value
   */
  setComparator(comparator: QuantityComparatorType): this {
    this.data.comparator = comparator;
    return this;
  }

  /**
   * Set unit
   * Unit representation
   */
  setUnit(unit: string): this {
    this.data.unit = unit;
    return this;
  }

  /**
   * Set system
   * System that defines coded unit form
   */
  setSystem(system: string): this {
    this.data.system = system;
    return this;
  }

  /**
   * Set code
   * Coded form of the unit
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Duration instance
   */
  build(): Duration {
    return new Duration(this.data);
  }

  /**
   * Build and validate the Duration instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Duration> {
    const duration = this.build();
    await duration.validateOrThrow();
    return duration;
  }
}
