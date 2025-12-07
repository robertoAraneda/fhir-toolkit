import { ElementBuilder } from '../base/ElementBuilder.js';
import { Distance } from '../../models/datatypes/Distance.js';
import type {
  IDistance,
  QuantityComparatorType,
} from '@fhir-toolkit/r4b-types';

/**
 * DistanceBuilder - Fluent builder for Distance datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const distance = new DistanceBuilder()
 *   .setValue(value)
 *   .build();
 */
export class DistanceBuilder extends ElementBuilder<Distance, IDistance> {
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
   * Build the Distance instance
   */
  build(): Distance {
    return new Distance(this.data);
  }

  /**
   * Build and validate the Distance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Distance> {
    const distance = this.build();
    await distance.validateOrThrow();
    return distance;
  }
}
