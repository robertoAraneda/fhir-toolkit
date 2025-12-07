import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeRegulatorySubstitution } from '../../models/backbones/MedicationKnowledgeRegulatorySubstitution.js';
import type {
  ICodeableConcept,
  IMedicationKnowledgeRegulatorySubstitution,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationKnowledgeRegulatorySubstitutionBuilder - Fluent builder for MedicationKnowledgeRegulatorySubstitution backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeRegulatorySubstitution = new MedicationKnowledgeRegulatorySubstitutionBuilder()
 *   .setType(value)
 *   .build();
 */
export class MedicationKnowledgeRegulatorySubstitutionBuilder extends BackboneElementBuilder<MedicationKnowledgeRegulatorySubstitution, IMedicationKnowledgeRegulatorySubstitution> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Specifies the type of substitution allowed
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set allowed
   * Specifies if regulation allows for changes in the medication when dispensing
   */
  setAllowed(allowed: boolean): this {
    this.data.allowed = allowed;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeRegulatorySubstitution instance
   */
  build(): MedicationKnowledgeRegulatorySubstitution {
    return new MedicationKnowledgeRegulatorySubstitution(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeRegulatorySubstitution instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeRegulatorySubstitution> {
    const medicationKnowledgeRegulatorySubstitution = this.build();
    await medicationKnowledgeRegulatorySubstitution.validateOrThrow();
    return medicationKnowledgeRegulatorySubstitution;
  }
}
