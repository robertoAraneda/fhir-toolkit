import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AllergyIntoleranceParticipant } from '../../models/backbones/AllergyIntoleranceParticipant.js';
import type {
  IAllergyIntoleranceParticipant,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AllergyIntoleranceParticipantBuilder - Fluent builder for AllergyIntoleranceParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const allergyIntoleranceParticipant = new AllergyIntoleranceParticipantBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class AllergyIntoleranceParticipantBuilder extends BackboneElementBuilder<AllergyIntoleranceParticipant, IAllergyIntoleranceParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Type of involvement
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Who or what participated in the activities related to the allergy or intolerance
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device' | 'Organization' | 'CareTeam'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AllergyIntoleranceParticipant instance
   */
  build(): AllergyIntoleranceParticipant {
    return new AllergyIntoleranceParticipant(this.data);
  }

  /**
   * Build and validate the AllergyIntoleranceParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AllergyIntoleranceParticipant> {
    const allergyIntoleranceParticipant = this.build();
    await allergyIntoleranceParticipant.validateOrThrow();
    return allergyIntoleranceParticipant;
  }
}
