import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GenomicStudyAnalysisPerformer } from '../../models/backbones/GenomicStudyAnalysisPerformer.js';
import type {
  ICodeableConcept,
  IGenomicStudyAnalysisPerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * GenomicStudyAnalysisPerformerBuilder - Fluent builder for GenomicStudyAnalysisPerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const genomicStudyAnalysisPerformer = new GenomicStudyAnalysisPerformerBuilder()
 *   .setActor(value)
 *   .build();
 */
export class GenomicStudyAnalysisPerformerBuilder extends BackboneElementBuilder<GenomicStudyAnalysisPerformer, IGenomicStudyAnalysisPerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set actor
   * The organization, healthcare professional, or others who participated in performing this analysis
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Device'>): this {
    this.data.actor = actor;
    return this;
  }

  /**
   * Set role
   * Role of the actor for this analysis
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GenomicStudyAnalysisPerformer instance
   */
  build(): GenomicStudyAnalysisPerformer {
    return new GenomicStudyAnalysisPerformer(this.data);
  }

  /**
   * Build and validate the GenomicStudyAnalysisPerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GenomicStudyAnalysisPerformer> {
    const genomicStudyAnalysisPerformer = this.build();
    await genomicStudyAnalysisPerformer.validateOrThrow();
    return genomicStudyAnalysisPerformer;
  }
}
