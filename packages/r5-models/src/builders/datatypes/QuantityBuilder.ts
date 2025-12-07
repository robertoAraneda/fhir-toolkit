import { ElementBuilder } from '../base/ElementBuilder.js';
import { Quantity } from '../../models/datatypes/Quantity.js';
import type {
  IQuantity,
  QuantityComparatorType,
} from '@fhir-toolkit/r5-types';

/**
 * QuantityBuilder - Fluent builder for Quantity datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const quantity = new QuantityBuilder()
 *   .setValue(value)
 *   .build();
 */
export class QuantityBuilder extends ElementBuilder<Quantity, IQuantity> {
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
   * Build the Quantity instance
   */
  build(): Quantity {
    return new Quantity(this.data);
  }

  /**
   * Build and validate the Quantity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Quantity> {
    const quantity = this.build();
    await quantity.validateOrThrow();
    return quantity;
  }
}
