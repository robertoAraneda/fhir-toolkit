import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceSpecificationStructureRepresentation } from '../../models/backbones/SubstanceSpecificationStructureRepresentation.js';
import type {
  IAttachment,
  ICodeableConcept,
  ISubstanceSpecificationStructureRepresentation,
} from '@fhir-toolkit/r4-types';

/**
 * SubstanceSpecificationStructureRepresentationBuilder - Fluent builder for SubstanceSpecificationStructureRepresentation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceSpecificationStructureRepresentation = new SubstanceSpecificationStructureRepresentationBuilder()
 *   .setType(value)
 *   .build();
 */
export class SubstanceSpecificationStructureRepresentationBuilder extends BackboneElementBuilder<SubstanceSpecificationStructureRepresentation, ISubstanceSpecificationStructureRepresentation> {
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
   * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX
   */
  setRepresentation(representation: string): this {
    this.data.representation = representation;
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
   * Build the SubstanceSpecificationStructureRepresentation instance
   */
  build(): SubstanceSpecificationStructureRepresentation {
    return new SubstanceSpecificationStructureRepresentation(this.data);
  }

  /**
   * Build and validate the SubstanceSpecificationStructureRepresentation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceSpecificationStructureRepresentation> {
    const substanceSpecificationStructureRepresentation = this.build();
    await substanceSpecificationStructureRepresentation.validateOrThrow();
    return substanceSpecificationStructureRepresentation;
  }
}
