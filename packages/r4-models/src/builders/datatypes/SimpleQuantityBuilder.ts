import { ElementBuilder } from '../base/ElementBuilder.js';
import { SimpleQuantity } from '../../models/datatypes/SimpleQuantity.js';
import type {
  IExtension,
  ISimpleQuantity,
  QuantityComparatorType,
} from '@fhir-toolkit/r4-types';

/**
 * SimpleQuantityBuilder - Fluent builder for SimpleQuantity datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const simpleQuantity = new SimpleQuantityBuilder()
 *   .setId(value)
 *   .addExtension({ ... })
 *   .build();
 */
export class SimpleQuantityBuilder extends ElementBuilder<SimpleQuantity, ISimpleQuantity> {
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
   * Build the SimpleQuantity instance
   */
  build(): SimpleQuantity {
    return new SimpleQuantity(this.data);
  }

  /**
   * Build and validate the SimpleQuantity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SimpleQuantity> {
    const simpleQuantity = this.build();
    await simpleQuantity.validateOrThrow();
    return simpleQuantity;
  }
}
