import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { InvoiceParticipant } from '../../models/backbones/InvoiceParticipant.js';
import type {
  ICodeableConcept,
  IInvoiceParticipant,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * InvoiceParticipantBuilder - Fluent builder for InvoiceParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const invoiceParticipant = new InvoiceParticipantBuilder()
 *   .setRole(value)
 *   .build();
 */
export class InvoiceParticipantBuilder extends BackboneElementBuilder<InvoiceParticipant, IInvoiceParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * Type of involvement in creation of this Invoice
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set actor
   * Individual who was involved
   */
  setActor(actor: IReference<'Practitioner' | 'Organization' | 'Patient' | 'PractitionerRole' | 'Device' | 'RelatedPerson'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the InvoiceParticipant instance
   */
  build(): InvoiceParticipant {
    return new InvoiceParticipant(this.data);
  }

  /**
   * Build and validate the InvoiceParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<InvoiceParticipant> {
    const invoiceParticipant = this.build();
    await invoiceParticipant.validateOrThrow();
    return invoiceParticipant;
  }
}
