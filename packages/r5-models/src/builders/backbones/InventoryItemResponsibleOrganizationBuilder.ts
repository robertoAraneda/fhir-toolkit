import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InventoryItemResponsibleOrganization } from '../../models/backbones/InventoryItemResponsibleOrganization.js';
import type {
  ICodeableConcept,
  IInventoryItemResponsibleOrganization,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * InventoryItemResponsibleOrganizationBuilder - Fluent builder for InventoryItemResponsibleOrganization backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const inventoryItemResponsibleOrganization = new InventoryItemResponsibleOrganizationBuilder()
 *   .setRole(value)
 *   .build();
 */
export class InventoryItemResponsibleOrganizationBuilder extends BackboneElementBuilder<InventoryItemResponsibleOrganization, IInventoryItemResponsibleOrganization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * The role of the organization e.g. manufacturer, distributor, or other
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set organization
   * An organization that is associated with the item
   */
  setOrganization(organization: IReference<'Organization'>): this {
    this.data.organization = organization;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InventoryItemResponsibleOrganization instance
   */
  build(): InventoryItemResponsibleOrganization {
    return new InventoryItemResponsibleOrganization(this.data);
  }

  /**
   * Build and validate the InventoryItemResponsibleOrganization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InventoryItemResponsibleOrganization> {
    const inventoryItemResponsibleOrganization = this.build();
    await inventoryItemResponsibleOrganization.validateOrThrow();
    return inventoryItemResponsibleOrganization;
  }
}
