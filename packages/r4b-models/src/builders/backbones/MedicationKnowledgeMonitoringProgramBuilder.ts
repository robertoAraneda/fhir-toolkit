import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeMonitoringProgram } from '../../models/backbones/MedicationKnowledgeMonitoringProgram.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeMonitoringProgram,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationKnowledgeMonitoringProgramBuilder - Fluent builder for MedicationKnowledgeMonitoringProgram backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeMonitoringProgram = new MedicationKnowledgeMonitoringProgramBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgeMonitoringProgramBuilder extends BackboneElementBuilder<MedicationKnowledgeMonitoringProgram, IMedicationKnowledgeMonitoringProgram> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of program under which the medication is monitored
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set name
   * Name of the reviewing program
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeMonitoringProgram instance
   */
  build(): MedicationKnowledgeMonitoringProgram {
    return new MedicationKnowledgeMonitoringProgram(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeMonitoringProgram instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeMonitoringProgram> {
    const medicationKnowledgeMonitoringProgram = this.build();
    await medicationKnowledgeMonitoringProgram.validateOrThrow();
    return medicationKnowledgeMonitoringProgram;
  }
}
