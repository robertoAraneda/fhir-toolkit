import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionMolecularWeight } from '../../models/backbones/SubstanceDefinitionMolecularWeight.js';
import type {
  ICodeableConcept,
  IQuantity,
  ISubstanceDefinitionMolecularWeight,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceDefinitionMolecularWeightBuilder - Fluent builder for SubstanceDefinitionMolecularWeight backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionMolecularWeight = new SubstanceDefinitionMolecularWeightBuilder()
 *   .setMethod(value)
 *   .build();
 */
export class SubstanceDefinitionMolecularWeightBuilder extends BackboneElementBuilder<SubstanceDefinitionMolecularWeight, ISubstanceDefinitionMolecularWeight> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set method
   * The method by which the weight was determined
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set type
   * Type of molecular weight e.g. exact, average, weight average
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set amount
   * Used to capture quantitative values for a variety of elements
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinitionMolecularWeight instance
   */
  build(): SubstanceDefinitionMolecularWeight {
    return new SubstanceDefinitionMolecularWeight(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionMolecularWeight instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionMolecularWeight> {
    const substanceDefinitionMolecularWeight = this.build();
    await substanceDefinitionMolecularWeight.validateOrThrow();
    return substanceDefinitionMolecularWeight;
  }
}
