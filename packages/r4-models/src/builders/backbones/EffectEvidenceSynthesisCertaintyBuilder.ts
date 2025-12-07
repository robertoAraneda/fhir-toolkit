import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EffectEvidenceSynthesisCertainty } from '../../models/backbones/EffectEvidenceSynthesisCertainty.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEffectEvidenceSynthesisCertainty,
  IEffectEvidenceSynthesisCertaintyCertaintySubcomponent,
} from '@fhir-toolkit/r4-types';

/**
 * EffectEvidenceSynthesisCertaintyBuilder - Fluent builder for EffectEvidenceSynthesisCertainty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const effectEvidenceSynthesisCertainty = new EffectEvidenceSynthesisCertaintyBuilder()
 *   .addRating({ ... })
 *   .build();
 */
export class EffectEvidenceSynthesisCertaintyBuilder extends BackboneElementBuilder<EffectEvidenceSynthesisCertainty, IEffectEvidenceSynthesisCertainty> {
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
  addCertaintySubcomponent(certaintySubcomponent: IEffectEvidenceSynthesisCertaintyCertaintySubcomponent): this {
    return this.addToArray('certaintySubcomponent', certaintySubcomponent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EffectEvidenceSynthesisCertainty instance
   */
  build(): EffectEvidenceSynthesisCertainty {
    return new EffectEvidenceSynthesisCertainty(this.data);
  }

  /**
   * Build and validate the EffectEvidenceSynthesisCertainty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EffectEvidenceSynthesisCertainty> {
    const effectEvidenceSynthesisCertainty = this.build();
    await effectEvidenceSynthesisCertainty.validateOrThrow();
    return effectEvidenceSynthesisCertainty;
  }
}
