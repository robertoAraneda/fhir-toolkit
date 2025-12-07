import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationStatementAdherence } from '../../models/backbones/MedicationStatementAdherence.js';
import type {
  ICodeableConcept,
  IMedicationStatementAdherence,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationStatementAdherenceBuilder - Fluent builder for MedicationStatementAdherence backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationStatementAdherence = new MedicationStatementAdherenceBuilder()
 *   .setCode(value)
 *   .build();
 */
export class MedicationStatementAdherenceBuilder extends BackboneElementBuilder<MedicationStatementAdherence, IMedicationStatementAdherence> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Type of adherence
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set reason
   * Details of the reason for the current use of the medication
   */
  setReason(reason: ICodeableConcept): this {
    this.data.reason = reason;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationStatementAdherence instance
   */
  build(): MedicationStatementAdherence {
    return new MedicationStatementAdherence(this.data);
  }

  /**
   * Build and validate the MedicationStatementAdherence instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationStatementAdherence> {
    const medicationStatementAdherence = this.build();
    await medicationStatementAdherence.validateOrThrow();
    return medicationStatementAdherence;
  }
}
