import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PractitionerCommunication } from '../../models/backbones/PractitionerCommunication.js';
import type {
  ICodeableConcept,
  IPractitionerCommunication,
} from '@fhir-toolkit/r5-types';

/**
 * PractitionerCommunicationBuilder - Fluent builder for PractitionerCommunication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const practitionerCommunication = new PractitionerCommunicationBuilder()
 *   .setLanguage(value)
 *   .build();
 */
export class PractitionerCommunicationBuilder extends BackboneElementBuilder<PractitionerCommunication, IPractitionerCommunication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set language
   * The language code used to communicate with the practitioner
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
   * Build the PractitionerCommunication instance
   */
  build(): PractitionerCommunication {
    return new PractitionerCommunication(this.data);
  }

  /**
   * Build and validate the PractitionerCommunication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PractitionerCommunication> {
    const practitionerCommunication = this.build();
    await practitionerCommunication.validateOrThrow();
    return practitionerCommunication;
  }
}
