import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation } from '../../models/backbones/SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation.js';
import type {
  ICodeableConcept,
  ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
} from '@fhir-toolkit/r5-types';

/**
 * SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationBuilder - Fluent builder for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerRepeatRepeatUnitDegreeOfPolymerisation = new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationBuilder()
 *   .setType(value)
 *   .build();
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationBuilder extends BackboneElementBuilder<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation, ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set average
   * An average amount of polymerisation
   */
  setAverage(average: number): this {
    this.data.average = average;
    return this;
  }

  /**
   * Set low
   * A low expected limit of the amount
   */
  setLow(low: number): this {
    this.data.low = low;
    return this;
  }

  /**
   * Set high
   * A high expected limit of the amount
   */
  setHigh(high: number): this {
    this.data.high = high;
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
