import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationStructure } from '../../models/backbones/SubstanceSpecificationStructure.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceSpecificationStructure,
  ISubstanceSpecificationStructureIsotope,
  ISubstanceSpecificationStructureIsotopeMolecularWeight,
  ISubstanceSpecificationStructureRepresentation,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationStructureBuilder - Fluent builder for SubstanceSpecificationStructure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationStructure = new SubstanceSpecificationStructureBuilder()
 *   .setStereochemistry(value)
 *   .addIsotope({ ... })
 *   .build();
 */
export class SubstanceSpecificationStructureBuilder extends BackboneElementBuilder<SubstanceSpecificationStructure, ISubstanceSpecificationStructure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set stereochemistry
   * Stereochemistry type
   */
  setStereochemistry(stereochemistry: ICodeableConcept): this {
    this.data.stereochemistry = stereochemistry;
    return this;
  }

  /**
   * Set opticalActivity
   * Optical activity type
   */
  setOpticalActivity(opticalActivity: ICodeableConcept): this {
    this.data.opticalActivity = opticalActivity;
    return this;
  }

  /**
   * Set molecularFormula
   * Molecular formula
   */
  setMolecularFormula(molecularFormula: string): this {
    this.data.molecularFormula = molecularFormula;
    return this;
  }

  /**
   * Set molecularFormulaByMoiety
   * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot
   */
  setMolecularFormulaByMoiety(molecularFormulaByMoiety: string): this {
    this.data.molecularFormulaByMoiety = molecularFormulaByMoiety;
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
  // Array Properties
  // ============================================================================

  /**
   * Add isotope
   * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
   */
  addIsotope(isotope: ISubstanceSpecificationStructureIsotope): this {
    return this.addToArray('isotope', isotope);
  }

  /**
   * Add source
   * Supporting literature
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  /**
   * Add representation
   * Molecular structural representation
   */
  addRepresentation(representation: ISubstanceSpecificationStructureRepresentation): this {
    return this.addToArray('representation', representation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceSpecificationStructure instance
   */
  build(): SubstanceSpecificationStructure {
    return new SubstanceSpecificationStructure(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationStructure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationStructure> {
    const substanceSpecificationStructure = this.build();
    await substanceSpecificationStructure.validateOrThrow();
    return substanceSpecificationStructure;
  }
}
