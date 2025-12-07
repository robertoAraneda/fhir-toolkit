import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceCertainty } from '../../models/backbones/EvidenceCertainty.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IEvidenceCertainty,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceCertaintyBuilder - Fluent builder for EvidenceCertainty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceCertainty = new EvidenceCertaintyBuilder()
 *   .setDescription(value)
 *   .addNote({ ... })
 *   .build();
 */
export class EvidenceCertaintyBuilder extends BackboneElementBuilder<EvidenceCertainty, IEvidenceCertainty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Textual description of certainty
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * Aspect of certainty being rated
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set rating
   * Assessment or judgement of the aspect
   */
  setRating(rating: ICodeableConcept): this {
    this.data.rating = rating;
    return this;
  }

  /**
   * Set rater
   * Individual or group who did the rating
   */
  setRater(rater: string): this {
    this.data.rater = rater;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Footnotes and/or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add subcomponent
   * A domain or subdomain of certainty
   */
  addSubcomponent(subcomponent: IEvidenceCertainty): this {
    return this.addToArray('subcomponent', subcomponent);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceCertainty instance
   */
  build(): EvidenceCertainty {
    return new EvidenceCertainty(this.data);
  }

  /**
   * Build and validate the EvidenceCertainty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceCertainty> {
    const evidenceCertainty = this.build();
    await evidenceCertainty.validateOrThrow();
    return evidenceCertainty;
  }
}
