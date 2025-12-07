import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeAdministrationGuidelinesDosage } from '../../models/backbones/MedicationKnowledgeAdministrationGuidelinesDosage.js';
import type {
  ICodeableConcept,
  IDosage,
  IMedicationKnowledgeAdministrationGuidelinesDosage,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationKnowledgeAdministrationGuidelinesDosageBuilder - Fluent builder for MedicationKnowledgeAdministrationGuidelinesDosage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeAdministrationGuidelinesDosage = new MedicationKnowledgeAdministrationGuidelinesDosageBuilder()
 *   .setType(value)
 *   .addDosage({ ... })
 *   .build();
 */
export class MedicationKnowledgeAdministrationGuidelinesDosageBuilder extends BackboneElementBuilder<MedicationKnowledgeAdministrationGuidelinesDosage, IMedicationKnowledgeAdministrationGuidelinesDosage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of dosage
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add dosage
   * Dosage for the medication for the specific guidelines
   */
  addDosage(dosage: IDosage): this {
    return this.addToArray('dosage', dosage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeAdministrationGuidelinesDosage instance
   */
  build(): MedicationKnowledgeAdministrationGuidelinesDosage {
    return new MedicationKnowledgeAdministrationGuidelinesDosage(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeAdministrationGuidelinesDosage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeAdministrationGuidelinesDosage> {
    const medicationKnowledgeAdministrationGuidelinesDosage = this.build();
    await medicationKnowledgeAdministrationGuidelinesDosage.validateOrThrow();
    return medicationKnowledgeAdministrationGuidelinesDosage;
  }
}
