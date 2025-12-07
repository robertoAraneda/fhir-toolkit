import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstancePolymerRepeatRepeatUnitStructuralRepresentation } from '../../models/backbones/SubstancePolymerRepeatRepeatUnitStructuralRepresentation.js';
import type {
  IAttachment,
  ICodeableConcept,
  ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
} from '@fhir-toolkit/r5-types';

/**
 * SubstancePolymerRepeatRepeatUnitStructuralRepresentationBuilder - Fluent builder for SubstancePolymerRepeatRepeatUnitStructuralRepresentation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substancePolymerRepeatRepeatUnitStructuralRepresentation = new SubstancePolymerRepeatRepeatUnitStructuralRepresentationBuilder()
 *   .setType(value)
 *   .build();
 */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentationBuilder extends BackboneElementBuilder<SubstancePolymerRepeatRepeatUnitStructuralRepresentation, ISubstancePolymerRepeatRepeatUnitStructuralRepresentation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of structure (e.g. Full, Partial, Representative)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set representation
   * The structural representation as text string in a standard format e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF
   */
  setRepresentation(representation: string): this {
    this.data.representation = representation;
    return this;
  }

  /**
   * Set format
   * The format of the representation e.g. InChI, SMILES, MOLFILE, CDX, SDF, PDB, mmCIF
   */
  setFormat(format: ICodeableConcept): this {
    this.data.format = format;
    return this;
  }

  /**
   * Set attachment
   * An attached file with the structural representation
   */
  setAttachment(attachment: IAttachment): this {
    this.data.attachment = attachment;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstancePolymerRepeatRepeatUnitStructuralRepresentation instance
   */
  build(): SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    return new SubstancePolymerRepeatRepeatUnitStructuralRepresentation(this.data);
  }

  /**
   * Build and validate the SubstancePolymerRepeatRepeatUnitStructuralRepresentation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstancePolymerRepeatRepeatUnitStructuralRepresentation> {
    const substancePolymerRepeatRepeatUnitStructuralRepresentation = this.build();
    await substancePolymerRepeatRepeatUnitStructuralRepresentation.validateOrThrow();
    return substancePolymerRepeatRepeatUnitStructuralRepresentation;
  }
}
