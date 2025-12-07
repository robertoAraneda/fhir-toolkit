import { ElementBuilder } from '../base/ElementBuilder.js';
import { Count } from '../../models/datatypes/Count.js';
import type {
  ICount,
  QuantityComparatorType,
} from '@fhir-toolkit/r4b-types';

/**
 * CountBuilder - Fluent builder for Count datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const count = new CountBuilder()
 *   .setValue(value)
 *   .build();
 */
export class CountBuilder extends ElementBuilder<Count, ICount> {
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
   * Build the Count instance
   */
  build(): Count {
    return new Count(this.data);
  }

  /**
   * Build and validate the Count instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Count> {
    const count = this.build();
    await count.validateOrThrow();
    return count;
  }
}
