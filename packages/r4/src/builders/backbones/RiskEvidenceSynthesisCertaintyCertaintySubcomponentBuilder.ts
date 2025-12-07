import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RiskEvidenceSynthesisCertaintyCertaintySubcomponent } from '../../models/backbones/RiskEvidenceSynthesisCertaintyCertaintySubcomponent.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IRiskEvidenceSynthesisCertaintyCertaintySubcomponent,
} from '@fhir-toolkit/r4-types';

/**
 * RiskEvidenceSynthesisCertaintyCertaintySubcomponentBuilder - Fluent builder for RiskEvidenceSynthesisCertaintyCertaintySubcomponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const riskEvidenceSynthesisCertaintyCertaintySubcomponent = new RiskEvidenceSynthesisCertaintyCertaintySubcomponentBuilder()
 *   .setType(value)
 *   .addRating({ ... })
 *   .build();
 */
export class RiskEvidenceSynthesisCertaintyCertaintySubcomponentBuilder extends BackboneElementBuilder<RiskEvidenceSynthesisCertaintyCertaintySubcomponent, IRiskEvidenceSynthesisCertaintyCertaintySubcomponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of subcomponent of certainty rating
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add rating
   * Subcomponent certainty rating
   */
  addRating(rating: ICodeableConcept): this {
    return this.addToArray('rating', rating);
  }

  /**
   * Add note
   * Used for footnotes or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RiskEvidenceSynthesisCertaintyCertaintySubcomponent instance
   */
  build(): RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
    return new RiskEvidenceSynthesisCertaintyCertaintySubcomponent(this.data);
  }

  /**
   * Build and validate the RiskEvidenceSynthesisCertaintyCertaintySubcomponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RiskEvidenceSynthesisCertaintyCertaintySubcomponent> {
    const riskEvidenceSynthesisCertaintyCertaintySubcomponent = this.build();
    await riskEvidenceSynthesisCertaintyCertaintySubcomponent.validateOrThrow();
    return riskEvidenceSynthesisCertaintyCertaintySubcomponent;
  }
}
