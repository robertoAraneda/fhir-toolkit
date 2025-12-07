import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { MedicationDispenseSubstitution } from '../../models/backbones/MedicationDispenseSubstitution.js';
import type {
  ICodeableConcept,
  IMedicationDispenseSubstitution,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * MedicationDispenseSubstitutionBuilder - Fluent builder for MedicationDispenseSubstitution backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicationDispenseSubstitution = new MedicationDispenseSubstitutionBuilder()
 *   .setWasSubstituted(value)
 *   .addReason({ ... })
 *   .build();
 */
export class MedicationDispenseSubstitutionBuilder extends BackboneElementBuilder<MedicationDispenseSubstitution, IMedicationDispenseSubstitution> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set wasSubstituted
   * Whether a substitution was or was not performed on the dispense
   */
  setWasSubstituted(wasSubstituted: boolean): this {
    this.data.wasSubstituted = wasSubstituted;
    return this;
  }

  /**
   * Set type
   * Code signifying whether a different drug was dispensed from what was prescribed
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add reason
   * Why was substitution made
   */
  addReason(reason: ICodeableConcept): this {
    return this.addToArray('reason', reason);
  }

  /**
   * Add responsibleParty
   * Who is responsible for the substitution
   */
  addResponsibleParty(responsibleParty: IReference<'Practitioner' | 'PractitionerRole'>): this {
    return this.addToArray('responsibleParty', responsibleParty);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicationDispenseSubstitution instance
   */
  build(): MedicationDispenseSubstitution {
    return new MedicationDispenseSubstitution(this.data);
  }

  /**
   * Build and validate the MedicationDispenseSubstitution instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicationDispenseSubstitution> {
    const medicationDispenseSubstitution = this.build();
    await medicationDispenseSubstitution.validateOrThrow();
    return medicationDispenseSubstitution;
  }
}
