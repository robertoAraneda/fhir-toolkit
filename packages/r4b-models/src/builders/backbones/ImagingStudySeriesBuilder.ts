import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImagingStudySeries } from '../../models/backbones/ImagingStudySeries.js';
import type {
  ICoding,
  IImagingStudySeries,
  IImagingStudySeriesInstance,
  IImagingStudySeriesPerformer,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ImagingStudySeriesBuilder - Fluent builder for ImagingStudySeries backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingStudySeries = new ImagingStudySeriesBuilder()
 *   .setUid(value)
 *   .addEndpoint({ ... })
 *   .build();
 */
export class ImagingStudySeriesBuilder extends BackboneElementBuilder<ImagingStudySeries, IImagingStudySeries> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set uid
   * DICOM Series Instance UID for the series
   */
  setUid(uid: string): this {
    this.data.uid = uid;
    return this;
  }

  /**
   * Set number
   * Numeric identifier of this series
   */
  setNumber(number: number): this {
    this.data.number = number;
    return this;
  }

  /**
   * Set modality
   * The modality of the instances in the series
   */
  setModality(modality: ICoding): this {
    this.data.modality = modality;
    return this;
  }

  /**
   * Set description
   * A short human readable summary of the series
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set numberOfInstances
   * Number of Series Related Instances
   */
  setNumberOfInstances(numberOfInstances: number): this {
    this.data.numberOfInstances = numberOfInstances;
    return this;
  }

  /**
   * Set bodySite
   * Body part examined
   */
  setBodySite(bodySite: ICoding): this {
    this.data.bodySite = bodySite;
    return this;
  }

  /**
   * Set laterality
   * Body part laterality
   */
  setLaterality(laterality: ICoding): this {
    this.data.laterality = laterality;
    return this;
  }

  /**
   * Set started
   * When the series started
   */
  setStarted(started: string): this {
    this.data.started = started;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add endpoint
   * Series access endpoint
   */
  addEndpoint(endpoint: IReference<'Endpoint'>): this {
    return this.addToArray('endpoint', endpoint);
  }

  /**
   * Add specimen
   * Specimen imaged
   */
  addSpecimen(specimen: IReference<'Specimen'>): this {
    return this.addToArray('specimen', specimen);
  }

  /**
   * Add performer
   * Who performed the series
   */
  addPerformer(performer: IImagingStudySeriesPerformer): this {
    return this.addToArray('performer', performer);
  }

  /**
   * Add instance
   * A single SOP instance from the series
   */
  addInstance(instance: IImagingStudySeriesInstance): this {
    return this.addToArray('instance', instance);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImagingStudySeries instance
   */
  build(): ImagingStudySeries {
    return new ImagingStudySeries(this.data);
  }

  /**
   * Build and validate the ImagingStudySeries instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingStudySeries> {
    const imagingStudySeries = this.build();
    await imagingStudySeries.validateOrThrow();
    return imagingStudySeries;
  }
}
