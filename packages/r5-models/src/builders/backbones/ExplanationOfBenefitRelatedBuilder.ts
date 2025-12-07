import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitRelated } from '../../models/backbones/ExplanationOfBenefitRelated.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitRelated,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitRelatedBuilder - Fluent builder for ExplanationOfBenefitRelated backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitRelated = new ExplanationOfBenefitRelatedBuilder()
 *   .setClaim(value)
 *   .build();
 */
export class ExplanationOfBenefitRelatedBuilder extends BackboneElementBuilder<ExplanationOfBenefitRelated, IExplanationOfBenefitRelated> {
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
   * Build the ExplanationOfBenefitRelated instance
   */
  build(): ExplanationOfBenefitRelated {
    return new ExplanationOfBenefitRelated(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitRelated instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitRelated> {
    const explanationOfBenefitRelated = this.build();
    await explanationOfBenefitRelated.validateOrThrow();
    return explanationOfBenefitRelated;
  }
}
