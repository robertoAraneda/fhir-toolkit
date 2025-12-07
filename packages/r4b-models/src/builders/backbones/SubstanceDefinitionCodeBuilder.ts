import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SubstanceDefinitionCode } from '../../models/backbones/SubstanceDefinitionCode.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IReference,
  ISubstanceDefinitionCode,
} from '@fhir-toolkit/r4b-types';

/**
 * SubstanceDefinitionCodeBuilder - Fluent builder for SubstanceDefinitionCode backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const substanceDefinitionCode = new SubstanceDefinitionCodeBuilder()
 *   .setCode(value)
 *   .addNote({ ... })
 *   .build();
 */
export class SubstanceDefinitionCodeBuilder extends BackboneElementBuilder<SubstanceDefinitionCode, ISubstanceDefinitionCode> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * The specific code
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set status
   * Status of the code assignment, for example 'provisional', 'approved'
   */
  setStatus(status: ICodeableConcept): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set statusDate
   * The date at which the code status was changed
   */
  setStatusDate(statusDate: string): this {
    this.data.statusDate = statusDate;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Any comment can be provided in this field
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add source
   * Supporting literature
   */
  addSource(source: IReference<'DocumentReference'>): this {
    return this.addToArray('source', source);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SubstanceDefinitionCode instance
   */
  build(): SubstanceDefinitionCode {
    return new SubstanceDefinitionCode(this.data);
  }

  /**
   * Build and validate the SubstanceDefinitionCode instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SubstanceDefinitionCode> {
    const substanceDefinitionCode = this.build();
    await substanceDefinitionCode.validateOrThrow();
    return substanceDefinitionCode;
  }
}
