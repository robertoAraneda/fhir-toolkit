import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InvoiceLineItemPriceComponent } from '../../models/backbones/InvoiceLineItemPriceComponent.js';
import type {
  ICodeableConcept,
  IInvoiceLineItemPriceComponent,
  IMoney,
  InvoicePriceComponentTypeType,
} from '@fhir-toolkit/r4-types';

/**
 * InvoiceLineItemPriceComponentBuilder - Fluent builder for InvoiceLineItemPriceComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const invoiceLineItemPriceComponent = new InvoiceLineItemPriceComponentBuilder()
 *   .setType(value)
 *   .build();
 */
export class InvoiceLineItemPriceComponentBuilder extends BackboneElementBuilder<InvoiceLineItemPriceComponent, IInvoiceLineItemPriceComponent> {
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
   * Build the InvoiceLineItemPriceComponent instance
   */
  build(): InvoiceLineItemPriceComponent {
    return new InvoiceLineItemPriceComponent(this.data);
  }

  /**
   * Build and validate the InvoiceLineItemPriceComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InvoiceLineItemPriceComponent> {
    const invoiceLineItemPriceComponent = this.build();
    await invoiceLineItemPriceComponent.validateOrThrow();
    return invoiceLineItemPriceComponent;
  }
}
