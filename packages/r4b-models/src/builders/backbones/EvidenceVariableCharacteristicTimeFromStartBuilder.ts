import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableCharacteristicTimeFromStart } from '../../models/backbones/EvidenceVariableCharacteristicTimeFromStart.js';
import type {
  IAnnotation,
  IEvidenceVariableCharacteristicTimeFromStart,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceVariableCharacteristicTimeFromStartBuilder - Fluent builder for EvidenceVariableCharacteristicTimeFromStart backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableCharacteristicTimeFromStart = new EvidenceVariableCharacteristicTimeFromStartBuilder()
 *   .setDescription(value)
 *   .addNote({ ... })
 *   .build();
 */
export class EvidenceVariableCharacteristicTimeFromStartBuilder extends BackboneElementBuilder<EvidenceVariableCharacteristicTimeFromStart, IEvidenceVariableCharacteristicTimeFromStart> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Human readable description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set quantity
   * Used to express the observation at a defined amount of time after the study start
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set range
   * Used to express the observation within a period after the study start
   */
  setRange(range: IRange): this {
    this.data.range = range;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Used for footnotes or explanatory notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariableCharacteristicTimeFromStart instance
   */
  build(): EvidenceVariableCharacteristicTimeFromStart {
    return new EvidenceVariableCharacteristicTimeFromStart(this.data);
  }

  /**
   * Build and validate the EvidenceVariableCharacteristicTimeFromStart instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariableCharacteristicTimeFromStart> {
    const evidenceVariableCharacteristicTimeFromStart = this.build();
    await evidenceVariableCharacteristicTimeFromStart.validateOrThrow();
    return evidenceVariableCharacteristicTimeFromStart;
  }
}
