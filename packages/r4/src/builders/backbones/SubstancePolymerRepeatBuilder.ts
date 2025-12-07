import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerRepeat } from '../../models/backbones/SubstancePolymerRepeat.js';
import type {
  ICodeableConcept,
  ISubstancePolymerRepeat,
  ISubstancePolymerRepeatRepeatUnit,
} from '@fhir-toolkit/r4-types';

/**
 * SubstancePolymerRepeatBuilder - Fluent builder for SubstancePolymerRepeat backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerRepeat = new SubstancePolymerRepeatBuilder()
 *   .setNumberOfUnits(value)
 *   .addRepeatUnit({ ... })
 *   .build();
 */
export class SubstancePolymerRepeatBuilder extends BackboneElementBuilder<SubstancePolymerRepeat, ISubstancePolymerRepeat> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set numberOfUnits
   * Todo
   */
  setNumberOfUnits(numberOfUnits: number): this {
    this.data.numberOfUnits = numberOfUnits;
    return this;
  }

  /**
   * Set averageMolecularFormula
   * Todo
   */
  setAverageMolecularFormula(averageMolecularFormula: string): this {
    this.data.averageMolecularFormula = averageMolecularFormula;
    return this;
  }

  /**
   * Set repeatUnitAmountType
   * Todo
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
   * Todo
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
