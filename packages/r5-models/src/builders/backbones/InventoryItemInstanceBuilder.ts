import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InventoryItemInstance } from '../../models/backbones/InventoryItemInstance.js';
import type {
  IIdentifier,
  IInventoryItemInstance,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryItemInstanceBuilder - Fluent builder for InventoryItemInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryItemInstance = new InventoryItemInstanceBuilder()
 *   .setLotNumber(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class InventoryItemInstanceBuilder extends BackboneElementBuilder<InventoryItemInstance, IInventoryItemInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set lotNumber
   * The lot or batch number of the item
   */
  setLotNumber(lotNumber: string): this {
    this.data.lotNumber = lotNumber;
    return this;
  }

  /**
   * Set expiry
   * The expiry date or date and time for the product
   */
  setExpiry(expiry: string): this {
    this.data.expiry = expiry;
    return this;
  }

  /**
   * Set subject
   * The subject that the item is associated with
   */
  setSubject(subject: IReference<'Patient' | 'Organization'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set location
   * The location that the item is associated with
   */
  setLocation(location: IReference<'Location'>): this {
    this.data.location = location;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * The identifier for the physical instance, typically a serial number
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryItemInstance instance
   */
  build(): InventoryItemInstance {
    return new InventoryItemInstance(this.data);
  }

  /**
   * Build and validate the InventoryItemInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryItemInstance> {
    const inventoryItemInstance = this.build();
    await inventoryItemInstance.validateOrThrow();
    return inventoryItemInstance;
  }
}
