import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CareTeamParticipant } from '../../models/backbones/CareTeamParticipant.js';
import type {
  ICareTeamParticipant,
  ICodeableConcept,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * CareTeamParticipantBuilder - Fluent builder for CareTeamParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const careTeamParticipant = new CareTeamParticipantBuilder()
 *   .setMember(value)
 *   .addRole({ ... })
 *   .build();
 */
export class CareTeamParticipantBuilder extends BackboneElementBuilder<CareTeamParticipant, ICareTeamParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set member
   * Who is involved
   */
  setMember(member: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Organization' | 'CareTeam'>): this {
    this.data.member = member;
    return this;
  }

  /**
   * Set onBehalfOf
   * Organization of the practitioner
   */
  setOnBehalfOf(onBehalfOf: IReference<'Organization'>): this {
    this.data.onBehalfOf = onBehalfOf;
    return this;
  }

  /**
   * Set period
   * Time period of participant
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add role
   * Type of involvement
   */
  addRole(role: ICodeableConcept): this {
    return this.addToArray('role', role);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CareTeamParticipant instance
   */
  build(): CareTeamParticipant {
    return new CareTeamParticipant(this.data);
  }

  /**
   * Build and validate the CareTeamParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CareTeamParticipant> {
    const careTeamParticipant = this.build();
    await careTeamParticipant.validateOrThrow();
    return careTeamParticipant;
  }
}
