import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeRegulatorySchedule } from '../../models/backbones/MedicationKnowledgeRegulatorySchedule.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeRegulatorySchedule,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationKnowledgeRegulatoryScheduleBuilder - Fluent builder for MedicationKnowledgeRegulatorySchedule backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeRegulatorySchedule = new MedicationKnowledgeRegulatoryScheduleBuilder()
 *   .setSchedule(value)
 *   .build();
 */
export class MedicationKnowledgeRegulatoryScheduleBuilder extends BackboneElementBuilder<MedicationKnowledgeRegulatorySchedule, IMedicationKnowledgeRegulatorySchedule> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set schedule
   * Specifies the specific drug schedule
   */
  setSchedule(schedule: ICodeableConcept): this {
    this.data.schedule = schedule;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeRegulatorySchedule instance
   */
  build(): MedicationKnowledgeRegulatorySchedule {
    return new MedicationKnowledgeRegulatorySchedule(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeRegulatorySchedule instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeRegulatorySchedule> {
    const medicationKnowledgeRegulatorySchedule = this.build();
    await medicationKnowledgeRegulatorySchedule.validateOrThrow();
    return medicationKnowledgeRegulatorySchedule;
  }
}
