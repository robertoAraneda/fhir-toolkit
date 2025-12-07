import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchStudyComparisonGroup } from '../../models/backbones/ResearchStudyComparisonGroup.js';
import type {
  ICodeableConcept,
  IReference,
  IResearchStudyComparisonGroup,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchStudyComparisonGroupBuilder - Fluent builder for ResearchStudyComparisonGroup backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudyComparisonGroup = new ResearchStudyComparisonGroupBuilder()
 *   .setLinkId(value)
 *   .addIntendedExposure({ ... })
 *   .build();
 */
export class ResearchStudyComparisonGroupBuilder extends BackboneElementBuilder<ResearchStudyComparisonGroup, IResearchStudyComparisonGroup> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set linkId
   * Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily
   */
  setLinkId(linkId: string): this {
    this.data.linkId = linkId;
    return this;
  }

  /**
   * Set name
   * Label for study comparisonGroup
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set type
   * Categorization of study comparisonGroup
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set description
   * Short explanation of study path
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set observedGroup
   * Group of participants who were enrolled in study comparisonGroup
   */
  setObservedGroup(observedGroup: IReference<'Group'>): this {
    this.data.observedGroup = observedGroup;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add intendedExposure
   * Interventions or exposures in this comparisonGroup or cohort
   */
  addIntendedExposure(intendedExposure: IReference<'EvidenceVariable'>): this {
    return this.addToArray('intendedExposure', intendedExposure);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudyComparisonGroup instance
   */
  build(): ResearchStudyComparisonGroup {
    return new ResearchStudyComparisonGroup(this.data);
  }

  /**
   * Build and validate the ResearchStudyComparisonGroup instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudyComparisonGroup> {
    const researchStudyComparisonGroup = this.build();
    await researchStudyComparisonGroup.validateOrThrow();
    return researchStudyComparisonGroup;
  }
}
