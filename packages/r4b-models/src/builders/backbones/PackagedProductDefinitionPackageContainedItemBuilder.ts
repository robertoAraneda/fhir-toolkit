import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PackagedProductDefinitionPackageContainedItem } from '../../models/backbones/PackagedProductDefinitionPackageContainedItem.js';
import type {
  ICodeableReference,
  IPackagedProductDefinitionPackageContainedItem,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * PackagedProductDefinitionPackageContainedItemBuilder - Fluent builder for PackagedProductDefinitionPackageContainedItem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinitionPackageContainedItem = new PackagedProductDefinitionPackageContainedItemBuilder()
 *   .setItem(value)
 *   .build();
 */
export class PackagedProductDefinitionPackageContainedItemBuilder extends BackboneElementBuilder<PackagedProductDefinitionPackageContainedItem, IPackagedProductDefinitionPackageContainedItem> {
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
   * The number of this type of item within this packaging
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinitionPackageContainedItem instance
   */
  build(): PackagedProductDefinitionPackageContainedItem {
    return new PackagedProductDefinitionPackageContainedItem(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinitionPackageContainedItem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinitionPackageContainedItem> {
    const packagedProductDefinitionPackageContainedItem = this.build();
    await packagedProductDefinitionPackageContainedItem.validateOrThrow();
    return packagedProductDefinitionPackageContainedItem;
  }
}
