import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductNameCountryLanguage } from '../../models/backbones/MedicinalProductNameCountryLanguage.js';
import type {
  ICodeableConcept,
  IMedicinalProductNameCountryLanguage,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductNameCountryLanguageBuilder - Fluent builder for MedicinalProductNameCountryLanguage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductNameCountryLanguage = new MedicinalProductNameCountryLanguageBuilder()
 *   .setCountry(value)
 *   .build();
 */
export class MedicinalProductNameCountryLanguageBuilder extends BackboneElementBuilder<MedicinalProductNameCountryLanguage, IMedicinalProductNameCountryLanguage> {
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
   * Build the MedicinalProductNameCountryLanguage instance
   */
  build(): MedicinalProductNameCountryLanguage {
    return new MedicinalProductNameCountryLanguage(this.data);
  }

  /**
   * Build and validate the MedicinalProductNameCountryLanguage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductNameCountryLanguage> {
    const medicinalProductNameCountryLanguage = this.build();
    await medicinalProductNameCountryLanguage.validateOrThrow();
    return medicinalProductNameCountryLanguage;
  }
}
