import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchStudyOutcomeMeasure } from '../../models/backbones/ResearchStudyOutcomeMeasure.js';
import type {
  ICodeableConcept,
  IReference,
  IResearchStudyOutcomeMeasure,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchStudyOutcomeMeasureBuilder - Fluent builder for ResearchStudyOutcomeMeasure backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudyOutcomeMeasure = new ResearchStudyOutcomeMeasureBuilder()
 *   .setName(value)
 *   .addType({ ... })
 *   .build();
 */
export class ResearchStudyOutcomeMeasureBuilder extends BackboneElementBuilder<ResearchStudyOutcomeMeasure, IResearchStudyOutcomeMeasure> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Label for the outcome
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Description of the outcome
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set reference
   * Structured outcome definition
   */
  setReference(reference: IReference<'EvidenceVariable'>): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add type
   * primary | secondary | exploratory
   */
  addType(type: ICodeableConcept): this {
    return this.addToArray('type', type);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudyOutcomeMeasure instance
   */
  build(): ResearchStudyOutcomeMeasure {
    return new ResearchStudyOutcomeMeasure(this.data);
  }

  /**
   * Build and validate the ResearchStudyOutcomeMeasure instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudyOutcomeMeasure> {
    const researchStudyOutcomeMeasure = this.build();
    await researchStudyOutcomeMeasure.validateOrThrow();
    return researchStudyOutcomeMeasure;
  }
}
