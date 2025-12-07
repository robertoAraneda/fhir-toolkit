import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationKnowledgeRegulatory } from '../../models/backbones/MedicationKnowledgeRegulatory.js';
import type {
  IMedicationKnowledgeRegulatory,
  IMedicationKnowledgeRegulatoryMaxDispense,
  IMedicationKnowledgeRegulatorySchedule,
  IMedicationKnowledgeRegulatorySubstitution,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationKnowledgeRegulatoryBuilder - Fluent builder for MedicationKnowledgeRegulatory backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationKnowledgeRegulatory = new MedicationKnowledgeRegulatoryBuilder()
 *   .setRegulatoryAuthority(value)
 *   .addSubstitution({ ... })
 *   .build();
 */
export class MedicationKnowledgeRegulatoryBuilder extends BackboneElementBuilder<MedicationKnowledgeRegulatory, IMedicationKnowledgeRegulatory> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set regulatoryAuthority
   * Specifies the authority of the regulation
   */
  setRegulatoryAuthority(regulatoryAuthority: IReference<'Organization'>): this {
    this.data.regulatoryAuthority = regulatoryAuthority;
    return this;
  }

  /**
   * Set maxDispense
   * The maximum number of units of the medication that can be dispensed in a period
   */
  setMaxDispense(maxDispense: IMedicationKnowledgeRegulatoryMaxDispense): this {
    this.data.maxDispense = maxDispense;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add substitution
   * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
   */
  addSubstitution(substitution: IMedicationKnowledgeRegulatorySubstitution): this {
    return this.addToArray('substitution', substitution);
  }

  /**
   * Add schedule
   * Specifies the schedule of a medication in jurisdiction
   */
  addSchedule(schedule: IMedicationKnowledgeRegulatorySchedule): this {
    return this.addToArray('schedule', schedule);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationKnowledgeRegulatory instance
   */
  build(): MedicationKnowledgeRegulatory {
    return new MedicationKnowledgeRegulatory(this.data);
  }

  /**
   * Build and validate the MedicationKnowledgeRegulatory instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationKnowledgeRegulatory> {
    const medicationKnowledgeRegulatory = this.build();
    await medicationKnowledgeRegulatory.validateOrThrow();
    return medicationKnowledgeRegulatory;
  }
}
