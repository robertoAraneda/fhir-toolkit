import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConditionDefinitionObservation } from '../../models/backbones/ConditionDefinitionObservation.js';
import type {
  ICodeableConcept,
  IConditionDefinitionObservation,
} from '@fhir-toolkit/r5-types';

/**
 * ConditionDefinitionObservationBuilder - Fluent builder for ConditionDefinitionObservation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionDefinitionObservation = new ConditionDefinitionObservationBuilder()
 *   .setCategory(value)
 *   .build();
 */
export class ConditionDefinitionObservationBuilder extends BackboneElementBuilder<ConditionDefinitionObservation, IConditionDefinitionObservation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set category
   * Category that is relevant
   */
  setCategory(category: ICodeableConcept): this {
    this.data.category = category;
    return this;
  }

  /**
   * Set code
   * Code for relevant Observation
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionDefinitionObservation instance
   */
  build(): ConditionDefinitionObservation {
    return new ConditionDefinitionObservation(this.data);
  }

  /**
   * Build and validate the ConditionDefinitionObservation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionDefinitionObservation> {
    const conditionDefinitionObservation = this.build();
    await conditionDefinitionObservation.validateOrThrow();
    return conditionDefinitionObservation;
  }
}
