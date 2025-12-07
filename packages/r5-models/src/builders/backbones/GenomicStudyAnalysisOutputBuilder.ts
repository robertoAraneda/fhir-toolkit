import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GenomicStudyAnalysisOutput } from '../../models/backbones/GenomicStudyAnalysisOutput.js';
import type {
  ICodeableConcept,
  IGenomicStudyAnalysisOutput,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * GenomicStudyAnalysisOutputBuilder - Fluent builder for GenomicStudyAnalysisOutput backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const genomicStudyAnalysisOutput = new GenomicStudyAnalysisOutputBuilder()
 *   .setFile(value)
 *   .build();
 */
export class GenomicStudyAnalysisOutputBuilder extends BackboneElementBuilder<GenomicStudyAnalysisOutput, IGenomicStudyAnalysisOutput> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set file
   * File containing output data
   */
  setFile(file: IReference<'DocumentReference'>): this {
    this.data.file = file;
    return this;
  }

  /**
   * Set type
   * Type of output data (e.g., VCF, MAF, or BAM)
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GenomicStudyAnalysisOutput instance
   */
  build(): GenomicStudyAnalysisOutput {
    return new GenomicStudyAnalysisOutput(this.data);
  }

  /**
   * Build and validate the GenomicStudyAnalysisOutput instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GenomicStudyAnalysisOutput> {
    const genomicStudyAnalysisOutput = this.build();
    await genomicStudyAnalysisOutput.validateOrThrow();
    return genomicStudyAnalysisOutput;
  }
}
