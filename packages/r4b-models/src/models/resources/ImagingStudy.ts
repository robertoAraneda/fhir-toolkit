import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICoding,
  IElement,
  IIdentifier,
  IImagingStudy,
  IImagingStudySeries,
  IReference,
  ImagingStudyStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImagingStudy */
const IMAGING_STUDY_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'modality',
  'subject',
  'encounter',
  'started',
  '_started',
  'basedOn',
  'referrer',
  'interpreter',
  'endpoint',
  'numberOfSeries',
  '_numberOfSeries',
  'numberOfInstances',
  '_numberOfInstances',
  'procedureReference',
  'procedureCode',
  'location',
  'reasonCode',
  'reasonReference',
  'note',
  'description',
  '_description',
  'series',
] as const;

/**
 * ImagingStudy - Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 *
 * @see https://hl7.org/fhir/R4/imagingstudy.html
 *
 * @example
 * const imagingStudy = new ImagingStudy({
 *   resourceType: 'ImagingStudy',
 *   // ... properties
 * });
 */
export class ImagingStudy extends DomainResource implements IImagingStudy {
  readonly resourceType = 'ImagingStudy' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifiers for the whole study */
  identifier?: IIdentifier[];

  /** registered | available | cancelled | entered-in-error | unknown */
  status: ImagingStudyStatusType;

  /** Extension for status */
  _status?: IElement;

  /** All series modality if actual acquisition modalities */
  modality?: ICoding[];

  /** Who or what is the subject of the study */
  subject: IReference<'Patient' | 'Device' | 'Group'>;

  /** Encounter with which this imaging study is associated */
  encounter?: IReference<'Encounter'>;

  /** When the study was started */
  started?: string;

  /** Extension for started */
  _started?: IElement;

  /** Request fulfilled */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest' | 'Appointment' | 'AppointmentResponse' | 'Task'>[];

  /** Referring physician */
  referrer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Who interpreted images */
  interpreter?: IReference<'Practitioner' | 'PractitionerRole'>[];

  /** Study access endpoint */
  endpoint?: IReference<'Endpoint'>[];

  /** Number of Study Related Series */
  numberOfSeries?: number;

  /** Extension for numberOfSeries */
  _numberOfSeries?: IElement;

  /** Number of Study Related Instances */
  numberOfInstances?: number;

  /** Extension for numberOfInstances */
  _numberOfInstances?: IElement;

  /** The performed Procedure reference */
  procedureReference?: IReference<'Procedure'>;

  /** The performed procedure code */
  procedureCode?: ICodeableConcept[];

  /** Where ImagingStudy occurred */
  location?: IReference<'Location'>;

  /** Why the study was requested */
  reasonCode?: ICodeableConcept[];

  /** Why was study performed */
  reasonReference?: IReference<'Condition' | 'Observation' | 'Media' | 'DiagnosticReport' | 'DocumentReference'>[];

  /** User-defined comments */
  note?: IAnnotation[];

  /** Institution-generated description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Each study has one or more series of instances */
  series?: IImagingStudySeries[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingStudy>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_STUDY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingStudy from a JSON object
   */
  static fromJSON(json: IImagingStudy): ImagingStudy {
    return new ImagingStudy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingStudy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingStudy>): ImagingStudy {
    return new ImagingStudy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingStudy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingStudy) => Partial<IImagingStudy>): ImagingStudy {
    const currentData = this.toJSON();
    return new ImagingStudy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingStudy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingStudy {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, IMAGING_STUDY_PROPERTIES);
    return result as IImagingStudy;
  }

  /**
   * Create a deep clone of this ImagingStudy
   */
  clone(): ImagingStudy {
    return new ImagingStudy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingStudy
   */
  toString(): string {
    const parts: string[] = ['ImagingStudy'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
