import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PatientCommunication } from '../../models/backbones/PatientCommunication.js';
import type {
  ICodeableConcept,
  IPatientCommunication,
} from '@fhir-toolkit/r5-types';

/**
 * PatientCommunicationBuilder - Fluent builder for PatientCommunication backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const patientCommunication = new PatientCommunicationBuilder()
 *   .setLanguage(value)
 *   .build();
 */
export class PatientCommunicationBuilder extends BackboneElementBuilder<PatientCommunication, IPatientCommunication> {
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
   * Build the PatientCommunication instance
   */
  build(): PatientCommunication {
    return new PatientCommunication(this.data);
  }

  /**
   * Build and validate the PatientCommunication instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PatientCommunication> {
    const patientCommunication = this.build();
    await patientCommunication.validateOrThrow();
    return patientCommunication;
  }
}
