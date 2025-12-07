import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionStructureRepresentation } from '../../models/backbones/SubstanceDefinitionStructureRepresentation.js';
import type {
  ICodeableConcept,
  IReference,
  ISubstanceDefinitionStructureRepresentation,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceDefinitionStructureRepresentationBuilder - Fluent builder for SubstanceDefinitionStructureRepresentation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionStructureRepresentation = new SubstanceDefinitionStructureRepresentationBuilder()
 *   .setType(value)
 *   .build();
 */
export class SubstanceDefinitionStructureRepresentationBuilder extends BackboneElementBuilder<SubstanceDefinitionStructureRepresentation, ISubstanceDefinitionStructureRepresentation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The kind of structural representation (e.g. full, partial)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set representation
   * The structural representation as a text string in a standard format
   */
  setRepresentation(representation: string): this {
    this.data.representation = representation;
    return this;
  }

  /**
   * Set format
   * The format of the representation e.g. InChI, SMILES, MOLFILE (note: not the physical file format)
   */
  setFormat(format: ICodeableConcept): this {
    this.data.format = format;
    return this;
  }

  /**
   * Set document
   * An attachment with the structural representation e.g. a structure graphic or AnIML file
   */
  setDocument(document: IReference<'DocumentReference'>): this {
    this.data.document = document;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinitionStructureRepresentation instance
   */
  build(): SubstanceDefinitionStructureRepresentation {
    return new SubstanceDefinitionStructureRepresentation(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionStructureRepresentation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionStructureRepresentation> {
    const substanceDefinitionStructureRepresentation = this.build();
    await substanceDefinitionStructureRepresentation.validateOrThrow();
    return substanceDefinitionStructureRepresentation;
  }
}
