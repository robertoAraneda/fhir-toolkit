import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InventoryItemAssociation } from '../../models/backbones/InventoryItemAssociation.js';
import type {
  ICodeableConcept,
  IInventoryItemAssociation,
  IRatio,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryItemAssociationBuilder - Fluent builder for InventoryItemAssociation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryItemAssociation = new InventoryItemAssociationBuilder()
 *   .setAssociationType(value)
 *   .build();
 */
export class InventoryItemAssociationBuilder extends BackboneElementBuilder<InventoryItemAssociation, IInventoryItemAssociation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set associationType
   * The type of association between the device and the other item
   */
  setAssociationType(associationType: ICodeableConcept): this {
    this.data.associationType = associationType;
    return this;
  }

  /**
   * Set relatedItem
   * The related item or product
   */
  setRelatedItem(relatedItem: IReference<'InventoryItem' | 'Medication' | 'MedicationKnowledge' | 'Device' | 'DeviceDefinition' | 'NutritionProduct' | 'BiologicallyDerivedProduct'>): this {
    this.data.relatedItem = relatedItem;
    return this;
  }

  /**
   * Set quantity
   * The quantity of the product in this product
   */
  setQuantity(quantity: IRatio): this {
    this.data.quantity = quantity;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryItemAssociation instance
   */
  build(): InventoryItemAssociation {
    return new InventoryItemAssociation(this.data);
  }

  /**
   * Build and validate the InventoryItemAssociation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryItemAssociation> {
    const inventoryItemAssociation = this.build();
    await inventoryItemAssociation.validateOrThrow();
    return inventoryItemAssociation;
  }
}
