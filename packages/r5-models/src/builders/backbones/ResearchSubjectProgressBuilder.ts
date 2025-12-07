import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ResearchSubjectProgress } from '../../models/backbones/ResearchSubjectProgress.js';
import type {
  ICodeableConcept,
  IResearchSubjectProgress,
} from '@fhir-toolkit/r5-types';

/**
 * ResearchSubjectProgressBuilder - Fluent builder for ResearchSubjectProgress backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const researchSubjectProgress = new ResearchSubjectProgressBuilder()
 *   .setType(value)
 *   .build();
 */
export class ResearchSubjectProgressBuilder extends BackboneElementBuilder<ResearchSubjectProgress, IResearchSubjectProgress> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * state | milestone
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set subjectState
   * candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn
   */
  setSubjectState(subjectState: ICodeableConcept): this {
    this.data.subjectState = subjectState;
    return this;
  }

  /**
   * Set milestone
   * SignedUp | Screened | Randomized
   */
  setMilestone(milestone: ICodeableConcept): this {
    this.data.milestone = milestone;
    return this;
  }

  /**
   * Set reason
   * State change reason
   */
  setReason(reason: ICodeableConcept): this {
    this.data.reason = reason;
    return this;
  }

  /**
   * Set startDate
   * State change date
   */
  setStartDate(startDate: string): this {
    this.data.startDate = startDate;
    return this;
  }

  /**
   * Set endDate
   * State change date
   */
  setEndDate(endDate: string): this {
    this.data.endDate = endDate;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ResearchSubjectProgress instance
   */
  build(): ResearchSubjectProgress {
    return new ResearchSubjectProgress(this.data);
  }

  /**
   * Build and validate the ResearchSubjectProgress instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ResearchSubjectProgress> {
    const researchSubjectProgress = this.build();
    await researchSubjectProgress.validateOrThrow();
    return researchSubjectProgress;
  }
}
