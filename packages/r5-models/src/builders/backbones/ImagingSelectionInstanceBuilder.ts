import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImagingSelectionInstance } from '../../models/backbones/ImagingSelectionInstance.js';
import type {
  ICoding,
  IImagingSelectionInstance,
  IImagingSelectionInstanceImageRegion2D,
  IImagingSelectionInstanceImageRegion3D,
} from '@fhir-toolkit/r5-types';

/**
 * ImagingSelectionInstanceBuilder - Fluent builder for ImagingSelectionInstance backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingSelectionInstance = new ImagingSelectionInstanceBuilder()
 *   .setUid(value)
 *   .addSubset({ ... })
 *   .build();
 */
export class ImagingSelectionInstanceBuilder extends BackboneElementBuilder<ImagingSelectionInstance, IImagingSelectionInstance> {
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
   * Set number
   * DICOM Instance Number
   */
  setNumber(number: number): this {
    this.data.number = number;
    return this;
  }

  /**
   * Set sopClass
   * DICOM SOP Class UID
   */
  setSopClass(sopClass: ICoding): this {
    this.data.sopClass = sopClass;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add subset
   * The selected subset of the SOP Instance
   */
  addSubset(subset: string): this {
    return this.addToArray('subset', subset);
  }

  /**
   * Add imageRegion2D
   * A specific 2D region in a DICOM image / frame
   */
  addImageRegion2D(imageRegion2D: IImagingSelectionInstanceImageRegion2D): this {
    return this.addToArray('imageRegion2D', imageRegion2D);
  }

  /**
   * Add imageRegion3D
   * A specific 3D region in a DICOM frame of reference
   */
  addImageRegion3D(imageRegion3D: IImagingSelectionInstanceImageRegion3D): this {
    return this.addToArray('imageRegion3D', imageRegion3D);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImagingSelectionInstance instance
   */
  build(): ImagingSelectionInstance {
    return new ImagingSelectionInstance(this.data);
  }

  /**
   * Build and validate the ImagingSelectionInstance instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingSelectionInstance> {
    const imagingSelectionInstance = this.build();
    await imagingSelectionInstance.validateOrThrow();
    return imagingSelectionInstance;
  }
}
