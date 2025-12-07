import { ElementBuilder } from '../base/ElementBuilder.js';
import { MonetaryComponent } from '../../models/datatypes/MonetaryComponent.js';
import type {
  ICodeableConcept,
  IMonetaryComponent,
  IMoney,
  PriceComponentTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * MonetaryComponentBuilder - Fluent builder for MonetaryComponent datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const monetaryComponent = new MonetaryComponentBuilder()
 *   .setType(value)
 *   .build();
 */
export class MonetaryComponentBuilder extends ElementBuilder<MonetaryComponent, IMonetaryComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * base | surcharge | deduction | discount | tax | informational
   */
  setType(type: PriceComponentTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set code
   * Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set factor
   * Factor used for calculating this component
   */
  setFactor(factor: number): this {
    this.data.factor = factor;
    return this;
  }

  /**
   * Set amount
   * Explicit value amount to be used
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MonetaryComponent instance
   */
  build(): MonetaryComponent {
    return new MonetaryComponent(this.data);
  }

  /**
   * Build and validate the MonetaryComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MonetaryComponent> {
    const monetaryComponent = this.build();
    await monetaryComponent.validateOrThrow();
    return monetaryComponent;
  }
}
