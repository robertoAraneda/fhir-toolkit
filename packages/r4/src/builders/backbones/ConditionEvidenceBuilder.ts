import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConditionEvidence } from '../../models/backbones/ConditionEvidence.js';
import type {
  ICodeableConcept,
  IConditionEvidence,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ConditionEvidenceBuilder - Fluent builder for ConditionEvidence backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionEvidence = new ConditionEvidenceBuilder()
 *   .addCode({ ... })
 *   .build();
 */
export class ConditionEvidenceBuilder extends BackboneElementBuilder<ConditionEvidence, IConditionEvidence> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add code
   * Manifestation/symptom
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  /**
   * Add detail
   * Supporting information found elsewhere
   */
  addDetail(detail: IReference<'Resource'>): this {
    return this.addToArray('detail', detail);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionEvidence instance
   */
  build(): ConditionEvidence {
    return new ConditionEvidence(this.data);
  }

  /**
   * Build and validate the ConditionEvidence instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionEvidence> {
    const conditionEvidence = this.build();
    await conditionEvidence.validateOrThrow();
    return conditionEvidence;
  }
}
