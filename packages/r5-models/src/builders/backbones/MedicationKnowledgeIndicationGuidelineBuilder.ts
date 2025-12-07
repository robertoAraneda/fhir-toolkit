import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeIndicationGuideline } from '../../models/backbones/MedicationKnowledgeIndicationGuideline.js';
import type {
  ICodeableReference,
  IMedicationKnowledgeIndicationGuideline,
  IMedicationKnowledgeIndicationGuidelineDosingGuideline,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationKnowledgeIndicationGuidelineBuilder - Fluent builder for MedicationKnowledgeIndicationGuideline backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeIndicationGuideline = new MedicationKnowledgeIndicationGuidelineBuilder()
 *   .addIndication({ ... })
 *   .build();
 */
export class MedicationKnowledgeIndicationGuidelineBuilder extends BackboneElementBuilder<MedicationKnowledgeIndicationGuideline, IMedicationKnowledgeIndicationGuideline> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add indication
   * Indication for use that applies to the specific administration guideline
   */
  addIndication(indication: ICodeableReference): this {
    return this.addToArray('indication', indication);
  }

  /**
   * Add dosingGuideline
   * Guidelines for dosage of the medication
   */
  addDosingGuideline(dosingGuideline: IMedicationKnowledgeIndicationGuidelineDosingGuideline): this {
    return this.addToArray('dosingGuideline', dosingGuideline);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeIndicationGuideline instance
   */
  build(): MedicationKnowledgeIndicationGuideline {
    return new MedicationKnowledgeIndicationGuideline(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeIndicationGuideline instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeIndicationGuideline> {
    const medicationKnowledgeIndicationGuideline = this.build();
    await medicationKnowledgeIndicationGuideline.validateOrThrow();
    return medicationKnowledgeIndicationGuideline;
  }
}
