import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionRelationship } from '../../models/backbones/SubstanceDefinitionRelationship.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IQuantity,
  IRatio,
  IReference,
  ISubstanceDefinitionRelationship,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceDefinitionRelationshipBuilder - Fluent builder for SubstanceDefinitionRelationship backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionRelationship = new SubstanceDefinitionRelationshipBuilder()
 *   .setType(value)
 *   .addSource({ ... })
 *   .build();
 */
export class SubstanceDefinitionRelationshipBuilder extends BackboneElementBuilder<SubstanceDefinitionRelationship, ISubstanceDefinitionRelationship> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * For example "salt to parent", "active moiety"
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set isDefining
   * For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible relationships
   */
  setIsDefining(isDefining: boolean): this {
    this.data.isDefining = isDefining;
    return this;
  }

  /**
   * Set ratioHighLimitAmount
   * For use when the numeric has an uncertain range
   */
  setRatioHighLimitAmount(ratioHighLimitAmount: IRatio): this {
    this.data.ratioHighLimitAmount = ratioHighLimitAmount;
    return this;
  }

  /**
   * Set comparator
   * An operator for the amount, for example "average", "approximately", "less than"
   */
  setComparator(comparator: ICodeableConcept): this {
    this.data.comparator = comparator;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set substanceDefinition choice type (substanceDefinitionReference, substanceDefinitionCodeableConcept)
   * @param type - 'Reference' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setSubstanceDefinition('Reference', value)
   */
  setSubstanceDefinition<T extends 'Reference' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `substanceDefinition${type}` as keyof ISubstanceDefinitionRelationship;
    const otherKeys: (keyof ISubstanceDefinitionRelationship)[] = [];
    if (type !== 'Reference') {
      otherKeys.push('substanceDefinitionReference' as keyof ISubstanceDefinitionRelationship);
      otherKeys.push('_substanceDefinitionReference' as keyof ISubstanceDefinitionRelationship);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('substanceDefinitionCodeableConcept' as keyof ISubstanceDefinitionRelationship);
      otherKeys.push('_substanceDefinitionCodeableConcept' as keyof ISubstanceDefinitionRelationship);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set amount choice type (amountQuantity, amountRatio, amountString)
   * @param type - 'Quantity' | 'Ratio' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setAmount('Quantity', value)
   */
  setAmount<T extends 'Quantity' | 'Ratio' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `amount${type}` as keyof ISubstanceDefinitionRelationship;
    const otherKeys: (keyof ISubstanceDefinitionRelationship)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('amountQuantity' as keyof ISubstanceDefinitionRelationship);
      otherKeys.push('_amountQuantity' as keyof ISubstanceDefinitionRelationship);
    }
    if (type !== 'Ratio') {
      otherKeys.push('amountRatio' as keyof ISubstanceDefinitionRelationship);
      otherKeys.push('_amountRatio' as keyof ISubstanceDefinitionRelationship);
    }
    if (type !== 'String') {
      otherKeys.push('amountString' as keyof ISubstanceDefinitionRelationship);
      otherKeys.push('_amountString' as keyof ISubstanceDefinitionRelationship);
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
   * Build the SubstanceDefinitionRelationship instance
   */
  build(): SubstanceDefinitionRelationship {
    return new SubstanceDefinitionRelationship(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionRelationship instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionRelationship> {
    const substanceDefinitionRelationship = this.build();
    await substanceDefinitionRelationship.validateOrThrow();
    return substanceDefinitionRelationship;
  }
}
