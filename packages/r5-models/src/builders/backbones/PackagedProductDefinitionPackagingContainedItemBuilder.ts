import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PackagedProductDefinitionPackagingContainedItem } from '../../models/backbones/PackagedProductDefinitionPackagingContainedItem.js';
import type {
  ICodeableReference,
  IPackagedProductDefinitionPackagingContainedItem,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * PackagedProductDefinitionPackagingContainedItemBuilder - Fluent builder for PackagedProductDefinitionPackagingContainedItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinitionPackagingContainedItem = new PackagedProductDefinitionPackagingContainedItemBuilder()
 *   .setItem(value)
 *   .build();
 */
export class PackagedProductDefinitionPackagingContainedItemBuilder extends BackboneElementBuilder<PackagedProductDefinitionPackagingContainedItem, IPackagedProductDefinitionPackagingContainedItem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set item
   * The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package
   */
  setItem(item: ICodeableReference): this {
    this.data.item = item;
    return this;
  }

  /**
   * Set amount
   * The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition)
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinitionPackagingContainedItem instance
   */
  build(): PackagedProductDefinitionPackagingContainedItem {
    return new PackagedProductDefinitionPackagingContainedItem(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinitionPackagingContainedItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinitionPackagingContainedItem> {
    const packagedProductDefinitionPackagingContainedItem = this.build();
    await packagedProductDefinitionPackagingContainedItem.validateOrThrow();
    return packagedProductDefinitionPackagingContainedItem;
  }
}
