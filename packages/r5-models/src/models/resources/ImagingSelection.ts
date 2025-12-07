import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IImagingSelection,
  IImagingSelectionInstance,
  IImagingSelectionPerformer,
  IReference,
  ImagingSelectionStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImagingSelection */
const IMAGING_SELECTION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'subject',
  'issued',
  '_issued',
  'performer',
  'basedOn',
  'category',
  'code',
  'studyUid',
  '_studyUid',
  'derivedFrom',
  'endpoint',
  'seriesUid',
  '_seriesUid',
  'seriesNumber',
  '_seriesNumber',
  'frameOfReferenceUid',
  '_frameOfReferenceUid',
  'bodySite',
  'focus',
  'instance',
] as const;

/**
 * ImagingSelection - A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource.
 *
 * @see https://hl7.org/fhir/R4/imagingselection.html
 *
 * @example
 * const imagingSelection = new ImagingSelection({
 *   resourceType: 'ImagingSelection',
 *   // ... properties
 * });
 */
export class ImagingSelection extends DomainResource implements IImagingSelection {
  readonly resourceType = 'ImagingSelection' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for Imaging Selection */
  identifier?: IIdentifier[];

  /** available | entered-in-error | unknown */
  status: ImagingSelectionStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Subject of the selected instances */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location' | 'Organization' | 'Procedure' | 'Practitioner' | 'Medication' | 'Substance' | 'Specimen'>;

  /** Date / Time when this imaging selection was created */
  issued?: string;

  /** Extension for issued */
  _issued?: IElement;

  /** Selector of the instances (human or machine) */
  performer?: IImagingSelectionPerformer[];

  /** Associated request */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest' | 'Appointment' | 'AppointmentResponse' | 'Task'>[];

  /** Classifies the imaging selection */
  category?: ICodeableConcept[];

  /** Imaging Selection purpose text or code */
  code: ICodeableConcept;

  /** DICOM Study Instance UID */
  studyUid?: string;

  /** Extension for studyUid */
  _studyUid?: IElement;

  /** The imaging study from which the imaging selection is derived */
  derivedFrom?: IReference<'ImagingStudy' | 'DocumentReference'>[];

  /** The network service providing retrieval for the images referenced in the imaging selection */
  endpoint?: IReference<'Endpoint'>[];

  /** DICOM Series Instance UID */
  seriesUid?: string;

  /** Extension for seriesUid */
  _seriesUid?: IElement;

  /** DICOM Series Number */
  seriesNumber?: number;

  /** Extension for seriesNumber */
  _seriesNumber?: IElement;

  /** The Frame of Reference UID for the selected images */
  frameOfReferenceUid?: string;

  /** Extension for frameOfReferenceUid */
  _frameOfReferenceUid?: IElement;

  /** Body part examined */
  bodySite?: ICodeableReference;

  /** Related resource that is the focus for the imaging selection */
  focus?: IReference<'ImagingSelection'>[];

  /** The selected instances */
  instance?: IImagingSelectionInstance[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImagingSelection>) {
    super(data);
    if (data) {
      this.assignProps(data, IMAGING_SELECTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImagingSelection from a JSON object
   */
  static fromJSON(json: IImagingSelection): ImagingSelection {
    return new ImagingSelection(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImagingSelection with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImagingSelection>): ImagingSelection {
    return new ImagingSelection({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImagingSelection by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImagingSelection) => Partial<IImagingSelection>): ImagingSelection {
    const currentData = this.toJSON();
    return new ImagingSelection({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImagingSelection)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImagingSelection {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, IMAGING_SELECTION_PROPERTIES);
    return result as IImagingSelection;
  }

  /**
   * Create a deep clone of this ImagingSelection
   */
  clone(): ImagingSelection {
    return new ImagingSelection(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImagingSelection
   */
  toString(): string {
    const parts: string[] = ['ImagingSelection'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
