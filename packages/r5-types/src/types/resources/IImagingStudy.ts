import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IImagingStudySeries } from '../backbones/IImagingStudySeries.js';
import type { ImagingStudyStatusType } from '../../valuesets/index.js';

/**
 * ImagingStudy Interface
 * 
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 * 
 *
 * @see https://hl7.org/fhir/R5/imagingstudy.html
 */
export interface IImagingStudy extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ImagingStudy';

  /**
   * Identifiers for the whole study
   */
  identifier?: IIdentifier[];

  /**
   * registered | available | cancelled | entered-in-error | unknown
   */
  status: ImagingStudyStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * All of the distinct values for series' modalities
   */
  modality?: ICodeableConcept[];

  /**
   * Who or what is the subject of the study
   */
  subject: IReference<'Patient' | 'Device' | 'Group'>;

  /**
   * Encounter with which this imaging study is associated
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the study was started
   */
  started?: string;
  /**
   * Extension for started
   */
  _started?: IElement;

  /**
   * Request fulfilled
   */
  basedOn?: IReference<'CarePlan' | 'ServiceRequest' | 'Appointment' | 'AppointmentResponse' | 'Task'>[];

  /**
   * Part of referenced event
   */
  partOf?: IReference<'Procedure'>[];

  /**
   * Referring physician
   */
  referrer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Study access endpoint
   */
  endpoint?: IReference<'Endpoint'>[];

  /**
   * Number of Study Related Series
   */
  numberOfSeries?: number;
  /**
   * Extension for numberOfSeries
   */
  _numberOfSeries?: IElement;

  /**
   * Number of Study Related Instances
   */
  numberOfInstances?: number;
  /**
   * Extension for numberOfInstances
   */
  _numberOfInstances?: IElement;

  /**
   * The performed procedure or code
   */
  procedure?: ICodeableReference[];

  /**
   * Where ImagingStudy occurred
   */
  location?: IReference<'Location'>;

  /**
   * Why the study was requested / performed
   */
  reason?: ICodeableReference[];

  /**
   * User-defined comments
   */
  note?: IAnnotation[];

  /**
   * Institution-generated description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Each study has one or more series of instances
   */
  series?: IImagingStudySeries[];

}
