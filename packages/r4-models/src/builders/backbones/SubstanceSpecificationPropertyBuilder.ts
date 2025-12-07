import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationProperty } from '../../models/backbones/SubstanceSpecificationProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IQuantity,
  IReference,
  ISubstanceSpecificationProperty,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationPropertyBuilder - Fluent builder for SubstanceSpecificationProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationProperty = new SubstanceSpecificationPropertyBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class SubstanceSpecificationPropertyBuilder extends BackboneElementBuilder<SubstanceSpecificationProperty, ISubstanceSpecificationProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * A category for this property, e.g. Physical, Chemical, Enzymatic
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set code
   * Property type e.g. viscosity, pH, isoelectric point
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set parameters
   * Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1)
   */
  setParameters(parameters: string): this {
    this.data.parameters = parameters;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set definingSubstance choice type (definingSubstanceReference, definingSubstanceCodeableConcept)
   * @param type - 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setDefiningSubstance('Reference', value)
   */
  setDefiningSubstance<T extends 'Reference' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `definingSubstance${type}` as keyof ISubstanceSpecificationProperty;
    const otherKeys: (keyof ISubstanceSpecificationProperty)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('definingSubstanceReference' as keyof ISubstanceSpecificationProperty);
      otherKeys.push('_definingSubstanceReference' as keyof ISubstanceSpecificationProperty);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('definingSubstanceCodeableConcept' as keyof ISubstanceSpecificationProperty);
      otherKeys.push('_definingSubstanceCodeableConcept' as keyof ISubstanceSpecificationProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

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
    const key = `amount${type}` as keyof ISubstanceSpecificationProperty;
    const otherKeys: (keyof ISubstanceSpecificationProperty)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('amountQuantity' as keyof ISubstanceSpecificationProperty);
      otherKeys.push('_amountQuantity' as keyof ISubstanceSpecificationProperty);
    }
    if (type !== 'String') {
      otherKeys.push('amountString' as keyof ISubstanceSpecificationProperty);
      otherKeys.push('_amountString' as keyof ISubstanceSpecificationProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationProperty instance
   */
  build(): SubstanceSpecificationProperty {
    return new SubstanceSpecificationProperty(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationProperty> {
    const substanceSpecificationProperty = this.build();
    await substanceSpecificationProperty.validateOrThrow();
    return substanceSpecificationProperty;
  }
}
