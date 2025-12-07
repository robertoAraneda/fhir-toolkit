import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InventoryItemName } from '../../models/backbones/InventoryItemName.js';
import type {
  CommonLanguagesType,
  ICoding,
  IInventoryItemName,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryItemNameBuilder - Fluent builder for InventoryItemName backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryItemName = new InventoryItemNameBuilder()
 *   .setNameType(value)
 *   .build();
 */
export class InventoryItemNameBuilder extends BackboneElementBuilder<InventoryItemName, IInventoryItemName> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set nameType
   * The type of name e.g. 'brand-name', 'functional-name', 'common-name'
   */
  setNameType(nameType: ICoding): this {
    this.data.nameType = nameType;
    return this;
  }

  /**
   * Set language
   * The language used to express the item name
   */
  setLanguage(language: CommonLanguagesType): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set name
   * The name or designation of the item
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryItemName instance
   */
  build(): InventoryItemName {
    return new InventoryItemName(this.data);
  }

  /**
   * Build and validate the InventoryItemName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryItemName> {
    const inventoryItemName = this.build();
    await inventoryItemName.validateOrThrow();
    return inventoryItemName;
  }
}
