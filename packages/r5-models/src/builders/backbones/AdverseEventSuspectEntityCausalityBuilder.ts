import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventSuspectEntityCausality } from '../../models/backbones/AdverseEventSuspectEntityCausality.js';
import type {
  IAdverseEventSuspectEntityCausality,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AdverseEventSuspectEntityCausalityBuilder - Fluent builder for AdverseEventSuspectEntityCausality backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventSuspectEntityCausality = new AdverseEventSuspectEntityCausalityBuilder()
 *   .setAssessmentMethod(value)
 *   .build();
 */
export class AdverseEventSuspectEntityCausalityBuilder extends BackboneElementBuilder<AdverseEventSuspectEntityCausality, IAdverseEventSuspectEntityCausality> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set assessmentMethod
   * Method of evaluating the relatedness of the suspected entity to the event
   */
  setAssessmentMethod(assessmentMethod: ICodeableConcept): this {
    this.data.assessmentMethod = assessmentMethod;
    return this;
  }

  /**
   * Set entityRelatedness
   * Result of the assessment regarding the relatedness of the suspected entity to the event
   */
  setEntityRelatedness(entityRelatedness: ICodeableConcept): this {
    this.data.entityRelatedness = entityRelatedness;
    return this;
  }

  /**
   * Set author
   * Author of the information on the possible cause of the event
   */
  setAuthor(author: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'ResearchSubject'>): this {
    this.data.author = author;
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
