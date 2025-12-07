import { ElementBuilder } from '../base/ElementBuilder.js';
import { ContactDetail } from '../../models/datatypes/ContactDetail.js';
import type {
  IContactDetail,
  IContactPoint,
} from '@fhir-toolkit/r5-types';

/**
 * ContactDetailBuilder - Fluent builder for ContactDetail datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const contactDetail = new ContactDetailBuilder()
 *   .setName(value)
 *   .addTelecom({ ... })
 *   .build();
 */
export class ContactDetailBuilder extends ElementBuilder<ContactDetail, IContactDetail> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name of an individual to contact
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add telecom
   * Contact details for individual or organization
   */
  addTelecom(telecom: IContactPoint): this {
    return this.addToArray('telecom', telecom);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContactDetail instance
   */
  build(): ContactDetail {
    return new ContactDetail(this.data);
  }

  /**
   * Build and validate the ContactDetail instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContactDetail> {
    const contactDetail = this.build();
    await contactDetail.validateOrThrow();
    return contactDetail;
  }
}
