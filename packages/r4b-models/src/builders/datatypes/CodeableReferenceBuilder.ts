import { ElementBuilder } from '../base/ElementBuilder.js';
import { CodeableReference } from '../../models/datatypes/CodeableReference.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CodeableReferenceBuilder - Fluent builder for CodeableReference datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const codeableReference = new CodeableReferenceBuilder()
 *   .setConcept(value)
 *   .build();
 */
export class CodeableReferenceBuilder extends ElementBuilder<CodeableReference, ICodeableReference> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set concept
   * Reference to a concept (by class)
   */
  setConcept(concept: ICodeableConcept): this {
    this.data.concept = concept;
    return this;
  }

  /**
   * Set reference
   * Reference to a resource (by instance)
   */
  setReference(reference: IReference): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CodeableReference instance
   */
  build(): CodeableReference {
    return new CodeableReference(this.data);
  }

  /**
   * Build and validate the CodeableReference instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CodeableReference> {
    const codeableReference = this.build();
    await codeableReference.validateOrThrow();
    return codeableReference;
  }
}
