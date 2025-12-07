import { ElementBuilder } from '../base/ElementBuilder.js';
import { MoneyQuantity } from '../../models/datatypes/MoneyQuantity.js';
import type {
  IExtension,
  IMoneyQuantity,
  QuantityComparatorType,
} from '@fhir-toolkit/r4b-types';

/**
 * MoneyQuantityBuilder - Fluent builder for MoneyQuantity datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const moneyQuantity = new MoneyQuantityBuilder()
 *   .setId(value)
 *   .addExtension({ ... })
 *   .build();
 */
export class MoneyQuantityBuilder extends ElementBuilder<MoneyQuantity, IMoneyQuantity> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set id
   * Unique id for inter-element referencing
   */
  setId(id: string): this {
    this.data.id = id;
    return this;
  }

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
  // Array Properties
  // ============================================================================

  /**
   * Add extension
   * Additional content defined by implementations
   */
  addExtension(extension: IExtension): this {
    return this.addToArray('extension', extension);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MoneyQuantity instance
   */
  build(): MoneyQuantity {
    return new MoneyQuantity(this.data);
  }

  /**
   * Build and validate the MoneyQuantity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MoneyQuantity> {
    const moneyQuantity = this.build();
    await moneyQuantity.validateOrThrow();
    return moneyQuantity;
  }
}
