import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchStudyRecruitment } from '../../models/backbones/ResearchStudyRecruitment.js';
import type {
  IReference,
  IResearchStudyRecruitment,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchStudyRecruitmentBuilder - Fluent builder for ResearchStudyRecruitment backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudyRecruitment = new ResearchStudyRecruitmentBuilder()
 *   .setTargetNumber(value)
 *   .build();
 */
export class ResearchStudyRecruitmentBuilder extends BackboneElementBuilder<ResearchStudyRecruitment, IResearchStudyRecruitment> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set targetNumber
   * Estimated total number of participants to be enrolled
   */
  setTargetNumber(targetNumber: number): this {
    this.data.targetNumber = targetNumber;
    return this;
  }

  /**
   * Set actualNumber
   * Actual total number of participants enrolled in study
   */
  setActualNumber(actualNumber: number): this {
    this.data.actualNumber = actualNumber;
    return this;
  }

  /**
   * Set eligibility
   * Inclusion and exclusion criteria
   */
  setEligibility(eligibility: IReference<'Group' | 'EvidenceVariable'>): this {
    this.data.eligibility = eligibility;
    return this;
  }

  /**
   * Set actualGroup
   * Group of participants who were enrolled in study
   */
  setActualGroup(actualGroup: IReference<'Group'>): this {
    this.data.actualGroup = actualGroup;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudyRecruitment instance
   */
  build(): ResearchStudyRecruitment {
    return new ResearchStudyRecruitment(this.data);
  }

  /**
   * Build and validate the ResearchStudyRecruitment instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudyRecruitment> {
    const researchStudyRecruitment = this.build();
    await researchStudyRecruitment.validateOrThrow();
    return researchStudyRecruitment;
  }
}
