import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImagingSelectionInstanceImageRegion3D } from '../../models/backbones/ImagingSelectionInstanceImageRegion3D.js';
import type {
  IImagingSelectionInstanceImageRegion3D,
  ImagingSelection3DGraphicTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * ImagingSelectionInstanceImageRegion3DBuilder - Fluent builder for ImagingSelectionInstanceImageRegion3D backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const imagingSelectionInstanceImageRegion3D = new ImagingSelectionInstanceImageRegion3DBuilder()
 *   .setRegionType(value)
 *   .addCoordinate({ ... })
 *   .build();
 */
export class ImagingSelectionInstanceImageRegion3DBuilder extends BackboneElementBuilder<ImagingSelectionInstanceImageRegion3D, IImagingSelectionInstanceImageRegion3D> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set regionType
   * point | multipoint | polyline | polygon | ellipse | ellipsoid
   */
  setRegionType(regionType: ImagingSelection3DGraphicTypeType): this {
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
   * Build the ImagingSelectionInstanceImageRegion3D instance
   */
  build(): ImagingSelectionInstanceImageRegion3D {
    return new ImagingSelectionInstanceImageRegion3D(this.data);
  }

  /**
   * Build and validate the ImagingSelectionInstanceImageRegion3D instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImagingSelectionInstanceImageRegion3D> {
    const imagingSelectionInstanceImageRegion3D = this.build();
    await imagingSelectionInstanceImageRegion3D.validateOrThrow();
    return imagingSelectionInstanceImageRegion3D;
  }
}
