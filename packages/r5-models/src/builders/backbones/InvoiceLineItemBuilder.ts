import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InvoiceLineItem } from '../../models/backbones/InvoiceLineItem.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IInvoiceLineItem,
  IMonetaryComponent,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * InvoiceLineItemBuilder - Fluent builder for InvoiceLineItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const invoiceLineItem = new InvoiceLineItemBuilder()
 *   .setSequence(value)
 *   .addPriceComponent({ ... })
 *   .build();
 */
export class InvoiceLineItemBuilder extends BackboneElementBuilder<InvoiceLineItem, IInvoiceLineItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Sequence number of line item
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set serviced choice type (servicedDate, servicedPeriod)
   * @param type - 'Date' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setServiced('Date', value)
   */
  setServiced<T extends 'Date' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `serviced${type}` as keyof IInvoiceLineItem;
    const otherKeys: (keyof IInvoiceLineItem)[] = [];
    if (type !== 'Date') {
      otherKeys.push('servicedDate' as keyof IInvoiceLineItem);
      otherKeys.push('_servicedDate' as keyof IInvoiceLineItem);
    }
    if (type !== 'Period') {
      otherKeys.push('servicedPeriod' as keyof IInvoiceLineItem);
      otherKeys.push('_servicedPeriod' as keyof IInvoiceLineItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set chargeItem choice type (chargeItemReference, chargeItemCodeableConcept)
   * @param type - 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setChargeItem('Reference', value)
   */
  setChargeItem<T extends 'Reference' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `chargeItem${type}` as keyof IInvoiceLineItem;
    const otherKeys: (keyof IInvoiceLineItem)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('chargeItemReference' as keyof IInvoiceLineItem);
      otherKeys.push('_chargeItemReference' as keyof IInvoiceLineItem);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('chargeItemCodeableConcept' as keyof IInvoiceLineItem);
      otherKeys.push('_chargeItemCodeableConcept' as keyof IInvoiceLineItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add priceComponent
   * Components of total line item price
   */
  addPriceComponent(priceComponent: IMonetaryComponent): this {
    return this.addToArray('priceComponent', priceComponent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InvoiceLineItem instance
   */
  build(): InvoiceLineItem {
    return new InvoiceLineItem(this.data);
  }

  /**
   * Build and validate the InvoiceLineItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InvoiceLineItem> {
    const invoiceLineItem = this.build();
    await invoiceLineItem.validateOrThrow();
    return invoiceLineItem;
  }
}
