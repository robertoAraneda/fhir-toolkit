import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IImagingStudySeriesInstance,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImagingStudySeriesInstance */
const IMAGING_STUDY_SERIES_INSTANCE_PROPERTIES = [
  'uid',
  '_uid',
  'sopClass',
  'number',
  '_number',
  'title',
  '_title',
] as const;

/**
 * ImagingStudySeriesInstance - A single SOP instance from the series
 *
 * @see https://hl7.org/fhir/R4B/imagingstudyseriesinstance.html
 *
 * @example
 * const imagingStudySeriesInstance = new ImagingStudySeriesInstance({
 *   // ... properties
 * });
 */
export class ImagingStudySeriesInstance extends BackboneElement implements IImagingStudySeriesInstance {

  // ============================================================================
  // Properties
  // ============================================================================

  /** DICOM SOP Instance UID */
  uid: string;

  /** Extension for uid */
  _uid?: IElement;

  /** DICOM class type */
  sopClass: ICoding;

  /** The number of this instance in the series */
  number?: number;

  /** Extension for number */
  _number?: IElement;

  /** Description of instance */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingStudySeriesInstance>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_STUDY_SERIES_INSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingStudySeriesInstance from a JSON object
   */
  static fromJSON(json: IImagingStudySeriesInstance): ImagingStudySeriesInstance {
    return new ImagingStudySeriesInstance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingStudySeriesInstance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingStudySeriesInstance>): ImagingStudySeriesInstance {
    return new ImagingStudySeriesInstance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingStudySeriesInstance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingStudySeriesInstance) => Partial<IImagingStudySeriesInstance>): ImagingStudySeriesInstance {
    const currentData = this.toJSON();
    return new ImagingStudySeriesInstance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingStudySeriesInstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingStudySeriesInstance {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMAGING_STUDY_SERIES_INSTANCE_PROPERTIES);
    return result as IImagingStudySeriesInstance;
  }

  /**
   * Create a deep clone of this ImagingStudySeriesInstance
   */
  clone(): ImagingStudySeriesInstance {
    return new ImagingStudySeriesInstance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingStudySeriesInstance
   */
  toString(): string {
    const parts: string[] = ['ImagingStudySeriesInstance'];
    return parts.join(', ');
  }
}
