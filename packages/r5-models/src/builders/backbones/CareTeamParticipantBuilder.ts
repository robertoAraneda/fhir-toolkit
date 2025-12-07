import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CareTeamParticipant } from '../../models/backbones/CareTeamParticipant.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICareTeamParticipant,
  ICodeableConcept,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/**
 * CareTeamParticipantBuilder - Fluent builder for CareTeamParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const careTeamParticipant = new CareTeamParticipantBuilder()
 *   .setRole(value)
 *   .build();
 */
export class CareTeamParticipantBuilder extends BackboneElementBuilder<CareTeamParticipant, ICareTeamParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * Type of involvement
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

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

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set coverage choice type (coveragePeriod, coverageTiming)
   * @param type - 'Period' | 'Timing'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCoverage('Period', value)
   */
  setCoverage<T extends 'Period' | 'Timing'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `coverage${type}` as keyof ICareTeamParticipant;
    const otherKeys: (keyof ICareTeamParticipant)[] = [];
    if (type !== 'Period') {
      otherKeys.push('coveragePeriod' as keyof ICareTeamParticipant);
      otherKeys.push('_coveragePeriod' as keyof ICareTeamParticipant);
    }
    if (type !== 'Timing') {
      otherKeys.push('coverageTiming' as keyof ICareTeamParticipant);
      otherKeys.push('_coverageTiming' as keyof ICareTeamParticipant);
    }
    return this.setChoiceType(key, value, otherKeys);
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
