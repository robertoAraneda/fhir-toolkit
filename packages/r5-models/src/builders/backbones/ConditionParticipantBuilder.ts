import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConditionParticipant } from '../../models/backbones/ConditionParticipant.js';
import type {
  ICodeableConcept,
  IConditionParticipant,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ConditionParticipantBuilder - Fluent builder for ConditionParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionParticipant = new ConditionParticipantBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class ConditionParticipantBuilder extends BackboneElementBuilder<ConditionParticipant, IConditionParticipant> {
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
   * Who or what participated in the activities related to the condition
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device' | 'Organization' | 'CareTeam'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionParticipant instance
   */
  build(): ConditionParticipant {
    return new ConditionParticipant(this.data);
  }

  /**
   * Build and validate the ConditionParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionParticipant> {
    const conditionParticipant = this.build();
    await conditionParticipant.validateOrThrow();
    return conditionParticipant;
  }
}
