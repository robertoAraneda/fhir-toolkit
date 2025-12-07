import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InventoryItemDescription } from '../../models/backbones/InventoryItemDescription.js';
import type {
  CommonLanguagesType,
  IInventoryItemDescription,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryItemDescriptionBuilder - Fluent builder for InventoryItemDescription backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryItemDescription = new InventoryItemDescriptionBuilder()
 *   .setLanguage(value)
 *   .build();
 */
export class InventoryItemDescriptionBuilder extends BackboneElementBuilder<InventoryItemDescription, IInventoryItemDescription> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set language
   * The language that is used in the item description
   */
  setLanguage(language: CommonLanguagesType): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set description
   * Textual description of the item
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryItemDescription instance
   */
  build(): InventoryItemDescription {
    return new InventoryItemDescription(this.data);
  }

  /**
   * Build and validate the InventoryItemDescription instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryItemDescription> {
    const inventoryItemDescription = this.build();
    await inventoryItemDescription.validateOrThrow();
    return inventoryItemDescription;
  }
}
