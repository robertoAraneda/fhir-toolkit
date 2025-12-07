import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SupplyDeliverySuppliedItem } from '../../models/backbones/SupplyDeliverySuppliedItem.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IQuantity,
  IReference,
  ISupplyDeliverySuppliedItem,
} from '@fhir-toolkit/r4b-types';

/**
 * SupplyDeliverySuppliedItemBuilder - Fluent builder for SupplyDeliverySuppliedItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const supplyDeliverySuppliedItem = new SupplyDeliverySuppliedItemBuilder()
 *   .setQuantity(value)
 *   .build();
 */
export class SupplyDeliverySuppliedItemBuilder extends BackboneElementBuilder<SupplyDeliverySuppliedItem, ISupplyDeliverySuppliedItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set quantity
   * Amount dispensed
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set item choice type
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setItem('CodeableConcept', value)
   */
  setItem<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `item${type}` as keyof ISupplyDeliverySuppliedItem;
    const otherKeys: (keyof ISupplyDeliverySuppliedItem)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('itemCodeableConcept' as keyof ISupplyDeliverySuppliedItem);
      otherKeys.push('_itemCodeableConcept' as keyof ISupplyDeliverySuppliedItem);
    }
    if (type !== 'Reference') {
      otherKeys.push('itemReference' as keyof ISupplyDeliverySuppliedItem);
      otherKeys.push('_itemReference' as keyof ISupplyDeliverySuppliedItem);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SupplyDeliverySuppliedItem instance
   */
  build(): SupplyDeliverySuppliedItem {
    return new SupplyDeliverySuppliedItem(this.data);
  }

  /**
   * Build and validate the SupplyDeliverySuppliedItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SupplyDeliverySuppliedItem> {
    const supplyDeliverySuppliedItem = this.build();
    await supplyDeliverySuppliedItem.validateOrThrow();
    return supplyDeliverySuppliedItem;
  }
}
