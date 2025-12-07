import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConditionStage } from '../../models/backbones/ConditionStage.js';
import type {
  ICodeableConcept,
  IConditionStage,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ConditionStageBuilder - Fluent builder for ConditionStage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionStage = new ConditionStageBuilder()
 *   .setSummary(value)
 *   .addAssessment({ ... })
 *   .build();
 */
export class ConditionStageBuilder extends BackboneElementBuilder<ConditionStage, IConditionStage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set summary
   * Simple summary (disease specific)
   */
  setSummary(summary: ICodeableConcept): this {
    this.data.summary = summary;
    return this;
  }

  /**
   * Set type
   * Kind of staging
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add assessment
   * Formal record of assessment
   */
  addAssessment(assessment: IReference<'ClinicalImpression' | 'DiagnosticReport' | 'Observation'>): this {
    return this.addToArray('assessment', assessment);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionStage instance
   */
  build(): ConditionStage {
    return new ConditionStage(this.data);
  }

  /**
   * Build and validate the ConditionStage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionStage> {
    const conditionStage = this.build();
    await conditionStage.validateOrThrow();
    return conditionStage;
  }
}
