import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationDispensePerformer } from '../../models/backbones/MedicationDispensePerformer.js';
import type {
  ICodeableConcept,
  IMedicationDispensePerformer,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicationDispensePerformerBuilder - Fluent builder for MedicationDispensePerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationDispensePerformer = new MedicationDispensePerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class MedicationDispensePerformerBuilder extends BackboneElementBuilder<MedicationDispensePerformer, IMedicationDispensePerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Who performed the dispense and what they did
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Individual who was performing
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationDispensePerformer instance
   */
  build(): MedicationDispensePerformer {
    return new MedicationDispensePerformer(this.data);
  }

  /**
   * Build and validate the MedicationDispensePerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationDispensePerformer> {
    const medicationDispensePerformer = this.build();
    await medicationDispensePerformer.validateOrThrow();
    return medicationDispensePerformer;
  }
}
