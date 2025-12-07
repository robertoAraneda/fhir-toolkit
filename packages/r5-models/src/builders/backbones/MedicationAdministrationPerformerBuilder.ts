import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationAdministrationPerformer } from '../../models/backbones/MedicationAdministrationPerformer.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IMedicationAdministrationPerformer,
} from '@fhir-toolkit/r5-types';

/**
 * MedicationAdministrationPerformerBuilder - Fluent builder for MedicationAdministrationPerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationAdministrationPerformer = new MedicationAdministrationPerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class MedicationAdministrationPerformerBuilder extends BackboneElementBuilder<MedicationAdministrationPerformer, IMedicationAdministrationPerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Type of performance
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Who or what performed the medication administration
   */
  setActor(actor: ICodeableReference): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationAdministrationPerformer instance
   */
  build(): MedicationAdministrationPerformer {
    return new MedicationAdministrationPerformer(this.data);
  }

  /**
   * Build and validate the MedicationAdministrationPerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationAdministrationPerformer> {
    const medicationAdministrationPerformer = this.build();
    await medicationAdministrationPerformer.validateOrThrow();
    return medicationAdministrationPerformer;
  }
}
