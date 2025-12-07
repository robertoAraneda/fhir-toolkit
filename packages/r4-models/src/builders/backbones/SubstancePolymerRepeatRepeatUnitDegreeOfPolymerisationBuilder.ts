import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation } from '../../models/backbones/SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation.js';
import type {
  ICodeableConcept,
  ISubstanceAmount,
  ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
} from '@fhir-toolkit/r4-types';

/**
 * SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationBuilder - Fluent builder for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerRepeatRepeatUnitDegreeOfPolymerisation = new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationBuilder()
 *   .setDegree(value)
 *   .build();
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationBuilder extends BackboneElementBuilder<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation, ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set degree
   * Todo
   */
  setDegree(degree: ICodeableConcept): this {
    this.data.degree = degree;
    return this;
  }

  /**
   * Set amount
   * Todo
   */
  setAmount(amount: ISubstanceAmount): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation instance
   */
  build(): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    return new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(this.data);
  }

  /**
   * Build and validate the SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation> {
    const substancePolymerRepeatRepeatUnitDegreeOfPolymerisation = this.build();
    await substancePolymerRepeatRepeatUnitDegreeOfPolymerisation.validateOrThrow();
    return substancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
  }
}
