import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImagingSelectionInstanceImageRegion2D,
  ImagingSelection2DGraphicTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImagingSelectionInstanceImageRegion2D */
const IMAGING_SELECTION_INSTANCE_IMAGE_REGION2D_PROPERTIES = [
  'regionType',
  '_regionType',
  'coordinate',
  '_coordinate',
] as const;

/**
 * ImagingSelectionInstanceImageRegion2D - A specific 2D region in a DICOM image / frame
 *
 * @see https://hl7.org/fhir/R5/imagingselectioninstanceimageregion2d.html
 *
 * @example
 * const imagingSelectionInstanceImageRegion2D = new ImagingSelectionInstanceImageRegion2D({
 *   // ... properties
 * });
 */
export class ImagingSelectionInstanceImageRegion2D extends BackboneElement implements IImagingSelectionInstanceImageRegion2D {

  // ============================================================================
  // Properties
  // ============================================================================

  /** point | polyline | interpolated | circle | ellipse */
  regionType: ImagingSelection2DGraphicTypeType;

  /** Extension for regionType */
  _regionType?: IElement;

  /** Specifies the coordinates that define the image region */
  coordinate: number[];

  /** Extension for coordinate */
  _coordinate?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingSelectionInstanceImageRegion2D>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_SELECTION_INSTANCE_IMAGE_REGION2D_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingSelectionInstanceImageRegion2D from a JSON object
   */
  static fromJSON(json: IImagingSelectionInstanceImageRegion2D): ImagingSelectionInstanceImageRegion2D {
    return new ImagingSelectionInstanceImageRegion2D(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingSelectionInstanceImageRegion2D with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingSelectionInstanceImageRegion2D>): ImagingSelectionInstanceImageRegion2D {
    return new ImagingSelectionInstanceImageRegion2D({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingSelectionInstanceImageRegion2D by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingSelectionInstanceImageRegion2D) => Partial<IImagingSelectionInstanceImageRegion2D>): ImagingSelectionInstanceImageRegion2D {
    const currentData = this.toJSON();
    return new ImagingSelectionInstanceImageRegion2D({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingSelectionInstanceImageRegion2D)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingSelectionInstanceImageRegion2D {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMAGING_SELECTION_INSTANCE_IMAGE_REGION2D_PROPERTIES);
    return result as IImagingSelectionInstanceImageRegion2D;
  }

  /**
   * Create a deep clone of this ImagingSelectionInstanceImageRegion2D
   */
  clone(): ImagingSelectionInstanceImageRegion2D {
    return new ImagingSelectionInstanceImageRegion2D(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingSelectionInstanceImageRegion2D
   */
  toString(): string {
    const parts: string[] = ['ImagingSelectionInstanceImageRegion2D'];
    return parts.join(', ');
  }
}
