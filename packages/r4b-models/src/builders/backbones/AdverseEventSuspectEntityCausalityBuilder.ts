import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventSuspectEntityCausality } from '../../models/backbones/AdverseEventSuspectEntityCausality.js';
import type {
  IAdverseEventSuspectEntityCausality,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * AdverseEventSuspectEntityCausalityBuilder - Fluent builder for AdverseEventSuspectEntityCausality backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventSuspectEntityCausality = new AdverseEventSuspectEntityCausalityBuilder()
 *   .setAssessment(value)
 *   .build();
 */
export class AdverseEventSuspectEntityCausalityBuilder extends BackboneElementBuilder<AdverseEventSuspectEntityCausality, IAdverseEventSuspectEntityCausality> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set assessment
   * Assessment of if the entity caused the event
   */
  setAssessment(assessment: ICodeableConcept): this {
    this.data.assessment = assessment;
    return this;
  }

  /**
   * Set productRelatedness
   * AdverseEvent.suspectEntity.causalityProductRelatedness
   */
  setProductRelatedness(productRelatedness: string): this {
    this.data.productRelatedness = productRelatedness;
    return this;
  }

  /**
   * Set author
   * AdverseEvent.suspectEntity.causalityAuthor
   */
  setAuthor(author: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.author = author;
    return this;
  }

  /**
   * Set method
   * ProbabilityScale | Bayesian | Checklist
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEventSuspectEntityCausality instance
   */
  build(): AdverseEventSuspectEntityCausality {
    return new AdverseEventSuspectEntityCausality(this.data);
  }

  /**
   * Build and validate the AdverseEventSuspectEntityCausality instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEventSuspectEntityCausality> {
    const adverseEventSuspectEntityCausality = this.build();
    await adverseEventSuspectEntityCausality.validateOrThrow();
    return adverseEventSuspectEntityCausality;
  }
}
