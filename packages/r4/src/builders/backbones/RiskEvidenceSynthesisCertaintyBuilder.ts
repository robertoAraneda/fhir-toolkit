import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RiskEvidenceSynthesisCertainty } from '../../models/backbones/RiskEvidenceSynthesisCertainty.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IRiskEvidenceSynthesisCertainty,
  IRiskEvidenceSynthesisCertaintyCertaintySubcomponent,
} from '@fhir-toolkit/r4-types';

/**
 * RiskEvidenceSynthesisCertaintyBuilder - Fluent builder for RiskEvidenceSynthesisCertainty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const riskEvidenceSynthesisCertainty = new RiskEvidenceSynthesisCertaintyBuilder()
 *   .addRating({ ... })
 *   .build();
 */
export class RiskEvidenceSynthesisCertaintyBuilder extends BackboneElementBuilder<RiskEvidenceSynthesisCertainty, IRiskEvidenceSynthesisCertainty> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add rating
   * Certainty rating
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

  /**
   * Add certaintySubcomponent
   * A component that contributes to the overall certainty
   */
  addCertaintySubcomponent(certaintySubcomponent: IRiskEvidenceSynthesisCertaintyCertaintySubcomponent): this {
    return this.addToArray('certaintySubcomponent', certaintySubcomponent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RiskEvidenceSynthesisCertainty instance
   */
  build(): RiskEvidenceSynthesisCertainty {
    return new RiskEvidenceSynthesisCertainty(this.data);
  }

  /**
   * Build and validate the RiskEvidenceSynthesisCertainty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RiskEvidenceSynthesisCertainty> {
    const riskEvidenceSynthesisCertainty = this.build();
    await riskEvidenceSynthesisCertainty.validateOrThrow();
    return riskEvidenceSynthesisCertainty;
  }
}
