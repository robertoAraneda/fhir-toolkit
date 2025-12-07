import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CodeSystemConcept } from '../../models/backbones/CodeSystemConcept.js';
import type {
  ICodeSystemConcept,
  ICodeSystemConceptDesignation,
  ICodeSystemConceptProperty,
} from '@fhir-toolkit/r4b-types';

/**
 * CodeSystemConceptBuilder - Fluent builder for CodeSystemConcept backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const codeSystemConcept = new CodeSystemConceptBuilder()
 *   .setCode(value)
 *   .addDesignation({ ... })
 *   .build();
 */
export class CodeSystemConceptBuilder extends BackboneElementBuilder<CodeSystemConcept, ICodeSystemConcept> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Code that identifies concept
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set display
   * Text to display to the user
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  /**
   * Set definition
   * Formal definition
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add designation
   * Additional representations for the concept
   */
  addDesignation(designation: ICodeSystemConceptDesignation): this {
    return this.addToArray('designation', designation);
  }

  /**
   * Add property
   * Property value for the concept
   */
  addProperty(property: ICodeSystemConceptProperty): this {
    return this.addToArray('property', property);
  }

  /**
   * Add concept
   * Child Concepts (is-a/contains/categorizes)
   */
  addConcept(concept: ICodeSystemConcept): this {
    return this.addToArray('concept', concept);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CodeSystemConcept instance
   */
  build(): CodeSystemConcept {
    return new CodeSystemConcept(this.data);
  }

  /**
   * Build and validate the CodeSystemConcept instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CodeSystemConcept> {
    const codeSystemConcept = this.build();
    await codeSystemConcept.validateOrThrow();
    return codeSystemConcept;
  }
}
