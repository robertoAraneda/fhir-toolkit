import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerRepeatRepeatUnit } from '../../models/backbones/SubstancePolymerRepeatRepeatUnit.js';
import type {
  ICodeableConcept,
  ISubstancePolymerRepeatRepeatUnit,
  ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
} from '@fhir-toolkit/r5-types';

/**
 * SubstancePolymerRepeatRepeatUnitBuilder - Fluent builder for SubstancePolymerRepeatRepeatUnit backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerRepeatRepeatUnit = new SubstancePolymerRepeatRepeatUnitBuilder()
 *   .setUnit(value)
 *   .addDegreeOfPolymerisation({ ... })
 *   .build();
 */
export class SubstancePolymerRepeatRepeatUnitBuilder extends BackboneElementBuilder<SubstancePolymerRepeatRepeatUnit, ISubstancePolymerRepeatRepeatUnit> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set unit
   * Structural repeat units are essential elements for defining polymers
   */
  setUnit(unit: string): this {
    this.data.unit = unit;
    return this;
  }

  /**
   * Set orientation
   * The orientation of the polymerisation, e.g. head-tail, head-head, random
   */
  setOrientation(orientation: ICodeableConcept): this {
    this.data.orientation = orientation;
    return this;
  }

  /**
   * Set amount
   * Number of repeats of this unit
   */
  setAmount(amount: number): this {
    this.data.amount = amount;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add degreeOfPolymerisation
   * Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described
   */
  addDegreeOfPolymerisation(degreeOfPolymerisation: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation): this {
    return this.addToArray('degreeOfPolymerisation', degreeOfPolymerisation);
  }

  /**
   * Add structuralRepresentation
   * A graphical structure for this SRU
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
