import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ClaimCareTeam } from '../../models/backbones/ClaimCareTeam.js';
import type {
  IClaimCareTeam,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ClaimCareTeamBuilder - Fluent builder for ClaimCareTeam backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const claimCareTeam = new ClaimCareTeamBuilder()
 *   .setSequence(value)
 *   .build();
 */
export class ClaimCareTeamBuilder extends BackboneElementBuilder<ClaimCareTeam, IClaimCareTeam> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set sequence
   * Order of care team
   */
  setSequence(sequence: number): this {
    this.data.sequence = sequence;
    return this;
  }

  /**
   * Set provider
   * Practitioner or organization
   */
  setProvider(provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.provider = provider;
    return this;
  }

  /**
   * Set responsible
   * Indicator of the lead practitioner
   */
  setResponsible(responsible: boolean): this {
    this.data.responsible = responsible;
    return this;
  }

  /**
   * Set role
   * Function within the team
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set specialty
   * Practitioner or provider specialization
   */
  setSpecialty(specialty: ICodeableConcept): this {
    this.data.specialty = specialty;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ClaimCareTeam instance
   */
  build(): ClaimCareTeam {
    return new ClaimCareTeam(this.data);
  }

  /**
   * Build and validate the ClaimCareTeam instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ClaimCareTeam> {
    const claimCareTeam = this.build();
    await claimCareTeam.validateOrThrow();
    return claimCareTeam;
  }
}
