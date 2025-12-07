import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionMoiety } from '../../models/backbones/SubstanceDefinitionMoiety.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IQuantity,
  ISubstanceDefinitionMoiety,
} from '@fhir-toolkit/r4b-types';

/**
 * SubstanceDefinitionMoietyBuilder - Fluent builder for SubstanceDefinitionMoiety backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionMoiety = new SubstanceDefinitionMoietyBuilder()
 *   .setRole(value)
 *   .build();
 */
export class SubstanceDefinitionMoietyBuilder extends BackboneElementBuilder<SubstanceDefinitionMoiety, ISubstanceDefinitionMoiety> {
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
   * Molecular formula for this moiety (e.g. with the Hill system)
   */
  setMolecularFormula(molecularFormula: string): this {
    this.data.molecularFormula = molecularFormula;
    return this;
  }

  /**
   * Set measurementType
   * The measurement type of the quantitative value
   */
  setMeasurementType(measurementType: ICodeableConcept): this {
    this.data.measurementType = measurementType;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set amount choice type (amountQuantity, amountString)
   * @param type - 'Quantity' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAmount('Quantity', value)
   */
  setAmount<T extends 'Quantity' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `amount${type}` as keyof ISubstanceDefinitionMoiety;
    const otherKeys: (keyof ISubstanceDefinitionMoiety)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('amountQuantity' as keyof ISubstanceDefinitionMoiety);
      otherKeys.push('_amountQuantity' as keyof ISubstanceDefinitionMoiety);
    }
    if (type !== 'String') {
      otherKeys.push('amountString' as keyof ISubstanceDefinitionMoiety);
      otherKeys.push('_amountString' as keyof ISubstanceDefinitionMoiety);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinitionMoiety instance
   */
  build(): SubstanceDefinitionMoiety {
    return new SubstanceDefinitionMoiety(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionMoiety instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionMoiety> {
    const substanceDefinitionMoiety = this.build();
    await substanceDefinitionMoiety.validateOrThrow();
    return substanceDefinitionMoiety;
  }
}
