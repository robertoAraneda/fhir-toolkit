import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetComposeIncludeConceptDesignation } from '../../models/backbones/ValueSetComposeIncludeConceptDesignation.js';
import type {
  ICoding,
  IValueSetComposeIncludeConceptDesignation,
} from '@fhir-toolkit/r4b-types';

/**
 * ValueSetComposeIncludeConceptDesignationBuilder - Fluent builder for ValueSetComposeIncludeConceptDesignation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetComposeIncludeConceptDesignation = new ValueSetComposeIncludeConceptDesignationBuilder()
 *   .setLanguage(value)
 *   .build();
 */
export class ValueSetComposeIncludeConceptDesignationBuilder extends BackboneElementBuilder<ValueSetComposeIncludeConceptDesignation, IValueSetComposeIncludeConceptDesignation> {
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
   * Types of uses of designations
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
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetComposeIncludeConceptDesignation instance
   */
  build(): ValueSetComposeIncludeConceptDesignation {
    return new ValueSetComposeIncludeConceptDesignation(this.data);
  }

  /**
   * Build and validate the ValueSetComposeIncludeConceptDesignation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetComposeIncludeConceptDesignation> {
    const valueSetComposeIncludeConceptDesignation = this.build();
    await valueSetComposeIncludeConceptDesignation.validateOrThrow();
    return valueSetComposeIncludeConceptDesignation;
  }
}
