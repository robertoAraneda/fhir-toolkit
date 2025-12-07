import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermOfferParty } from '../../models/backbones/ContractTermOfferParty.js';
import type {
  ICodeableConcept,
  IContractTermOfferParty,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ContractTermOfferPartyBuilder - Fluent builder for ContractTermOfferParty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermOfferParty = new ContractTermOfferPartyBuilder()
 *   .setRole(value)
 *   .addReference({ ... })
 *   .build();
 */
export class ContractTermOfferPartyBuilder extends BackboneElementBuilder<ContractTermOfferParty, IContractTermOfferParty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * Participant engagement type
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add reference
   * Referenced entity
   */
  addReference(reference: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>): this {
    return this.addToArray('reference', reference);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermOfferParty instance
   */
  build(): ContractTermOfferParty {
    return new ContractTermOfferParty(this.data);
  }

  /**
   * Build and validate the ContractTermOfferParty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermOfferParty> {
    const contractTermOfferParty = this.build();
    await contractTermOfferParty.validateOrThrow();
    return contractTermOfferParty;
  }
}
