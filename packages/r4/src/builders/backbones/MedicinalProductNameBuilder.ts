import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductName } from '../../models/backbones/MedicinalProductName.js';
import type {
  IMedicinalProductName,
  IMedicinalProductNameCountryLanguage,
  IMedicinalProductNameNamePart,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductNameBuilder - Fluent builder for MedicinalProductName backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductName = new MedicinalProductNameBuilder()
 *   .setProductName(value)
 *   .addNamePart({ ... })
 *   .build();
 */
export class MedicinalProductNameBuilder extends BackboneElementBuilder<MedicinalProductName, IMedicinalProductName> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set productName
   * The full product name
   */
  setProductName(productName: string): this {
    this.data.productName = productName;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add namePart
   * Coding words or phrases of the name
   */
  addNamePart(namePart: IMedicinalProductNameNamePart): this {
    return this.addToArray('namePart', namePart);
  }

  /**
   * Add countryLanguage
   * Country where the name applies
   */
  addCountryLanguage(countryLanguage: IMedicinalProductNameCountryLanguage): this {
    return this.addToArray('countryLanguage', countryLanguage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductName instance
   */
  build(): MedicinalProductName {
    return new MedicinalProductName(this.data);
  }

  /**
   * Build and validate the MedicinalProductName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductName> {
    const medicinalProductName = this.build();
    await medicinalProductName.validateOrThrow();
    return medicinalProductName;
  }
}
