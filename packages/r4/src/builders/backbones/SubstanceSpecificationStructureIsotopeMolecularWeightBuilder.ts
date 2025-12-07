import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from '../../models/backbones/SubstanceSpecificationStructureIsotopeMolecularWeight.js';
import type {
  ICodeableConcept,
  IQuantity,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationStructureIsotopeMolecularWeightBuilder - Fluent builder for SubstanceSpecificationStructureIsotopeMolecularWeight backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationStructureIsotopeMolecularWeight = new SubstanceSpecificationStructureIsotopeMolecularWeightBuilder()
 *   .setMethod(value)
 *   .build();
 */
export class SubstanceSpecificationStructureIsotopeMolecularWeightBuilder extends BackboneElementBuilder<SubstanceSpecificationStructureIsotopeMolecularWeight, ISubstanceSpecificationStructureIsotopeMolecularWeight> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set method
   * The method by which the molecular weight was determined
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set type
   * Type of molecular weight such as exact, average (also known as. number average), weight average
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set amount
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field
   */
  setAmount(amount: IQuantity): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationStructureIsotopeMolecularWeight instance
   */
  build(): SubstanceSpecificationStructureIsotopeMolecularWeight {
    return new SubstanceSpecificationStructureIsotopeMolecularWeight(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationStructureIsotopeMolecularWeight instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationStructureIsotopeMolecularWeight> {
    const substanceSpecificationStructureIsotopeMolecularWeight = this.build();
    await substanceSpecificationStructureIsotopeMolecularWeight.validateOrThrow();
    return substanceSpecificationStructureIsotopeMolecularWeight;
  }
}
