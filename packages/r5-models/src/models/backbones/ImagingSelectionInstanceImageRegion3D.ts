import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImagingSelectionInstanceImageRegion3D,
  ImagingSelection3DGraphicTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImagingSelectionInstanceImageRegion3D */
const IMAGING_SELECTION_INSTANCE_IMAGE_REGION3D_PROPERTIES = [
  'regionType',
  '_regionType',
  'coordinate',
  '_coordinate',
] as const;

/**
 * ImagingSelectionInstanceImageRegion3D - A specific 3D region in a DICOM frame of reference
 *
 * @see https://hl7.org/fhir/R5/imagingselectioninstanceimageregion3d.html
 *
 * @example
 * const imagingSelectionInstanceImageRegion3D = new ImagingSelectionInstanceImageRegion3D({
 *   // ... properties
 * });
 */
export class ImagingSelectionInstanceImageRegion3D extends BackboneElement implements IImagingSelectionInstanceImageRegion3D {

  // ============================================================================
  // Properties
  // ============================================================================

  /** point | multipoint | polyline | polygon | ellipse | ellipsoid */
  regionType: ImagingSelection3DGraphicTypeType;

  /** Extension for regionType */
  _regionType?: IElement;

  /** Specifies the coordinates that define the image region */
  coordinate: number[];

  /** Extension for coordinate */
  _coordinate?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingSelectionInstanceImageRegion3D>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_SELECTION_INSTANCE_IMAGE_REGION3D_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingSelectionInstanceImageRegion3D from a JSON object
   */
  static fromJSON(json: IImagingSelectionInstanceImageRegion3D): ImagingSelectionInstanceImageRegion3D {
    return new ImagingSelectionInstanceImageRegion3D(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingSelectionInstanceImageRegion3D with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingSelectionInstanceImageRegion3D>): ImagingSelectionInstanceImageRegion3D {
    return new ImagingSelectionInstanceImageRegion3D({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingSelectionInstanceImageRegion3D by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingSelectionInstanceImageRegion3D) => Partial<IImagingSelectionInstanceImageRegion3D>): ImagingSelectionInstanceImageRegion3D {
    const currentData = this.toJSON();
    return new ImagingSelectionInstanceImageRegion3D({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingSelectionInstanceImageRegion3D)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingSelectionInstanceImageRegion3D {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMAGING_SELECTION_INSTANCE_IMAGE_REGION3D_PROPERTIES);
    return result as IImagingSelectionInstanceImageRegion3D;
  }

  /**
   * Create a deep clone of this ImagingSelectionInstanceImageRegion3D
   */
  clone(): ImagingSelectionInstanceImageRegion3D {
    return new ImagingSelectionInstanceImageRegion3D(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingSelectionInstanceImageRegion3D
   */
  toString(): string {
    const parts: string[] = ['ImagingSelectionInstanceImageRegion3D'];
    return parts.join(', ');
  }
}
