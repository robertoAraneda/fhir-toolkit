import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerRepeat } from '../../models/backbones/SubstancePolymerRepeat.js';
import type {
  ICodeableConcept,
  ISubstancePolymerRepeat,
  ISubstancePolymerRepeatRepeatUnit,
} from '@fhir-toolkit/r5-types';

/**
 * SubstancePolymerRepeatBuilder - Fluent builder for SubstancePolymerRepeat backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerRepeat = new SubstancePolymerRepeatBuilder()
 *   .setAverageMolecularFormula(value)
 *   .addRepeatUnit({ ... })
 *   .build();
 */
export class SubstancePolymerRepeatBuilder extends BackboneElementBuilder<SubstancePolymerRepeat, ISubstancePolymerRepeat> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set averageMolecularFormula
   * A representation of an (average) molecular formula from a polymer
   */
  setAverageMolecularFormula(averageMolecularFormula: string): this {
    this.data.averageMolecularFormula = averageMolecularFormula;
    return this;
  }

  /**
   * Set repeatUnitAmountType
   * How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average)
   */
  setRepeatUnitAmountType(repeatUnitAmountType: ICodeableConcept): this {
    this.data.repeatUnitAmountType = repeatUnitAmountType;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add repeatUnit
   * An SRU - Structural Repeat Unit
   */
  addRepeatUnit(repeatUnit: ISubstancePolymerRepeatRepeatUnit): this {
    return this.addToArray('repeatUnit', repeatUnit);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstancePolymerRepeat instance
   */
  build(): SubstancePolymerRepeat {
    return new SubstancePolymerRepeat(this.data);
  }

  /**
   * Build and validate the SubstancePolymerRepeat instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstancePolymerRepeat> {
    const substancePolymerRepeat = this.build();
    await substancePolymerRepeat.validateOrThrow();
    return substancePolymerRepeat;
  }
}
