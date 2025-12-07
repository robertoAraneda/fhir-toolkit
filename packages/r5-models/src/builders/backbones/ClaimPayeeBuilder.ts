import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimPayee } from '../../models/backbones/ClaimPayee.js';
import type {
  IClaimPayee,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimPayeeBuilder - Fluent builder for ClaimPayee backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimPayee = new ClaimPayeeBuilder()
 *   .setType(value)
 *   .build();
 */
export class ClaimPayeeBuilder extends BackboneElementBuilder<ClaimPayee, IClaimPayee> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Category of recipient
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set party
   * Recipient reference
   */
  setParty(party: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'RelatedPerson'>): this {
    this.data.party = party;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimPayee instance
   */
  build(): ClaimPayee {
    return new ClaimPayee(this.data);
  }

  /**
   * Build and validate the ClaimPayee instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimPayee> {
    const claimPayee = this.build();
    await claimPayee.validateOrThrow();
    return claimPayee;
  }
}
