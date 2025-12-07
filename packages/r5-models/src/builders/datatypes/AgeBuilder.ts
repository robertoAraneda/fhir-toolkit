import { ElementBuilder } from '../base/ElementBuilder.js';
import { Age } from '../../models/datatypes/Age.js';
import type {
  IAge,
  QuantityComparatorType,
} from '@fhir-toolkit/r5-types';

/**
 * AgeBuilder - Fluent builder for Age datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const age = new AgeBuilder()
 *   .setValue(value)
 *   .build();
 */
export class AgeBuilder extends ElementBuilder<Age, IAge> {
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
   * < | <= | >= | > | ad - how to understand the value
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
   * Build the Age instance
   */
  build(): Age {
    return new Age(this.data);
  }

  /**
   * Build and validate the Age instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Age> {
    const age = this.build();
    await age.validateOrThrow();
    return age;
  }
}
