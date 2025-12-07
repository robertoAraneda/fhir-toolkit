import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchStudyProgressStatus } from '../../models/backbones/ResearchStudyProgressStatus.js';
import type {
  ICodeableConcept,
  IPeriod,
  IResearchStudyProgressStatus,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchStudyProgressStatusBuilder - Fluent builder for ResearchStudyProgressStatus backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchStudyProgressStatus = new ResearchStudyProgressStatusBuilder()
 *   .setState(value)
 *   .build();
 */
export class ResearchStudyProgressStatusBuilder extends BackboneElementBuilder<ResearchStudyProgressStatus, IResearchStudyProgressStatus> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set state
   * Label for status or state (e.g. recruitment status)
   */
  setState(state: ICodeableConcept): this {
    this.data.state = state;
    return this;
  }

  /**
   * Set actual
   * Actual if true else anticipated
   */
  setActual(actual: boolean): this {
    this.data.actual = actual;
    return this;
  }

  /**
   * Set period
   * Date range
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchStudyProgressStatus instance
   */
  build(): ResearchStudyProgressStatus {
    return new ResearchStudyProgressStatus(this.data);
  }

  /**
   * Build and validate the ResearchStudyProgressStatus instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchStudyProgressStatus> {
    const researchStudyProgressStatus = this.build();
    await researchStudyProgressStatus.validateOrThrow();
    return researchStudyProgressStatus;
  }
}
