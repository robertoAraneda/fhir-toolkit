import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IImagingSelectionInstance,
  IImagingSelectionInstanceImageRegion2D,
  IImagingSelectionInstanceImageRegion3D,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImagingSelectionInstance */
const IMAGING_SELECTION_INSTANCE_PROPERTIES = [
  'uid',
  '_uid',
  'number',
  '_number',
  'sopClass',
  'subset',
  '_subset',
  'imageRegion2D',
  'imageRegion3D',
] as const;

/**
 * ImagingSelectionInstance - The selected instances
 *
 * @see https://hl7.org/fhir/R5/imagingselectioninstance.html
 *
 * @example
 * const imagingSelectionInstance = new ImagingSelectionInstance({
 *   // ... properties
 * });
 */
export class ImagingSelectionInstance extends BackboneElement implements IImagingSelectionInstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** DICOM SOP Instance UID */
  uid: string;

  /** Extension for uid */
  _uid?: IElement;

  /** DICOM Instance Number */
  number?: number;

  /** Extension for number */
  _number?: IElement;

  /** DICOM SOP Class UID */
  sopClass?: ICoding;

  /** The selected subset of the SOP Instance */
  subset?: string[];

  /** Extension for subset */
  _subset?: IElement;

  /** A specific 2D region in a DICOM image / frame */
  imageRegion2D?: IImagingSelectionInstanceImageRegion2D[];

  /** A specific 3D region in a DICOM frame of reference */
  imageRegion3D?: IImagingSelectionInstanceImageRegion3D[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingSelectionInstance>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_SELECTION_INSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingSelectionInstance from a JSON object
   */
  static fromJSON(json: IImagingSelectionInstance): ImagingSelectionInstance {
    return new ImagingSelectionInstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingSelectionInstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingSelectionInstance>): ImagingSelectionInstance {
    return new ImagingSelectionInstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingSelectionInstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingSelectionInstance) => Partial<IImagingSelectionInstance>): ImagingSelectionInstance {
    const currentData = this.toJSON();
    return new ImagingSelectionInstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingSelectionInstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingSelectionInstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMAGING_SELECTION_INSTANCE_PROPERTIES);
    return result as IImagingSelectionInstance;
  }

  /**
   * Create a deep clone of this ImagingSelectionInstance
   */
  clone(): ImagingSelectionInstance {
    return new ImagingSelectionInstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingSelectionInstance
   */
  toString(): string {
    const parts: string[] = ['ImagingSelectionInstance'];
    return parts.join(', ');
  }
}
