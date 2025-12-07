import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IImagingStudySeries,
  IImagingStudySeriesInstance,
  IImagingStudySeriesPerformer,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImagingStudySeries */
const IMAGING_STUDY_SERIES_PROPERTIES = [
  'uid',
  '_uid',
  'number',
  '_number',
  'modality',
  'description',
  '_description',
  'numberOfInstances',
  '_numberOfInstances',
  'endpoint',
  'bodySite',
  'laterality',
  'specimen',
  'started',
  '_started',
  'performer',
  'instance',
] as const;

/**
 * ImagingStudySeries - Each study has one or more series of instances
 *
 * @see https://hl7.org/fhir/R4/imagingstudyseries.html
 *
 * @example
 * const imagingStudySeries = new ImagingStudySeries({
 *   // ... properties
 * });
 */
export class ImagingStudySeries extends BackboneElement implements IImagingStudySeries {

  // ============================================================================
  // Properties
  // ============================================================================

  /** DICOM Series Instance UID for the series */
  uid: string;

  /** Extension for uid */
  _uid?: IElement;

  /** Numeric identifier of this series */
  number?: number;

  /** Extension for number */
  _number?: IElement;

  /** The modality of the instances in the series */
  modality: ICoding;

  /** A short human readable summary of the series */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Number of Series Related Instances */
  numberOfInstances?: number;

  /** Extension for numberOfInstances */
  _numberOfInstances?: IElement;

  /** Series access endpoint */
  endpoint?: IReference<'Endpoint'>[];

  /** Body part examined */
  bodySite?: ICoding;

  /** Body part laterality */
  laterality?: ICoding;

  /** Specimen imaged */
  specimen?: IReference<'Specimen'>[];

  /** When the series started */
  started?: string;

  /** Extension for started */
  _started?: IElement;

  /** Who performed the series */
  performer?: IImagingStudySeriesPerformer[];

  /** A single SOP instance from the series */
  instance?: IImagingStudySeriesInstance[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingStudySeries>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_STUDY_SERIES_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingStudySeries from a JSON object
   */
  static fromJSON(json: IImagingStudySeries): ImagingStudySeries {
    return new ImagingStudySeries(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingStudySeries with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingStudySeries>): ImagingStudySeries {
    return new ImagingStudySeries({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingStudySeries by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingStudySeries) => Partial<IImagingStudySeries>): ImagingStudySeries {
    const currentData = this.toJSON();
    return new ImagingStudySeries({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingStudySeries)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingStudySeries {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMAGING_STUDY_SERIES_PROPERTIES);
    return result as IImagingStudySeries;
  }

  /**
   * Create a deep clone of this ImagingStudySeries
   */
  clone(): ImagingStudySeries {
    return new ImagingStudySeries(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingStudySeries
   */
  toString(): string {
    const parts: string[] = ['ImagingStudySeries'];
    return parts.join(', ');
  }
}
