import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationStructureIsotope } from '../../models/backbones/SubstanceSpecificationStructureIsotope.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IQuantity,
  ISubstanceSpecificationStructureIsotope,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationStructureIsotopeBuilder - Fluent builder for SubstanceSpecificationStructureIsotope backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationStructureIsotope = new SubstanceSpecificationStructureIsotopeBuilder()
 *   .setIdentifier(value)
 *   .build();
 */
export class SubstanceSpecificationStructureIsotopeBuilder extends BackboneElementBuilder<SubstanceSpecificationStructureIsotope, ISubstanceSpecificationStructureIsotope> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Substance identifier for each non-natural or radioisotope
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set name
   * Substance name for each non-natural or radioisotope
   */
  setName(name: ICodeableConcept): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set substitution
   * The type of isotopic substitution present in a single substance
   */
  setSubstitution(substitution: ICodeableConcept): this {
    this.data.substitution = substitution;
    return this;
  }

  /**
   * Set halfLife
   * Half life - for a non-natural nuclide
   */
  setHalfLife(halfLife: IQuantity): this {
    this.data.halfLife = halfLife;
    return this;
  }

  /**
   * Set molecularWeight
   * The molecular weight or weight range (for proteins, polymers or nucleic acids)
   */
  setMolecularWeight(molecularWeight: ISubstanceSpecificationStructureIsotopeMolecularWeight): this {
    this.data.molecularWeight = molecularWeight;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationStructureIsotope instance
   */
  build(): SubstanceSpecificationStructureIsotope {
    return new SubstanceSpecificationStructureIsotope(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationStructureIsotope instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationStructureIsotope> {
    const substanceSpecificationStructureIsotope = this.build();
    await substanceSpecificationStructureIsotope.validateOrThrow();
    return substanceSpecificationStructureIsotope;
  }
}
