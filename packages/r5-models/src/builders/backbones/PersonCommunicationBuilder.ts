import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PersonCommunication } from '../../models/backbones/PersonCommunication.js';
import type {
  ICodeableConcept,
  IPersonCommunication,
} from '@fhir-toolkit/r5-types';

/**
 * PersonCommunicationBuilder - Fluent builder for PersonCommunication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const personCommunication = new PersonCommunicationBuilder()
 *   .setLanguage(value)
 *   .build();
 */
export class PersonCommunicationBuilder extends BackboneElementBuilder<PersonCommunication, IPersonCommunication> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set language
   * The language which can be used to communicate with the person about his or her health
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
   * Build the PersonCommunication instance
   */
  build(): PersonCommunication {
    return new PersonCommunication(this.data);
  }

  /**
   * Build and validate the PersonCommunication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PersonCommunication> {
    const personCommunication = this.build();
    await personCommunication.validateOrThrow();
    return personCommunication;
  }
}
