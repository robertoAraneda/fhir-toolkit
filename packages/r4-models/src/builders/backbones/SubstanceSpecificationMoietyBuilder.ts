import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationMoiety } from '../../models/backbones/SubstanceSpecificationMoiety.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IQuantity,
  ISubstanceSpecificationMoiety,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationMoietyBuilder - Fluent builder for SubstanceSpecificationMoiety backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationMoiety = new SubstanceSpecificationMoietyBuilder()
 *   .setRole(value)
 *   .build();
 */
export class SubstanceSpecificationMoietyBuilder extends BackboneElementBuilder<SubstanceSpecificationMoiety, ISubstanceSpecificationMoiety> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * Role that the moiety is playing
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set identifier
   * Identifier by which this moiety substance is known
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set name
   * Textual name for this moiety substance
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set stereochemistry
   * Stereochemistry type
   */
  setStereochemistry(stereochemistry: ICodeableConcept): this {
    this.data.stereochemistry = stereochemistry;
    return this;
  }

  /**
   * Set opticalActivity
   * Optical activity type
   */
  setOpticalActivity(opticalActivity: ICodeableConcept): this {
    this.data.opticalActivity = opticalActivity;
    return this;
  }

  /**
   * Set molecularFormula
   * Molecular formula
   */
  setMolecularFormula(molecularFormula: string): this {
    this.data.molecularFormula = molecularFormula;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set amount choice type
   * @param type - 'Quantity' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAmount('Quantity', value)
   */
  setAmount<T extends 'Quantity' | 'String'>(
    type: T,
    value: string
  ): this {
    const key = `amount${type}` as keyof ISubstanceSpecificationMoiety;
    const otherKeys: (keyof ISubstanceSpecificationMoiety)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('amountQuantity' as keyof ISubstanceSpecificationMoiety);
      otherKeys.push('_amountQuantity' as keyof ISubstanceSpecificationMoiety);
    }
    if (type !== 'String') {
      otherKeys.push('amountString' as keyof ISubstanceSpecificationMoiety);
      otherKeys.push('_amountString' as keyof ISubstanceSpecificationMoiety);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationMoiety instance
   */
  build(): SubstanceSpecificationMoiety {
    return new SubstanceSpecificationMoiety(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationMoiety instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationMoiety> {
    const substanceSpecificationMoiety = this.build();
    await substanceSpecificationMoiety.validateOrThrow();
    return substanceSpecificationMoiety;
  }
}
