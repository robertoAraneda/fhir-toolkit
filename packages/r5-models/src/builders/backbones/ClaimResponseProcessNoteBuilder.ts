import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimResponseProcessNote } from '../../models/backbones/ClaimResponseProcessNote.js';
import type {
  IClaimResponseProcessNote,
  ICodeableConcept,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimResponseProcessNoteBuilder - Fluent builder for ClaimResponseProcessNote backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimResponseProcessNote = new ClaimResponseProcessNoteBuilder()
 *   .setNumber(value)
 *   .build();
 */
export class ClaimResponseProcessNoteBuilder extends BackboneElementBuilder<ClaimResponseProcessNote, IClaimResponseProcessNote> {
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
   * Note purpose
   */
  setType(type: ICodeableConcept): this {
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
   * Build the ClaimResponseProcessNote instance
   */
  build(): ClaimResponseProcessNote {
    return new ClaimResponseProcessNote(this.data);
  }

  /**
   * Build and validate the ClaimResponseProcessNote instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimResponseProcessNote> {
    const claimResponseProcessNote = this.build();
    await claimResponseProcessNote.validateOrThrow();
    return claimResponseProcessNote;
  }
}
