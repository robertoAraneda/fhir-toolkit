import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { RelatedPersonCommunication } from '../../models/backbones/RelatedPersonCommunication.js';
import type {
  ICodeableConcept,
  IRelatedPersonCommunication,
} from '@fhir-toolkit/r4b-types';

/**
 * RelatedPersonCommunicationBuilder - Fluent builder for RelatedPersonCommunication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const relatedPersonCommunication = new RelatedPersonCommunicationBuilder()
 *   .setLanguage(value)
 *   .build();
 */
export class RelatedPersonCommunicationBuilder extends BackboneElementBuilder<RelatedPersonCommunication, IRelatedPersonCommunication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set language
   * The language which can be used to communicate with the patient about his or her health
   */
  setLanguage(language: ICodeableConcept): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set preferred
   * Language preference indicator
   */
  setPreferred(preferred: boolean): this {
    this.data.preferred = preferred;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the RelatedPersonCommunication instance
   */
  build(): RelatedPersonCommunication {
    return new RelatedPersonCommunication(this.data);
  }

  /**
   * Build and validate the RelatedPersonCommunication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<RelatedPersonCommunication> {
    const relatedPersonCommunication = this.build();
    await relatedPersonCommunication.validateOrThrow();
    return relatedPersonCommunication;
  }
}
