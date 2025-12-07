import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImagingSelectionPerformer } from '../../models/backbones/ImagingSelectionPerformer.js';
import type {
  ICodeableConcept,
  IImagingSelectionPerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ImagingSelectionPerformerBuilder - Fluent builder for ImagingSelectionPerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingSelectionPerformer = new ImagingSelectionPerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class ImagingSelectionPerformerBuilder extends BackboneElementBuilder<ImagingSelectionPerformer, IImagingSelectionPerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Type of performer
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Author (human or machine)
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson' | 'HealthcareService'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImagingSelectionPerformer instance
   */
  build(): ImagingSelectionPerformer {
    return new ImagingSelectionPerformer(this.data);
  }

  /**
   * Build and validate the ImagingSelectionPerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingSelectionPerformer> {
    const imagingSelectionPerformer = this.build();
    await imagingSelectionPerformer.validateOrThrow();
    return imagingSelectionPerformer;
  }
}
