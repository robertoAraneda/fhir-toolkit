import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImagingStudySeriesPerformer } from '../../models/backbones/ImagingStudySeriesPerformer.js';
import type {
  ICodeableConcept,
  IImagingStudySeriesPerformer,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ImagingStudySeriesPerformerBuilder - Fluent builder for ImagingStudySeriesPerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingStudySeriesPerformer = new ImagingStudySeriesPerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class ImagingStudySeriesPerformerBuilder extends BackboneElementBuilder<ImagingStudySeriesPerformer, IImagingStudySeriesPerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Type of performance
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Who performed the series
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImagingStudySeriesPerformer instance
   */
  build(): ImagingStudySeriesPerformer {
    return new ImagingStudySeriesPerformer(this.data);
  }

  /**
   * Build and validate the ImagingStudySeriesPerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingStudySeriesPerformer> {
    const imagingStudySeriesPerformer = this.build();
    await imagingStudySeriesPerformer.validateOrThrow();
    return imagingStudySeriesPerformer;
  }
}
