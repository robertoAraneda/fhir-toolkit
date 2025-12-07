import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationRelationship } from '../../models/backbones/SubstanceSpecificationRelationship.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  ISubstanceSpecificationRelationship,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationRelationshipBuilder - Fluent builder for SubstanceSpecificationRelationship backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationRelationship = new SubstanceSpecificationRelationshipBuilder()
 *   .setRelationship(value)
 *   .addSource({ ... })
 *   .build();
 */
export class SubstanceSpecificationRelationshipBuilder extends BackboneElementBuilder<SubstanceSpecificationRelationship, ISubstanceSpecificationRelationship> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set relationship
   * For example "salt to parent", "active moiety", "starting material"
   */
  setRelationship(relationship: ICodeableConcept): this {
    this.data.relationship = relationship;
    return this;
  }

  /**
   * Set isDefining
   * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships
   */
  setIsDefining(isDefining: boolean): this {
    this.data.isDefining = isDefining;
    return this;
  }

  /**
   * Set amountRatioLowLimit
   * For use when the numeric
   */
  setAmountRatioLowLimit(amountRatioLowLimit: IRatio): this {
    this.data.amountRatioLowLimit = amountRatioLowLimit;
    return this;
  }

  /**
   * Set amountType
   * An operator for the amount, for example "average", "approximately", "less than"
   */
  setAmountType(amountType: ICodeableConcept): this {
    this.data.amountType = amountType;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set substance choice type (substanceReference, substanceCodeableConcept)
   * @param type - 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubstance('Reference', value)
   */
  setSubstance<T extends 'Reference' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `substance${type}` as keyof ISubstanceSpecificationRelationship;
    const otherKeys: (keyof ISubstanceSpecificationRelationship)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('substanceReference' as keyof ISubstanceSpecificationRelationship);
      otherKeys.push('_substanceReference' as keyof ISubstanceSpecificationRelationship);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('substanceCodeableConcept' as keyof ISubstanceSpecificationRelationship);
      otherKeys.push('_substanceCodeableConcept' as keyof ISubstanceSpecificationRelationship);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set amount choice type (amountQuantity, amountRange, amountRatio, amountString)
   * @param type - 'Quantity' | 'Range' | 'Ratio' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAmount('Quantity', value)
   */
  setAmount<T extends 'Quantity' | 'Range' | 'Ratio' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `amount${type}` as keyof ISubstanceSpecificationRelationship;
    const otherKeys: (keyof ISubstanceSpecificationRelationship)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('amountQuantity' as keyof ISubstanceSpecificationRelationship);
      otherKeys.push('_amountQuantity' as keyof ISubstanceSpecificationRelationship);
    }
    if (type !== 'Range') {
      otherKeys.push('amountRange' as keyof ISubstanceSpecificationRelationship);
      otherKeys.push('_amountRange' as keyof ISubstanceSpecificationRelationship);
    }
    if (type !== 'Ratio') {
      otherKeys.push('amountRatio' as keyof ISubstanceSpecificationRelationship);
      otherKeys.push('_amountRatio' as keyof ISubstanceSpecificationRelationship);
    }
    if (type !== 'String') {
      otherKeys.push('amountString' as keyof ISubstanceSpecificationRelationship);
      otherKeys.push('_amountString' as keyof ISubstanceSpecificationRelationship);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add source
   * Supporting literature
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationRelationship instance
   */
  build(): SubstanceSpecificationRelationship {
    return new SubstanceSpecificationRelationship(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationRelationship instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationRelationship> {
    const substanceSpecificationRelationship = this.build();
    await substanceSpecificationRelationship.validateOrThrow();
    return substanceSpecificationRelationship;
  }
}
