import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicinalProductSpecialDesignation } from '../../models/backbones/MedicinalProductSpecialDesignation.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMedicinalProductSpecialDesignation,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductSpecialDesignationBuilder - Fluent builder for MedicinalProductSpecialDesignation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductSpecialDesignation = new MedicinalProductSpecialDesignationBuilder()
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicinalProductSpecialDesignationBuilder extends BackboneElementBuilder<MedicinalProductSpecialDesignation, IMedicinalProductSpecialDesignation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of special designation, e.g. orphan drug, minor use
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set intendedUse
   * The intended use of the product, e.g. prevention, treatment
   */
  setIntendedUse(intendedUse: ICodeableConcept): this {
    this.data.intendedUse = intendedUse;
    return this;
  }

  /**
   * Set status
   * For example granted, pending, expired or withdrawn
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set date
   * Date when the designation was granted
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set species
   * Animal species for which this applies
   */
  setSpecies(species: ICodeableConcept): this {
    this.data.species = species;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set indication choice type (indicationCodeableConcept, indicationReference)
   * @param type - 'CodeableConcept' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setIndication('CodeableConcept', value)
   */
  setIndication<T extends 'CodeableConcept' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `indication${type}` as keyof IMedicinalProductSpecialDesignation;
    const otherKeys: (keyof IMedicinalProductSpecialDesignation)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('indicationCodeableConcept' as keyof IMedicinalProductSpecialDesignation);
      otherKeys.push('_indicationCodeableConcept' as keyof IMedicinalProductSpecialDesignation);
    }
    if (type !== 'Reference') {
      otherKeys.push('indicationReference' as keyof IMedicinalProductSpecialDesignation);
      otherKeys.push('_indicationReference' as keyof IMedicinalProductSpecialDesignation);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Identifier for the designation, or procedure number
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductSpecialDesignation instance
   */
  build(): MedicinalProductSpecialDesignation {
    return new MedicinalProductSpecialDesignation(this.data);
  }

  /**
   * Build and validate the MedicinalProductSpecialDesignation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductSpecialDesignation> {
    const medicinalProductSpecialDesignation = this.build();
    await medicinalProductSpecialDesignation.validateOrThrow();
    return medicinalProductSpecialDesignation;
  }
}
