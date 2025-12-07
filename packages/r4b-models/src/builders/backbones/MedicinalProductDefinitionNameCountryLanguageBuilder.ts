import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionNameCountryLanguage } from '../../models/backbones/MedicinalProductDefinitionNameCountryLanguage.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionNameCountryLanguage,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicinalProductDefinitionNameCountryLanguageBuilder - Fluent builder for MedicinalProductDefinitionNameCountryLanguage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionNameCountryLanguage = new MedicinalProductDefinitionNameCountryLanguageBuilder()
 *   .setCountry(value)
 *   .build();
 */
export class MedicinalProductDefinitionNameCountryLanguageBuilder extends BackboneElementBuilder<MedicinalProductDefinitionNameCountryLanguage, IMedicinalProductDefinitionNameCountryLanguage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set country
   * Country code for where this name applies
   */
  setCountry(country: ICodeableConcept): this {
    this.data.country = country;
    return this;
  }

  /**
   * Set jurisdiction
   * Jurisdiction code for where this name applies
   */
  setJurisdiction(jurisdiction: ICodeableConcept): this {
    this.data.jurisdiction = jurisdiction;
    return this;
  }

  /**
   * Set language
   * Language code for this name
   */
  setLanguage(language: ICodeableConcept): this {
    this.data.language = language;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductDefinitionNameCountryLanguage instance
   */
  build(): MedicinalProductDefinitionNameCountryLanguage {
    return new MedicinalProductDefinitionNameCountryLanguage(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionNameCountryLanguage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionNameCountryLanguage> {
    const medicinalProductDefinitionNameCountryLanguage = this.build();
    await medicinalProductDefinitionNameCountryLanguage.validateOrThrow();
    return medicinalProductDefinitionNameCountryLanguage;
  }
}
