import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ExplanationOfBenefitCareTeam } from '../../models/backbones/ExplanationOfBenefitCareTeam.js';
import type {
  ICodeableConcept,
  IExplanationOfBenefitCareTeam,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ExplanationOfBenefitCareTeamBuilder - Fluent builder for ExplanationOfBenefitCareTeam backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const explanationOfBenefitCareTeam = new ExplanationOfBenefitCareTeamBuilder()
 *   .setSequence(value)
 *   .build();
 */
export class ExplanationOfBenefitCareTeamBuilder extends BackboneElementBuilder<ExplanationOfBenefitCareTeam, IExplanationOfBenefitCareTeam> {
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
   * Build the ExplanationOfBenefitCareTeam instance
   */
  build(): ExplanationOfBenefitCareTeam {
    return new ExplanationOfBenefitCareTeam(this.data);
  }

  /**
   * Build and validate the ExplanationOfBenefitCareTeam instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ExplanationOfBenefitCareTeam> {
    const explanationOfBenefitCareTeam = this.build();
    await explanationOfBenefitCareTeam.validateOrThrow();
    return explanationOfBenefitCareTeam;
  }
}
