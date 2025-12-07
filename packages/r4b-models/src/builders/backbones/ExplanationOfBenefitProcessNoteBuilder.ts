import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitProcessNote } from '../../models/backbones/ExplanationOfBenefitProcessNote.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitProcessNote,
  NoteTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * ExplanationOfBenefitProcessNoteBuilder - Fluent builder for ExplanationOfBenefitProcessNote backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitProcessNote = new ExplanationOfBenefitProcessNoteBuilder()
 *   .setNumber(value)
 *   .build();
 */
export class ExplanationOfBenefitProcessNoteBuilder extends BackboneElementBuilder<ExplanationOfBenefitProcessNote, IExplanationOfBenefitProcessNote> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set number
   * Note instance identifier
   */
  setNumber(number: number): this {
    this.data.number = number;
    return this;
  }

  /**
   * Set type
   * display | print | printoper
   */
  setType(type: NoteTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set text
   * Note explanatory text
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set language
   * Language of the text
   */
  setLanguage(language: ICodeableConcept): this {
    this.data.language = language;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ExplanationOfBenefitProcessNote instance
   */
  build(): ExplanationOfBenefitProcessNote {
    return new ExplanationOfBenefitProcessNote(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitProcessNote instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitProcessNote> {
    const explanationOfBenefitProcessNote = this.build();
    await explanationOfBenefitProcessNote.validateOrThrow();
    return explanationOfBenefitProcessNote;
  }
}
