import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchStudyObjective } from '../../models/backbones/ResearchStudyObjective.js';
import type {
  ICodeableConcept,
  IResearchStudyObjective,
} from '@fhir-toolkit/r4b-types';

/**
 * ResearchStudyObjectiveBuilder - Fluent builder for ResearchStudyObjective backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudyObjective = new ResearchStudyObjectiveBuilder()
 *   .setName(value)
 *   .build();
 */
export class ResearchStudyObjectiveBuilder extends BackboneElementBuilder<ResearchStudyObjective, IResearchStudyObjective> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Label for the objective
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set type
   * primary | secondary | exploratory
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudyObjective instance
   */
  build(): ResearchStudyObjective {
    return new ResearchStudyObjective(this.data);
  }

  /**
   * Build and validate the ResearchStudyObjective instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudyObjective> {
    const researchStudyObjective = this.build();
    await researchStudyObjective.validateOrThrow();
    return researchStudyObjective;
  }
}
