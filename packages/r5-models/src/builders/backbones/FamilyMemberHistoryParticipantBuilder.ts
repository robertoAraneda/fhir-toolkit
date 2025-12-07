import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { FamilyMemberHistoryParticipant } from '../../models/backbones/FamilyMemberHistoryParticipant.js';
import type {
  ICodeableConcept,
  IFamilyMemberHistoryParticipant,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * FamilyMemberHistoryParticipantBuilder - Fluent builder for FamilyMemberHistoryParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const familyMemberHistoryParticipant = new FamilyMemberHistoryParticipantBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class FamilyMemberHistoryParticipantBuilder extends BackboneElementBuilder<FamilyMemberHistoryParticipant, IFamilyMemberHistoryParticipant> {
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
   * Who or what participated in the activities related to the family member history
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device' | 'Organization' | 'CareTeam'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the FamilyMemberHistoryParticipant instance
   */
  build(): FamilyMemberHistoryParticipant {
    return new FamilyMemberHistoryParticipant(this.data);
  }

  /**
   * Build and validate the FamilyMemberHistoryParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<FamilyMemberHistoryParticipant> {
    const familyMemberHistoryParticipant = this.build();
    await familyMemberHistoryParticipant.validateOrThrow();
    return familyMemberHistoryParticipant;
  }
}
