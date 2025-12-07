import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InsurancePlanContact } from '../../models/backbones/InsurancePlanContact.js';
import type {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IInsurancePlanContact,
} from '@fhir-toolkit/r4b-types';

/**
 * InsurancePlanContactBuilder - Fluent builder for InsurancePlanContact backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const insurancePlanContact = new InsurancePlanContactBuilder()
 *   .setPurpose(value)
 *   .addTelecom({ ... })
 *   .build();
 */
export class InsurancePlanContactBuilder extends BackboneElementBuilder<InsurancePlanContact, IInsurancePlanContact> {
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
   * Build the InsurancePlanContact instance
   */
  build(): InsurancePlanContact {
    return new InsurancePlanContact(this.data);
  }

  /**
   * Build and validate the InsurancePlanContact instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InsurancePlanContact> {
    const insurancePlanContact = this.build();
    await insurancePlanContact.validateOrThrow();
    return insurancePlanContact;
  }
}
