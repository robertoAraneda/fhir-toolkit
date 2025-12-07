import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EncounterParticipant } from '../../models/backbones/EncounterParticipant.js';
import type {
  ICodeableConcept,
  IEncounterParticipant,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * EncounterParticipantBuilder - Fluent builder for EncounterParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const encounterParticipant = new EncounterParticipantBuilder()
 *   .setPeriod(value)
 *   .addType({ ... })
 *   .build();
 */
export class EncounterParticipantBuilder extends BackboneElementBuilder<EncounterParticipant, IEncounterParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set period
   * Period of time during the encounter that the participant participated
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set individual
   * Persons involved in the encounter other than the patient
   */
  setIndividual(individual: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.individual = individual;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * Role of participant in encounter
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EncounterParticipant instance
   */
  build(): EncounterParticipant {
    return new EncounterParticipant(this.data);
  }

  /**
   * Build and validate the EncounterParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EncounterParticipant> {
    const encounterParticipant = this.build();
    await encounterParticipant.validateOrThrow();
    return encounterParticipant;
  }
}
