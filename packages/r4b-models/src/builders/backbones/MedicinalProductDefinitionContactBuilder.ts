import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionContact } from '../../models/backbones/MedicinalProductDefinitionContact.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionContact,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicinalProductDefinitionContactBuilder - Fluent builder for MedicinalProductDefinitionContact backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionContact = new MedicinalProductDefinitionContactBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicinalProductDefinitionContactBuilder extends BackboneElementBuilder<MedicinalProductDefinitionContact, IMedicinalProductDefinitionContact> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set contact
   * A product specific contact, person (in a role), or an organization
   */
  setContact(contact: IReference<'Organization' | 'PractitionerRole'>): this {
    this.data.contact = contact;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductDefinitionContact instance
   */
  build(): MedicinalProductDefinitionContact {
    return new MedicinalProductDefinitionContact(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionContact instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionContact> {
    const medicinalProductDefinitionContact = this.build();
    await medicinalProductDefinitionContact.validateOrThrow();
    return medicinalProductDefinitionContact;
  }
}
