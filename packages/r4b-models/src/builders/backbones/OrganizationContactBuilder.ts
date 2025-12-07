import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { OrganizationContact } from '../../models/backbones/OrganizationContact.js';
import type {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IOrganizationContact,
} from '@fhir-toolkit/r4b-types';

/**
 * OrganizationContactBuilder - Fluent builder for OrganizationContact backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const organizationContact = new OrganizationContactBuilder()
 *   .setPurpose(value)
 *   .addTelecom({ ... })
 *   .build();
 */
export class OrganizationContactBuilder extends BackboneElementBuilder<OrganizationContact, IOrganizationContact> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set purpose
   * The type of contact
   */
  setPurpose(purpose: ICodeableConcept): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set name
   * A name associated with the contact
   */
  setName(name: IHumanName): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set address
   * Visiting or postal addresses for the contact
   */
  setAddress(address: IAddress): this {
    this.data.address = address;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add telecom
   * Contact details (telephone, email, etc.)  for a contact
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OrganizationContact instance
   */
  build(): OrganizationContact {
    return new OrganizationContact(this.data);
  }

  /**
   * Build and validate the OrganizationContact instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OrganizationContact> {
    const organizationContact = this.build();
    await organizationContact.validateOrThrow();
    return organizationContact;
  }
}
