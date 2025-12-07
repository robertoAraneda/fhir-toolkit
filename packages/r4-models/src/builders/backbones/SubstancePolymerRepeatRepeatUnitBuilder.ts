import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerRepeatRepeatUnit } from '../../models/backbones/SubstancePolymerRepeatRepeatUnit.js';
import type {
  ICodeableConcept,
  ISubstanceAmount,
  ISubstancePolymerRepeatRepeatUnit,
  ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
} from '@fhir-toolkit/r4-types';

/**
 * SubstancePolymerRepeatRepeatUnitBuilder - Fluent builder for SubstancePolymerRepeatRepeatUnit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerRepeatRepeatUnit = new SubstancePolymerRepeatRepeatUnitBuilder()
 *   .setOrientationOfPolymerisation(value)
 *   .addDegreeOfPolymerisation({ ... })
 *   .build();
 */
export class SubstancePolymerRepeatRepeatUnitBuilder extends BackboneElementBuilder<SubstancePolymerRepeatRepeatUnit, ISubstancePolymerRepeatRepeatUnit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set orientationOfPolymerisation
   * Todo
   */
  setOrientationOfPolymerisation(orientationOfPolymerisation: ICodeableConcept): this {
    this.data.orientationOfPolymerisation = orientationOfPolymerisation;
    return this;
  }

  /**
   * Set repeatUnit
   * Todo
   */
  setRepeatUnit(repeatUnit: string): this {
    this.data.repeatUnit = repeatUnit;
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
  // Array Properties
  // ============================================================================

  /**
   * Add degreeOfPolymerisation
   * Todo
   */
  addDegreeOfPolymerisation(degreeOfPolymerisation: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation): this {
    return this.addToArray('degreeOfPolymerisation', degreeOfPolymerisation);
  }

  /**
   * Add structuralRepresentation
   * Todo
   */
  addStructuralRepresentation(structuralRepresentation: ISubstancePolymerRepeatRepeatUnitStructuralRepresentation): this {
    return this.addToArray('structuralRepresentation', structuralRepresentation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstancePolymerRepeatRepeatUnit instance
   */
  build(): SubstancePolymerRepeatRepeatUnit {
    return new SubstancePolymerRepeatRepeatUnit(this.data);
  }

  /**
   * Build and validate the SubstancePolymerRepeatRepeatUnit instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstancePolymerRepeatRepeatUnit> {
    const substancePolymerRepeatRepeatUnit = this.build();
    await substancePolymerRepeatRepeatUnit.validateOrThrow();
    return substancePolymerRepeatRepeatUnit;
  }
}
