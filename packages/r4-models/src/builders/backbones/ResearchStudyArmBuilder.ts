import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchStudyArm } from '../../models/backbones/ResearchStudyArm.js';
import type {
  ICodeableConcept,
  IResearchStudyArm,
} from '@fhir-toolkit/r4-types';

/**
 * ResearchStudyArmBuilder - Fluent builder for ResearchStudyArm backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudyArm = new ResearchStudyArmBuilder()
 *   .setName(value)
 *   .build();
 */
export class ResearchStudyArmBuilder extends BackboneElementBuilder<ResearchStudyArm, IResearchStudyArm> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Label for study arm
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set type
   * Categorization of study arm
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

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudyArm instance
   */
  build(): ResearchStudyArm {
    return new ResearchStudyArm(this.data);
  }

  /**
   * Build and validate the ResearchStudyArm instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudyArm> {
    const researchStudyArm = this.build();
    await researchStudyArm.validateOrThrow();
    return researchStudyArm;
  }
}
