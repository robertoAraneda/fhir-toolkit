import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EffectEvidenceSynthesisCertaintyCertaintySubcomponent } from '../../models/backbones/EffectEvidenceSynthesisCertaintyCertaintySubcomponent.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEffectEvidenceSynthesisCertaintyCertaintySubcomponent,
} from '@fhir-toolkit/r4-types';

/**
 * EffectEvidenceSynthesisCertaintyCertaintySubcomponentBuilder - Fluent builder for EffectEvidenceSynthesisCertaintyCertaintySubcomponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const effectEvidenceSynthesisCertaintyCertaintySubcomponent = new EffectEvidenceSynthesisCertaintyCertaintySubcomponentBuilder()
 *   .setType(value)
 *   .addRating({ ... })
 *   .build();
 */
export class EffectEvidenceSynthesisCertaintyCertaintySubcomponentBuilder extends BackboneElementBuilder<EffectEvidenceSynthesisCertaintyCertaintySubcomponent, IEffectEvidenceSynthesisCertaintyCertaintySubcomponent> {
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
   * Build the EffectEvidenceSynthesisCertaintyCertaintySubcomponent instance
   */
  build(): EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
    return new EffectEvidenceSynthesisCertaintyCertaintySubcomponent(this.data);
  }

  /**
   * Build and validate the EffectEvidenceSynthesisCertaintyCertaintySubcomponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EffectEvidenceSynthesisCertaintyCertaintySubcomponent> {
    const effectEvidenceSynthesisCertaintyCertaintySubcomponent = this.build();
    await effectEvidenceSynthesisCertaintyCertaintySubcomponent.validateOrThrow();
    return effectEvidenceSynthesisCertaintyCertaintySubcomponent;
  }
}
