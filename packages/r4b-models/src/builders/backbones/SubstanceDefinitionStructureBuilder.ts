import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionStructure } from '../../models/backbones/SubstanceDefinitionStructure.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceDefinitionMolecularWeight,
  ISubstanceDefinitionStructure,
  ISubstanceDefinitionStructureRepresentation,
} from '@fhir-toolkit/r4b-types';

/**
 * SubstanceDefinitionStructureBuilder - Fluent builder for SubstanceDefinitionStructure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionStructure = new SubstanceDefinitionStructureBuilder()
 *   .setStereochemistry(value)
 *   .addTechnique({ ... })
 *   .build();
 */
export class SubstanceDefinitionStructureBuilder extends BackboneElementBuilder<SubstanceDefinitionStructure, ISubstanceDefinitionStructure> {
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
   * Molecular formula (e.g. using the Hill system)
   */
  setMolecularFormula(molecularFormula: string): this {
    this.data.molecularFormula = molecularFormula;
    return this;
  }

  /**
   * Set molecularFormulaByMoiety
   * Specified per moiety according to the Hill system
   */
  setMolecularFormulaByMoiety(molecularFormulaByMoiety: string): this {
    this.data.molecularFormulaByMoiety = molecularFormulaByMoiety;
    return this;
  }

  /**
   * Set molecularWeight
   * The molecular weight or weight range
   */
  setMolecularWeight(molecularWeight: ISubstanceDefinitionMolecularWeight): this {
    this.data.molecularWeight = molecularWeight;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add technique
   * The method used to find the structure e.g. X-ray, NMR
   */
  addTechnique(technique: ICodeableConcept): this {
    return this.addToArray('technique', technique);
  }

  /**
   * Add sourceDocument
   * Source of information for the structure
   */
  addSourceDocument(sourceDocument: IReference<'DocumentReference'>): this {
    return this.addToArray('sourceDocument', sourceDocument);
  }

  /**
   * Add representation
   * A depiction of the structure or characterization of the substance
   */
  addRepresentation(representation: ISubstanceDefinitionStructureRepresentation): this {
    return this.addToArray('representation', representation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinitionStructure instance
   */
  build(): SubstanceDefinitionStructure {
    return new SubstanceDefinitionStructure(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionStructure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionStructure> {
    const substanceDefinitionStructure = this.build();
    await substanceDefinitionStructure.validateOrThrow();
    return substanceDefinitionStructure;
  }
}
