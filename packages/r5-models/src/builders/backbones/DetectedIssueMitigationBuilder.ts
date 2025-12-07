import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { DetectedIssueMitigation } from '../../models/backbones/DetectedIssueMitigation.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IDetectedIssueMitigation,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * DetectedIssueMitigationBuilder - Fluent builder for DetectedIssueMitigation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const detectedIssueMitigation = new DetectedIssueMitigationBuilder()
 *   .setAction(value)
 *   .addNote({ ... })
 *   .build();
 */
export class DetectedIssueMitigationBuilder extends BackboneElementBuilder<DetectedIssueMitigation, IDetectedIssueMitigation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set action
   * What mitigation?
   */
  setAction(action: ICodeableConcept): this {
    this.data.action = action;
    return this;
  }

  /**
   * Set date
   * Date committed
   */
  setDate(date: string): this {
    this.data.date = date;
    return this;
  }

  /**
   * Set author
   * Who is committing?
   */
  setAuthor(author: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.author = author;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Additional notes about the mitigation
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the DetectedIssueMitigation instance
   */
  build(): DetectedIssueMitigation {
    return new DetectedIssueMitigation(this.data);
  }

  /**
   * Build and validate the DetectedIssueMitigation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<DetectedIssueMitigation> {
    const detectedIssueMitigation = this.build();
    await detectedIssueMitigation.validateOrThrow();
    return detectedIssueMitigation;
  }
}
