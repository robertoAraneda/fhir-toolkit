import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ValueSetComposeIncludeConcept } from '../../models/backbones/ValueSetComposeIncludeConcept.js';
import type {
  IValueSetComposeIncludeConcept,
  IValueSetComposeIncludeConceptDesignation,
} from '@fhir-toolkit/r4-types';

/**
 * ValueSetComposeIncludeConceptBuilder - Fluent builder for ValueSetComposeIncludeConcept backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const valueSetComposeIncludeConcept = new ValueSetComposeIncludeConceptBuilder()
 *   .setCode(value)
 *   .addDesignation({ ... })
 *   .build();
 */
export class ValueSetComposeIncludeConceptBuilder extends BackboneElementBuilder<ValueSetComposeIncludeConcept, IValueSetComposeIncludeConcept> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Code or expression from system
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set display
   * Text to display for this code for this value set in this valueset
   */
  setDisplay(display: string): this {
    this.data.display = display;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add designation
   * Additional representations for this concept
   */
  addDesignation(designation: IValueSetComposeIncludeConceptDesignation): this {
    return this.addToArray('designation', designation);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ValueSetComposeIncludeConcept instance
   */
  build(): ValueSetComposeIncludeConcept {
    return new ValueSetComposeIncludeConcept(this.data);
  }

  /**
   * Build and validate the ValueSetComposeIncludeConcept instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ValueSetComposeIncludeConcept> {
    const valueSetComposeIncludeConcept = this.build();
    await valueSetComposeIncludeConcept.validateOrThrow();
    return valueSetComposeIncludeConcept;
  }
}
