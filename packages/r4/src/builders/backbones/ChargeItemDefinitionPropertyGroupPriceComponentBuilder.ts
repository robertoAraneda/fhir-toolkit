import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ChargeItemDefinitionPropertyGroupPriceComponent } from '../../models/backbones/ChargeItemDefinitionPropertyGroupPriceComponent.js';
import type {
  IChargeItemDefinitionPropertyGroupPriceComponent,
  ICodeableConcept,
  IMoney,
  InvoicePriceComponentTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * ChargeItemDefinitionPropertyGroupPriceComponentBuilder - Fluent builder for ChargeItemDefinitionPropertyGroupPriceComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const chargeItemDefinitionPropertyGroupPriceComponent = new ChargeItemDefinitionPropertyGroupPriceComponentBuilder()
 *   .setType(value)
 *   .build();
 */
export class ChargeItemDefinitionPropertyGroupPriceComponentBuilder extends BackboneElementBuilder<ChargeItemDefinitionPropertyGroupPriceComponent, IChargeItemDefinitionPropertyGroupPriceComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * base | surcharge | deduction | discount | tax | informational
   */
  setType(type: InvoicePriceComponentTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set code
   * Code identifying the specific component
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
   * Monetary amount associated with this component
   */
  setAmount(amount: IMoney): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ChargeItemDefinitionPropertyGroupPriceComponent instance
   */
  build(): ChargeItemDefinitionPropertyGroupPriceComponent {
    return new ChargeItemDefinitionPropertyGroupPriceComponent(this.data);
  }

  /**
   * Build and validate the ChargeItemDefinitionPropertyGroupPriceComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ChargeItemDefinitionPropertyGroupPriceComponent> {
    const chargeItemDefinitionPropertyGroupPriceComponent = this.build();
    await chargeItemDefinitionPropertyGroupPriceComponent.validateOrThrow();
    return chargeItemDefinitionPropertyGroupPriceComponent;
  }
}
