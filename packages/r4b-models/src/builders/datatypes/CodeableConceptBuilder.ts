import { ElementBuilder } from '../base/ElementBuilder.js';
import { CodeableConcept } from '../../models/datatypes/CodeableConcept.js';
import type {
  ICodeableConcept,
  ICoding,
} from '@fhir-toolkit/r4b-types';

/**
 * CodeableConceptBuilder - Fluent builder for CodeableConcept datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const codeableConcept = new CodeableConceptBuilder()
 *   .setText(value)
 *   .addCoding({ ... })
 *   .build();
 */
export class CodeableConceptBuilder extends ElementBuilder<CodeableConcept, ICodeableConcept> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set text
   * Plain text representation of the concept
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add coding
   * Code defined by a terminology system
   */
  addCoding(coding: ICoding): this {
    return this.addToArray('coding', coding);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CodeableConcept instance
   */
  build(): CodeableConcept {
    return new CodeableConcept(this.data);
  }

  /**
   * Build and validate the CodeableConcept instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CodeableConcept> {
    const codeableConcept = this.build();
    await codeableConcept.validateOrThrow();
    return codeableConcept;
  }
}
