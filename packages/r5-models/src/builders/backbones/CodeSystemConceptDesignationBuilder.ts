import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CodeSystemConceptDesignation } from '../../models/backbones/CodeSystemConceptDesignation.js';
import type {
  ICodeSystemConceptDesignation,
  ICoding,
} from '@fhir-toolkit/r5-types';

/**
 * CodeSystemConceptDesignationBuilder - Fluent builder for CodeSystemConceptDesignation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const codeSystemConceptDesignation = new CodeSystemConceptDesignationBuilder()
 *   .setLanguage(value)
 *   .addAdditionalUse({ ... })
 *   .build();
 */
export class CodeSystemConceptDesignationBuilder extends BackboneElementBuilder<CodeSystemConceptDesignation, ICodeSystemConceptDesignation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set language
   * Human language of the designation
   */
  setLanguage(language: string): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set use
   * Details how this designation would be used
   */
  setUse(use: ICoding): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set value
   * The text value for this designation
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add additionalUse
   * Additional ways how this designation would be used
   */
  addAdditionalUse(additionalUse: ICoding): this {
    return this.addToArray('additionalUse', additionalUse);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CodeSystemConceptDesignation instance
   */
  build(): CodeSystemConceptDesignation {
    return new CodeSystemConceptDesignation(this.data);
  }

  /**
   * Build and validate the CodeSystemConceptDesignation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CodeSystemConceptDesignation> {
    const codeSystemConceptDesignation = this.build();
    await codeSystemConceptDesignation.validateOrThrow();
    return codeSystemConceptDesignation;
  }
}
