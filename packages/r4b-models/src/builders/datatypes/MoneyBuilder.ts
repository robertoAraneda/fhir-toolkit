import { ElementBuilder } from '../base/ElementBuilder.js';
import { Money } from '../../models/datatypes/Money.js';
import type {
  IMoney,
} from '@fhir-toolkit/r4b-types';

/**
 * MoneyBuilder - Fluent builder for Money datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const money = new MoneyBuilder()
 *   .setValue(value)
 *   .build();
 */
export class MoneyBuilder extends ElementBuilder<Money, IMoney> {
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
   * Set currency
   * ISO 4217 Currency Code
   */
  setCurrency(currency: string): this {
    this.data.currency = currency;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Money instance
   */
  build(): Money {
    return new Money(this.data);
  }

  /**
   * Build and validate the Money instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Money> {
    const money = this.build();
    await money.validateOrThrow();
    return money;
  }
}
