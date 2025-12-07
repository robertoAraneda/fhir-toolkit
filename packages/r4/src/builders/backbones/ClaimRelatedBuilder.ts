import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimRelated } from '../../models/backbones/ClaimRelated.js';
import type {
  IClaimRelated,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ClaimRelatedBuilder - Fluent builder for ClaimRelated backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimRelated = new ClaimRelatedBuilder()
 *   .setClaim(value)
 *   .build();
 */
export class ClaimRelatedBuilder extends BackboneElementBuilder<ClaimRelated, IClaimRelated> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set claim
   * Reference to the related claim
   */
  setClaim(claim: IReference<'Claim'>): this {
    this.data.claim = claim;
    return this;
  }

  /**
   * Set relationship
   * How the reference claim is related
   */
  setRelationship(relationship: ICodeableConcept): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set reference
   * File or case reference
   */
  setReference(reference: IIdentifier): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimRelated instance
   */
  build(): ClaimRelated {
    return new ClaimRelated(this.data);
  }

  /**
   * Build and validate the ClaimRelated instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimRelated> {
    const claimRelated = this.build();
    await claimRelated.validateOrThrow();
    return claimRelated;
  }
}
