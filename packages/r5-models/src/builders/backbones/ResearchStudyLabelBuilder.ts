import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchStudyLabel } from '../../models/backbones/ResearchStudyLabel.js';
import type {
  ICodeableConcept,
  IResearchStudyLabel,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchStudyLabelBuilder - Fluent builder for ResearchStudyLabel backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudyLabel = new ResearchStudyLabelBuilder()
 *   .setType(value)
 *   .build();
 */
export class ResearchStudyLabelBuilder extends BackboneElementBuilder<ResearchStudyLabel, IResearchStudyLabel> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * primary | official | scientific | plain-language | subtitle | short-title | acronym | earlier-title | language | auto-translated | human-use | machine-use | duplicate-uid
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set value
   * The name
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudyLabel instance
   */
  build(): ResearchStudyLabel {
    return new ResearchStudyLabel(this.data);
  }

  /**
   * Build and validate the ResearchStudyLabel instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudyLabel> {
    const researchStudyLabel = this.build();
    await researchStudyLabel.validateOrThrow();
    return researchStudyLabel;
  }
}
