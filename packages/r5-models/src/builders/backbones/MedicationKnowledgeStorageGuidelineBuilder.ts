import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeStorageGuideline } from '../../models/backbones/MedicationKnowledgeStorageGuideline.js';
import type {
  IAnnotation,
  IDuration,
  IMedicationKnowledgeStorageGuideline,
  IMedicationKnowledgeStorageGuidelineEnvironmentalSetting,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeStorageGuidelineBuilder - Fluent builder for MedicationKnowledgeStorageGuideline backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeStorageGuideline = new MedicationKnowledgeStorageGuidelineBuilder()
 *   .setReference(value)
 *   .addNote({ ... })
 *   .build();
 */
export class MedicationKnowledgeStorageGuidelineBuilder extends BackboneElementBuilder<MedicationKnowledgeStorageGuideline, IMedicationKnowledgeStorageGuideline> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reference
   * Reference to additional information
   */
  setReference(reference: string): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set stabilityDuration
   * Duration remains stable
   */
  setStabilityDuration(stabilityDuration: IDuration): this {
    this.data.stabilityDuration = stabilityDuration;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add note
   * Additional storage notes
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add environmentalSetting
   * Setting or value of environment for adequate storage
   */
  addEnvironmentalSetting(environmentalSetting: IMedicationKnowledgeStorageGuidelineEnvironmentalSetting): this {
    return this.addToArray('environmentalSetting', environmentalSetting);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeStorageGuideline instance
   */
  build(): MedicationKnowledgeStorageGuideline {
    return new MedicationKnowledgeStorageGuideline(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeStorageGuideline instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeStorageGuideline> {
    const medicationKnowledgeStorageGuideline = this.build();
    await medicationKnowledgeStorageGuideline.validateOrThrow();
    return medicationKnowledgeStorageGuideline;
  }
}
