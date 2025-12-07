import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeMonograph } from '../../models/backbones/MedicationKnowledgeMonograph.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeMonograph,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationKnowledgeMonographBuilder - Fluent builder for MedicationKnowledgeMonograph backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeMonograph = new MedicationKnowledgeMonographBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgeMonographBuilder extends BackboneElementBuilder<MedicationKnowledgeMonograph, IMedicationKnowledgeMonograph> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The category of medication document
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set source
   * Associated documentation about the medication
   */
  setSource(source: IReference<'DocumentReference' | 'Media'>): this {
    this.data.source = source;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeMonograph instance
   */
  build(): MedicationKnowledgeMonograph {
    return new MedicationKnowledgeMonograph(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeMonograph instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeMonograph> {
    const medicationKnowledgeMonograph = this.build();
    await medicationKnowledgeMonograph.validateOrThrow();
    return medicationKnowledgeMonograph;
  }
}
