import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionNameUsage } from '../../models/backbones/MedicinalProductDefinitionNameUsage.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionNameUsage,
} from '@fhir-toolkit/r5-types';

/**
 * MedicinalProductDefinitionNameUsageBuilder - Fluent builder for MedicinalProductDefinitionNameUsage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionNameUsage = new MedicinalProductDefinitionNameUsageBuilder()
 *   .setCountry(value)
 *   .build();
 */
export class MedicinalProductDefinitionNameUsageBuilder extends BackboneElementBuilder<MedicinalProductDefinitionNameUsage, IMedicinalProductDefinitionNameUsage> {
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
   * Build the MedicinalProductDefinitionNameUsage instance
   */
  build(): MedicinalProductDefinitionNameUsage {
    return new MedicinalProductDefinitionNameUsage(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionNameUsage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionNameUsage> {
    const medicinalProductDefinitionNameUsage = this.build();
    await medicinalProductDefinitionNameUsage.validateOrThrow();
    return medicinalProductDefinitionNameUsage;
  }
}
