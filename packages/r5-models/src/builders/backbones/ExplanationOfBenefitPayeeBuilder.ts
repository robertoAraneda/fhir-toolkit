import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitPayee } from '../../models/backbones/ExplanationOfBenefitPayee.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitPayee,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitPayeeBuilder - Fluent builder for ExplanationOfBenefitPayee backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitPayee = new ExplanationOfBenefitPayeeBuilder()
 *   .setType(value)
 *   .build();
 */
export class ExplanationOfBenefitPayeeBuilder extends BackboneElementBuilder<ExplanationOfBenefitPayee, IExplanationOfBenefitPayee> {
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
   * Build the ExplanationOfBenefitPayee instance
   */
  build(): ExplanationOfBenefitPayee {
    return new ExplanationOfBenefitPayee(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitPayee instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitPayee> {
    const explanationOfBenefitPayee = this.build();
    await explanationOfBenefitPayee.validateOrThrow();
    return explanationOfBenefitPayee;
  }
}
