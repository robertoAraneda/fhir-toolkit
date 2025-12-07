import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImagingStudySeriesInstance } from '../../models/backbones/ImagingStudySeriesInstance.js';
import type {
  ICoding,
  IImagingStudySeriesInstance,
} from '@fhir-toolkit/r4b-types';

/**
 * ImagingStudySeriesInstanceBuilder - Fluent builder for ImagingStudySeriesInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingStudySeriesInstance = new ImagingStudySeriesInstanceBuilder()
 *   .setUid(value)
 *   .build();
 */
export class ImagingStudySeriesInstanceBuilder extends BackboneElementBuilder<ImagingStudySeriesInstance, IImagingStudySeriesInstance> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set uid
   * DICOM SOP Instance UID
   */
  setUid(uid: string): this {
    this.data.uid = uid;
    return this;
  }

  /**
   * Set sopClass
   * DICOM class type
   */
  setSopClass(sopClass: ICoding): this {
    this.data.sopClass = sopClass;
    return this;
  }

  /**
   * Set number
   * The number of this instance in the series
   */
  setNumber(number: number): this {
    this.data.number = number;
    return this;
  }

  /**
   * Set title
   * Description of instance
   */
  setTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImagingStudySeriesInstance instance
   */
  build(): ImagingStudySeriesInstance {
    return new ImagingStudySeriesInstance(this.data);
  }

  /**
   * Build and validate the ImagingStudySeriesInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingStudySeriesInstance> {
    const imagingStudySeriesInstance = this.build();
    await imagingStudySeriesInstance.validateOrThrow();
    return imagingStudySeriesInstance;
  }
}
