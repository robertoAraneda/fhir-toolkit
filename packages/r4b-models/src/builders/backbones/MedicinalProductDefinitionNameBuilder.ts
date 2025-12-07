import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductDefinitionName } from '../../models/backbones/MedicinalProductDefinitionName.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionName,
  IMedicinalProductDefinitionNameCountryLanguage,
  IMedicinalProductDefinitionNameNamePart,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicinalProductDefinitionNameBuilder - Fluent builder for MedicinalProductDefinitionName backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductDefinitionName = new MedicinalProductDefinitionNameBuilder()
 *   .setProductName(value)
 *   .addNamePart({ ... })
 *   .build();
 */
export class MedicinalProductDefinitionNameBuilder extends BackboneElementBuilder<MedicinalProductDefinitionName, IMedicinalProductDefinitionName> {
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

  /**
   * Set type
   * Type of product name, such as rINN, BAN, Proprietary, Non-Proprietary
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add namePart
   * Coding words or phrases of the name
   */
  addNamePart(namePart: IMedicinalProductDefinitionNameNamePart): this {
    return this.addToArray('namePart', namePart);
  }

  /**
   * Add countryLanguage
   * Country and jurisdiction where the name applies
   */
  addCountryLanguage(countryLanguage: IMedicinalProductDefinitionNameCountryLanguage): this {
    return this.addToArray('countryLanguage', countryLanguage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductDefinitionName instance
   */
  build(): MedicinalProductDefinitionName {
    return new MedicinalProductDefinitionName(this.data);
  }

  /**
   * Build and validate the MedicinalProductDefinitionName instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductDefinitionName> {
    const medicinalProductDefinitionName = this.build();
    await medicinalProductDefinitionName.validateOrThrow();
    return medicinalProductDefinitionName;
  }
}
