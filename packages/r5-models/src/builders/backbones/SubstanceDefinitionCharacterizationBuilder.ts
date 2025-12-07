import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionCharacterization } from '../../models/backbones/SubstanceDefinitionCharacterization.js';
import type {
  IAttachment,
  ICodeableConcept,
  ISubstanceDefinitionCharacterization,
} from '@fhir-toolkit/r5-types';

/**
 * SubstanceDefinitionCharacterizationBuilder - Fluent builder for SubstanceDefinitionCharacterization backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionCharacterization = new SubstanceDefinitionCharacterizationBuilder()
 *   .setTechnique(value)
 *   .addFile({ ... })
 *   .build();
 */
export class SubstanceDefinitionCharacterizationBuilder extends BackboneElementBuilder<SubstanceDefinitionCharacterization, ISubstanceDefinitionCharacterization> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set technique
   * The method used to find the characterization e.g. HPLC
   */
  setTechnique(technique: ICodeableConcept): this {
    this.data.technique = technique;
    return this;
  }

  /**
   * Set form
   * Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form
   */
  setForm(form: ICodeableConcept): this {
    this.data.form = form;
    return this;
  }

  /**
   * Set description
   * The description or justification in support of the interpretation of the data file
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add file
   * The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis
   */
  addFile(file: IAttachment): this {
    return this.addToArray('file', file);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinitionCharacterization instance
   */
  build(): SubstanceDefinitionCharacterization {
    return new SubstanceDefinitionCharacterization(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionCharacterization instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionCharacterization> {
    const substanceDefinitionCharacterization = this.build();
    await substanceDefinitionCharacterization.validateOrThrow();
    return substanceDefinitionCharacterization;
  }
}
