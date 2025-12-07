import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImagingSelectionInstanceImageRegion2D } from '../../models/backbones/ImagingSelectionInstanceImageRegion2D.js';
import type {
  IImagingSelectionInstanceImageRegion2D,
  ImagingSelection2DGraphicTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * ImagingSelectionInstanceImageRegion2DBuilder - Fluent builder for ImagingSelectionInstanceImageRegion2D backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingSelectionInstanceImageRegion2D = new ImagingSelectionInstanceImageRegion2DBuilder()
 *   .setRegionType(value)
 *   .addCoordinate({ ... })
 *   .build();
 */
export class ImagingSelectionInstanceImageRegion2DBuilder extends BackboneElementBuilder<ImagingSelectionInstanceImageRegion2D, IImagingSelectionInstanceImageRegion2D> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set regionType
   * point | polyline | interpolated | circle | ellipse
   */
  setRegionType(regionType: ImagingSelection2DGraphicTypeType): this {
    this.data.regionType = regionType;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add coordinate
   * Specifies the coordinates that define the image region
   */
  addCoordinate(coordinate: number): this {
    return this.addToArray('coordinate', coordinate);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImagingSelectionInstanceImageRegion2D instance
   */
  build(): ImagingSelectionInstanceImageRegion2D {
    return new ImagingSelectionInstanceImageRegion2D(this.data);
  }

  /**
   * Build and validate the ImagingSelectionInstanceImageRegion2D instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingSelectionInstanceImageRegion2D> {
    const imagingSelectionInstanceImageRegion2D = this.build();
    await imagingSelectionInstanceImageRegion2D.validateOrThrow();
    return imagingSelectionInstanceImageRegion2D;
  }
}
