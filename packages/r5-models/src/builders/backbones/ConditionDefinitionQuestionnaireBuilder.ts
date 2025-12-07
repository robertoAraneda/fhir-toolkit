import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConditionDefinitionQuestionnaire } from '../../models/backbones/ConditionDefinitionQuestionnaire.js';
import type {
  ConditionQuestionnairePurposeType,
  IConditionDefinitionQuestionnaire,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ConditionDefinitionQuestionnaireBuilder - Fluent builder for ConditionDefinitionQuestionnaire backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionDefinitionQuestionnaire = new ConditionDefinitionQuestionnaireBuilder()
 *   .setPurpose(value)
 *   .build();
 */
export class ConditionDefinitionQuestionnaireBuilder extends BackboneElementBuilder<ConditionDefinitionQuestionnaire, IConditionDefinitionQuestionnaire> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set purpose
   * preadmit | diff-diagnosis | outcome
   */
  setPurpose(purpose: ConditionQuestionnairePurposeType): this {
    this.data.purpose = purpose;
    return this;
  }

  /**
   * Set reference
   * Specific Questionnaire
   */
  setReference(reference: IReference<'Questionnaire'>): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionDefinitionQuestionnaire instance
   */
  build(): ConditionDefinitionQuestionnaire {
    return new ConditionDefinitionQuestionnaire(this.data);
  }

  /**
   * Build and validate the ConditionDefinitionQuestionnaire instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionDefinitionQuestionnaire> {
    const conditionDefinitionQuestionnaire = this.build();
    await conditionDefinitionQuestionnaire.validateOrThrow();
    return conditionDefinitionQuestionnaire;
  }
}
