import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IImagingStudySeriesPerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImagingStudySeriesPerformer */
const IMAGING_STUDY_SERIES_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * ImagingStudySeriesPerformer - Who performed the series
 *
 * @see https://hl7.org/fhir/R5/imagingstudyseriesperformer.html
 *
 * @example
 * const imagingStudySeriesPerformer = new ImagingStudySeriesPerformer({
 *   // ... properties
 * });
 */
export class ImagingStudySeriesPerformer extends BackboneElement implements IImagingStudySeriesPerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of performance */
  function?: ICodeableConcept;

  /** Who performed the series */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson' | 'HealthcareService'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingStudySeriesPerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_STUDY_SERIES_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingStudySeriesPerformer from a JSON object
   */
  static fromJSON(json: IImagingStudySeriesPerformer): ImagingStudySeriesPerformer {
    return new ImagingStudySeriesPerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingStudySeriesPerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingStudySeriesPerformer>): ImagingStudySeriesPerformer {
    return new ImagingStudySeriesPerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingStudySeriesPerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingStudySeriesPerformer) => Partial<IImagingStudySeriesPerformer>): ImagingStudySeriesPerformer {
    const currentData = this.toJSON();
    return new ImagingStudySeriesPerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingStudySeriesPerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingStudySeriesPerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMAGING_STUDY_SERIES_PERFORMER_PROPERTIES);
    return result as IImagingStudySeriesPerformer;
  }

  /**
   * Create a deep clone of this ImagingStudySeriesPerformer
   */
  clone(): ImagingStudySeriesPerformer {
    return new ImagingStudySeriesPerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingStudySeriesPerformer
   */
  toString(): string {
    const parts: string[] = ['ImagingStudySeriesPerformer'];
    return parts.join(', ');
  }
}
